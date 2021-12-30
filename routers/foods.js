const {Food} = require('../models/food');
const express = require('express');
const router = express.Router();
  
router.get(`/`, async(req,res) =>{
    const foodList = await Food.find();
  
    if(!foodList) {
      res.status(500).json({success: false})
    }
    res.send(foodList);
})

router.post(`/`, (req,res) =>{
    const food = new Food({
      codeId: req.body.codeId,
      name : req.body.name,
      foodDescreption: req.body.foodDescreption,
      qntInStock: req.body.qntInStock,
      buyPrice: req.body.buyPrice
})
  
food.save().then((createdFood=> {
      res.status(201).json(createdFood)
})).catch((err) => {
    res.status(500).json({
        error: err,
        success: false
    })
})
    res.send(food);
});
  
module.exports = router;