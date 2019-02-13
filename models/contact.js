const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create schema for todo
const ContactSchema = new Schema({
  name: String,
  phone: String,
  email: String
});

//create model for Contact
const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
