let { sequelize } = require("../../DB")
let Sequelize = require("sequelize")

const User = sequelize.define(
  "users",
  {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
    },
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    approved: {
      type: Sequelize.BOOLEAN,
    },
  },
  {
    timestamps: false,
    underscored: true,
  }
)

module.exports.User = User
