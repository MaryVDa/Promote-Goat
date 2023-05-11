const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    socialMedia: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.BLOB,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

model.exports = Post;
