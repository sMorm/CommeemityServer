import Following from './following'

export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    firstname: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING }
  })
  // 1:M
}
