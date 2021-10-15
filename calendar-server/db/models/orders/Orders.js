let Sequelize = require("sequelize")
let { sequelize } = require("../../DB")

/**
 * 
 * @param {object} orderData
 * @param {string} orderData.date YYYY/MM/DD
 * @param {number} orderData.timeslot 1-6
 * @param {string} orderData.meeting_type [YOGA/ENERGY/CONSULT]
 * @param {number} orderData.user_id 
 * @param {string} orderData.order_status [AWAITING_APPROVAL, UPCOMING, COMPLETED, CANCELED]

 *  */

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
        model: "users",
        key: "user_id", // 'id' refers to column name in fathers table
      },
    },
    order_status: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    underscored: true,
  }
)

module.exports.Order = Order
