const mongoose = require('mongoose');

const orderItemSchema = mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }
})

exports.OrderItem = mongoose.model('OrderItem', orderItemSchema);