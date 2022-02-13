const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  passwordHash: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: String,
  city: String,
  postalCode: String,
  isAdmin: {
    type: Boolean,
    default: false
  }
})


exports.Customer = mongoose.model('Customer', customerSchema);
exports.customerSchema = customerSchema;