const { User } = require("./User")
/**
 * 
 * @param {object} userData
 * @param {string} userData.name
 * @param {string} userData.email
 * @param {string} userData.password
 * @returns {promise} Handle both catch and error
 *  */
function createUser ({name, email, password}) {
  return User.sync().then(function () {
    return User.create({
      name,
      email,
      password,
    })
  })
}

module.exports.createUser = createUser