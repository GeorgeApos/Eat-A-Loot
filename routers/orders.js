const { Order } = require('../models/order');
const express = require('express');
const { OrderItem } = require('../models/order-items');
const router = express.Router();

router.get(`/`, async (req, res) => {
    const orderList = await Order.find();

    if (!orderList) {
        res.status(500).json({ success: false })
    }
    res.send(orderList);
})

router.post(`/`, (req, res) => {
    const orderItemsIds = Promise.all(req.body.orderItems.map(async orderItem => {
        let newOrderItem = new OrderItem({
            quantity: orderItem.quantity,
            food: orderItem.food
        })

        newOrderItem = await newOrderItem.save();

        return newOrderItem._id;
    }))

    const orderItemsIdsResolved = await orderItemsIds;

    const order = new Order({
        orderItems: orderItemsIdsResolved,
        shippingAddress: req.body.shippingAddress,
        city: req.body.city,
        zip: req.body.zip,
        phone: req.body.phone,
        totalPrice: req.body.totalPrice,
        customer: req.body.customer,
    })

    order.save().then((createdOrder => {
        res.status(201).json(createdOrder)
    })).catch((err) => {
        res.status(500).json({
            error: err,
            success: false
        })
    })
    res.send(order);
});

module.exports = router;