export default {
  Query: {
    getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id }}),
  },
  Mutation: {
    createUser: async (parent, args, { models }) => {
      const user = await models.User.query().findOne(args)

      if(user) {
        throw new Error('User already exists')
      }

      await models.User.query().insert(args)
    }
  }
}