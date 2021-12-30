const mongoose = require('mongoose');

const operatorSchema = mongoose.Schema({
    codeId: Number,
    name: String,
    adress: String,
    email: String,
    telephone: String,
    category: String
  })

  exports.Operator = mongoose.model('Operator', operatorSchema);