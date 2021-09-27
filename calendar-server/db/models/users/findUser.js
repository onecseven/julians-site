const { User } = require("./User")
/**
 *
 * @param {number} id
 * returns promise
 *  */
function findUserById(id) {
  return User.sync().then(function () {
    return User.findOne({
      where: {
        user_id: id
      },
    })
  })
}
module.exports = findUserById
