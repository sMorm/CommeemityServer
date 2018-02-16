import Sequelize from 'sequelize'

const sqlUser = process.env.SQL_USER || 'postgres'
const sqlPass = process.env.SQL_PASS || 'postgres'
const sequelize = new Sequelize('commeemity', sqlUser, sqlPass, {
  dialect: 'postgres'
})

const models = {
  User: sequelize.import('./user'),
  Following: sequelize.import('./following'),
  Post: sequelize.import('./post'),
  Repost: sequelize.import('./repost'),
  Replies: sequelize.import('./replies'),
  Likes: sequelize.import('./like')
}

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
})

models.sequelize = sequelize
models.Sequelize = Sequelize

export default models