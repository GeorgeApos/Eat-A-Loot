const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    codeId: Number,
    fname: String,
    lname: String,
    phone: String,
    adress: String,
    city: String,
    postalCode: String,
  })

  exports.Customer = mongoose.model('Customer', customerSchema);