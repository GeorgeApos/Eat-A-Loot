const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    codeId: Number,
    customerId: Number,
    orderDate: Date
  })

  exports.Order = mongoose.model('Order', orderSchema);