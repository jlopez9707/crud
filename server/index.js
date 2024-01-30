"use strict";

const express = require("express");
const app = express();
//const mysql = require("mysql");
var sql = require("mssql"); // SQL Server
const cors = require("cors");
const { config } = require("./configDB");

app.use(cors());
//app.use(express.json());

//Conexion a base de datos mysql
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "testproyectdb",
// });

app.get("/", (req, res) => {
  res.send("Hola node");
});

app.get("/getEmployees", function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query(
      "select EmployeeID, FirstName, LastName, Title, BirthDate, Address, City, Country, HomePhone from Employees",
      function (err, recordset) {
        if (err) console.log(err);

        // send records as a response
        res.send(recordset);
      }
    );
  });
});

app.get("/getCustomers", function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    request.query(
      "select CustomerID, CompanyName, ContactName, ContactTitle, City, Country from Customers",
      function (err, recordset) {
        if (err) console.log(err);

        res.send(recordset);
      }
    );
  });
});

app.get("/getShippers", function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    request.query(
      "select ShipperID, CompanyName, Phone from Shippers",
      function (err, recordset) {
        if (err) console.log(err);

        res.send(recordset);
      }
    );
  });
});

// //Metodo para obtener la lista de usuarios en mysql
// app.get("/getUsers", (req, res) => {
//   db.query("SELECT * FROM users", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// //Metodo para insertar 1 usuario en mysql
// app.post("/createUser", (req,res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const worker = req.body.worker;
//   const admin = req.body.admin;

//   db.query("INSERT INTO users(name,email,admin,worker) VALUES(?,?,?,?)")
// })

app.listen(3001, () => {
  console.log("Escuchando por el puerto 3001");
});
