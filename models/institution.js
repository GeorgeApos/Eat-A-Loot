const mongoose = require('mongoose');

const institutionSchema = mongoose.Schema({
    codeId: Number,
    name: String,
    address: String,
    email: String,
    telephone: String
  })

  exports.Institution = mongoose.model('Institution', institutionSchema);