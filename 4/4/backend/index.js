const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const handlers = require("./controller/employeeHandlers");

const server = express();

server.use(cors());
server.use(bodyParser());

server.get("/", (req, res, next) => {
    res.send("hello world");
})

server.get("/emps", handlers.getEmployees);
server.get("/emp/:ssn", handlers.getEmployee);
server.post("/emp", handlers.createEmployee);
server.put("/emp", handlers.updateEmployee);
server.delete("/emp/:ssn", handlers.deleteEmployee);

mongoose.connect("mongodb://127.0.0.1:27017/empDB")
.then((d) => {
    server.listen(8080, () => {console.log("Server listening at port: 8080")});
})
.catch((err) => {
    console.log("ERROR: " + err);
});