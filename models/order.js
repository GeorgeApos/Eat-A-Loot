const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    customerId: Number,
    orderDate: Date
  })

  exports.Order = mongoose.model('Order', orderSchema);