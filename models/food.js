const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name: String,
    foodDescription: String,
    qntInStock: Number,
    buyPrice: Number
})

foodSchema.virtual('id').get(function() {
  return this._id.toHexString();
})

foodSchema.set('toJSON', {
  virtuals: true,
});

exports.Food = mongoose.model('Food', foodSchema);