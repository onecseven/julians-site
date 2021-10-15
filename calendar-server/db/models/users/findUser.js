const { User } = require("./User")
/**
 *
 * @param {number} id
 * returns promise
 *  */
function findUserById(id) {
  return User.findOne({
    where: {
      user_id: id,
    },
  })
}

/**
 *
 * @param {number} id
 * @returns {Object} dataValues
 * @returns {string} dataValues.name
 * @returns {string} dataValues.email
 * @returns {string} dataValues.password
 *  */
function findUserByEmail(email) {
  return User.sync().then(function () {
    return User.findOne({
      where: {
        email: email,
      },
    })
  })
}

module.exports = { findUserById, findUserByEmail }
