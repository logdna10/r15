const { Schema, default: mongoose } = require("mongoose");

const Book = new Schema({
  isbn: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  isInStock: { type: Boolean, required: true },
  edition: { type: Number, required: true },
});

module.exports = mongoose.model("book", Book);
