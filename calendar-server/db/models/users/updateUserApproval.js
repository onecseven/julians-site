// we need to look up how to do updates with sequelize
const { findUserById } = require("./findUser")

const updateUserApproval = async (id) => {
  let user = await findUserById(id)
  user.approved = true
  return user.save()
}

module.exports.updateUserApproval = updateUserApproval
