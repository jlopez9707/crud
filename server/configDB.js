//Conectar a base de datos SQL Server
var config = {
  server: "localhost",
  authentication: {
    type: "default",
    options: {
      userName: "ejemplo",
      password: "ejemplo1234*",
    },
  },
  options: {
    // If you are on Microsoft Azure, you need encryption:
    encrypt: false,
    //port: 1433,
    database: "Northwind",
  },
};

module.exports = {
  config,
};
