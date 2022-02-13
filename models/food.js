const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name: String,
    foodDescription: String,
    qntInStock: Number,
    buyPrice: Number
})


exports.Food = mongoose.model('Food', foodSchema);