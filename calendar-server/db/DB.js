let Sequelize = require("sequelize")
const { credentials } = require("../../credentials")

let { username, password, host, port, database, sslmode, connectionString } =
  credentials

// export const  sequelize = new Sequelize(database, username, password, {
//   host,
//   port,
//   dialect: 'mysql',
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   },
// });

module.exports.sequelize = new Sequelize(connectionString)
