import Following from './following'

export default (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    text: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING }, // url to s3 image
  })

  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: 'author'
    })
  }
}