import bcrypt from 'bcrypt'
/**
 * check for error code 23505, which means that 
 * there is a unique key value violation.
 */
function formatError(error) {
  const details = error.detail.split('=')
  if(error.code = '23505' && details.length > 1) {
    return [{
      path: details[0],
      message: details[1]
    }]
  }
}

export default {
  Query: {
    getUser: async (parent, { id }, { models }) => {
      const user = await models.User.query().findById(id)
      return user
    }
  },
  Mutation: {
    /**
     * @password is deconstructed so we can use it to 
     * verify its length. otherArgs contains: 
     * @username, @firstname, @lastname, @email
     */
    signup: async (parent, { password, ...otherArgs }, { models }) => {
      if(password.length < 6) {
        return { success: false, 
          errors: [{
            path: 'password',
            message: 'Password length must be at least 6 characters.'
          }]
        }
      }

      const hashedPass = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT))
      if (hashedPass) {
        const user = await models.User.query().insert({...otherArgs, password: hashedPass})
          .onError((error) => {
            return { success: false, errors: formatError(error) }
          })
        if (user.success === false)
          return user
        else 
          return { success: true, user }
      } else {
        return { 
          success: false,
          errors: [{
            path: 'password',
            message: 'Failed to hash password'
          }]
        }
      }
    }
  }
}

