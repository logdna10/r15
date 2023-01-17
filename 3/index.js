const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const handlers = require("./controller/bookCartHandlers");

const server = express();

server.use(cors());
server.use(bodyParser());

server.get("/", (req, res, next) => {
    res.send("hello world");
})

server.get("/books", handlers.getBooks);
server.get("/book/:isbn", handlers.getBook);
server.post("/book", handlers.createBook);
server.put("/book", handlers.updateBook);
server.delete("/book/:isbn", handlers.deleteBook);

mongoose.connect("mongodb://127.0.0.1:27017/bookdb")
.then((d) => {
    server.listen(3000, () => {console.log("Server listening at port: 3000")});
})
.catch((err) => {
    console.log("ERROR: " + err);
});