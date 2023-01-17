const { Schema, default: mongoose } = require("mongoose");

const Employee = new Schema({
    ssn: {type: String, required: true, unique: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    contact: {type: Number, required: true}
});

module.exports = mongoose.model("employee", Employee);