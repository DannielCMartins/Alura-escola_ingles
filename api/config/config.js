// {
//   "development": {
//     "username": "dann",
//     "password": "simples",
//     "database": "escola_ingles",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "dann",
//     "password": "simples",
//     "database": "escola_ingles",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "dann",
//     "password": "simples",
//     "database": "escola_ingles",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }

require('dotenv').config()

module.exports = {
  development: {
    username: process.env.API_USERNAME,
    password: process.env.API_PASSWORD,
    database: process.env.API_DATABASE,
    host: process.env.API_HOST,
    port: process.env.API_PORT,
    dialect: 'mysql'
  },
  test: {
    username: process.env.API_USERNAME,
    password: process.env.API_PASSWORD,
    database: process.env.API_DATABASE,
    host: process.env.API_HOST,
    port: process.env.API_PORT,
    dialect: 'mysql'
  },
  production: {
    username: process.env.API_USERNAME,
    password: process.env.API_PASSWORD,
    database: process.env.API_DATABASE,
    host: process.env.API_HOST,
    port: process.env.API_PORT,
    dialect: 'mysql'
    }
}
