let Sequelize = require("sequelize")
let { sequelize } = require("../../DB")

let Order = sequelize.define(
  "orders",
  {
    order_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: Sequelize.DATEONLY,
    },
    timeslot: {
      type: Sequelize.INTEGER,
      validate: {
        min: 1,
        max: 6,
      },
    },
    meeting_type: {
      type: Sequelize.STRING,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users', 
        key: 'user_id', // 'id' refers to column name in fathers table
     }
    },
  },
  {
    timestamps: false,
  }
)


module.exports.Order = Order
