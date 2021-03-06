const mongoose = require('mongoose');

const operatorSchema = mongoose.Schema({
    codeId: Number,
    name: String,
    address: String,
    email: String,
    telephone: String,
    category: String
  })

  exports.Operator = mongoose.model('Operator', operatorSchema);