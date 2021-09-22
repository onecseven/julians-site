let { sequelize } = require("../DB")
let Sequelize = require("sequelize")
let { Order } = require("./Orders")


const User = sequelize.define(
  "users",
  {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
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
    },
  },
  {
    timestamps: false,
  }
)


module.exports.User = User