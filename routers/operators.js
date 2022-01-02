const {Operator} = require('../models/operator');
const express = require('express');
const router = express.Router();
  
router.get(`/`, async(req,res) =>{
    const operatorList = await Operator.find();
  
    if(!operatorList) {
      res.status(500).json({success: false})
    }
    res.send(operatorList);
})

/* router.post(`/`, (req,res) =>{
    const operator = new Operator({
        codeId: req.body.Number,
        name: req.body.String,
        address: req.body.String,
        email: req.body.String,
        telephone: req.body.String
})
  
operator.save().then((createdOperator=> {
      res.status(201).json(createdOperator)
})).catch((err) => {
    res.status(500).json({
        error: err,
        success: false
    })
})
    res.send(operator);
}); */
  
module.exports = router;