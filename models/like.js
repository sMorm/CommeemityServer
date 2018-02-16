import Following from './following'

export default (sequelize, DataTypes) => {
  const Like = sequelize.define('like', {
  })

  Like.associate = (models) => {
    Like.belongsTo(models.Post, {
      foreignKey: 'author'
    })
  }
}