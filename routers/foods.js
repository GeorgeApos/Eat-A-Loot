const { Food } = require('../models/food');
const express = require('express');
const { mongoose } = require('mongoose');
const router = express.Router();

router.get(`/`, async (req, res) => {
    const foodList = await Food.find().select('name foodDescription -_id');

    if (!foodList) {
        res.status(500).json({ success: false })
    }
    res.send(foodList);
})

router.get(`/:id`, async (req, res) => {
    const food = await Food.findById(req.params.id);

    if (!food) {
        res.status(500).json({
            message: 'The food with the given ID was not found'
        })
    }
    res.status(200).send(food);
})

router.post(`/`, async (req, res) => {
    const food = new Food({
        name: req.body.name,
        foodDescription: req.body.foodDescreption,
        qntInStock: req.body.qntInStock,
        buyPrice: req.body.buyPrice
    })

    food.save().then((createdFood => {
        res.status(201).json(createdFood)
    })).catch((err) => {
        res.status(500).json({
            error: err,
            success: false
        })
    })

    res.send(food);
})

router.put('/:id', async (req, res) => {

    const food = await food.findByIdAndUpdate(
        req.params.id,
        {
            codeId: req.body.codeId,
            name: req.body.name,
            foodDescription: req.body.foodDescreption,
            qntInStock: req.body.qntInStock,
            buyPrice: req.body.buyPrice
        },
        {
            new: true
        }
    )

    if (!food) {
        return res.status(404).send('The food cannot be updated!')
    }

    res.send(food);
})

router.delete('/:id', (req, res) => {
    Food.findByIdAndRemove(req.params.id).then(food => {
        if (food) {
            return res.status(200).json({
                success: true,
                message: 'The Food is Deleted!'
            })
        } else {
            return res.status(400).json({
                success: false,
                message: 'Food not found'
            })
        }
    }).catch(err => {
        return res.status(400).json({
            success: false,
            error: err
        })
    })
})

router.get(`/get/count`, async (req, res) => {
    const foodCount = await Food.countDocuments()

    if (!foodCount) {
        res.status(500).json({
            success: false
        })
    }
    res.send({
        foodCount: foodCount
    })
    res.status(200).send(foodCount);
})

module.exports = router;