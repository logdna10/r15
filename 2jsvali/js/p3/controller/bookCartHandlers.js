const Books = require("../models/book");

const handlers = {
  getBooks: async (req, res, next) => {
    let data = [];
    try {
      data = await Books.find();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  },
  getBook: async (req, res, next) => {
    try {
      await Books.findOne({ isbn: req.params.isbn }).then((book) => {
        if (book !== null) res.json(book);
        else
          res.json({
            message: "No book found with ISBN: " + req.params.isbn,
          });
      });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  },
  createBook: async (req, res, next) => {
    await Books.create(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        if (err.errors)
          res.json({
            // error: err.errors.name.message,
          });
        else
          res.json({
            error: "ISBN must be unique",
          });
      });
  },
  deleteBook: async (req, res, next) => {
    try {
      await Books.findOne({ isbn: req.params.isbn }).then((book) => {
        if (book !== null)
          Books.deleteOne({ isbn: req.params.isbn }).then((data) => {
            res.json({
              message:
                "Deleted the book with ISBN: " +
                req.params.isbn +
                " successfully",
            });
          });
        else
          res.json({
            message: "No book found with ISBN: " + req.params.isbn,
          });
      });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  },
  updateBook: async (req, res, next) => {
    try {
      console.log(req.body);
      await Books.findOne({ isbn: req.body.isbn }).then((book) => {
        if (book !== null)
          Books.updateOne({ isbn: req.body.isbn }, req.body).then((data) => {
            res.json({
              message:
                "Edited the book with ISBN: " + req.body.isbn + " successfully",
            });
          });
        else
          res.json({
            message: "No book found with ISBN: " + req.params.isbn,
          });
      });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  },
};

module.exports = handlers;
