const {Customer} = require('../models/customer');
const express = require('express');
const router = express.Router();
  
router.get(`/`, async(req,res) =>{
    const customerList = await Customer.find();
  
    if(!customerList) {
      res.status(500).json({success: false})
    }
    res.send(customerList);
})

router.post(`/`, (req,res) =>{
    const customer = new Customer({
        codeId: req.body.Number,
        fname: req.body.String,
        lname: req.body.String,
        phone: req.body.String,
        adress: req.body.String,
        city: req.body.String,
        postalCode: req.body.String,
})
  
customer.save().then((createdCustomer=> {
      res.status(201).json(createdCustomer)
})).catch((err) => {
    res.status(500).json({
        error: err,
        success: false
    })
})
    res.send(customer);
});
  
module.exports = router;