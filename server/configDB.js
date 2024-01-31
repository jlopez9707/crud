//Conectar a base de datos SQL Server
require('dotenv').config();

var config = {
  server: "localhost",
  authentication: {
    type: "default",
    options: {
      userName: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
  },
  options: {
    // If you are on Microsoft Azure, you need encryption:
    encrypt: false,
    //port: 1433,
    database: process.env.DATABASE_NAME,
  },
};

module.exports = {
  config,
};
