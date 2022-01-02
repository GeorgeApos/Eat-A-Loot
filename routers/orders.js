const {Order} = require('../models/order');
const express = require('express');
const router = express.Router();
  
router.get(`/`, async(req,res) =>{
    const orderList = await Order.find();
  
    if(!orderList) {
      res.status(500).json({success: false})
    }
    res.send(orderList);
})

/* router.post(`/`, (req,res) =>{
    const order = new Order({
        codeId: req.body.Number,
        customerId: req.body.Number,
        orderDate: req.body.Date
}) 
  
order.save().then((createdOrder=> {
      res.status(201).json(createdOrder)
})).catch((err) => {
    res.status(500).json({
        error: err,
        success: false
    })
})
    res.send(order);
}); */
  
module.exports = router;