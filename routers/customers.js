const {Customer} = require('../models/customer');
const express = require('express');
const router = express.Router();
  
router.get(`/`, async(req,res) =>{
    const customerList = await Customer.find();
  
    if(!customerList) {
      res.status(500).json({success: false})
    }
    res.status(200).send(customerList);
})

router.get('/:id', async(req,res)=> {
    const customer = await Customer.findById(req.params.id);

    if(!customer) {
        res.status(500).json({
            message: 'The customer with the given ID was not found'
        })
    }
    res.status(200).send(customer);
})

router.post('/', async(req,res)=> {
    let customer = new Customer({
        codeId: req.body.codeId,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        postalCode: req.body.postalCode
    })

    customer = await customer.save();

    if(!customer){
        return res.status(404).send('The Customer cannot be created!')
    }

    res.send(customer);
})
  
router.put('/:id', async (req,res) =>{
    const customer = await Customer.findByIdAndUpdate(
        req.params.id,
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            passwordHash: req.body.passwordHash,
            phone: req.body.phone,
            address: req.body.address,
            city: req.body.city,
            postalCode: req.body.postalCode,
            isAdmin: req.body.isAdmin
        },
        { 
            new: true 
        }
    )

    if(!customer){
        return res.status(404).send('The Customer cannot be updated!')
    }

    res.send(customer);
})

router.delete('/:id', (req,res) =>{
    Customer.findByIdAndRemove(req.params.id).then(customer =>{
        if(customer){
            return res.status(200).json({
                success: true,
                message: 'The Customer is Deleted!'
            })
        } else {
            return res.status(400).json({
                success: false,
                message: 'Customer not found'
            })
        }
    }).catch(err =>{
        return res.status(400).json({
            success: false,
            error: err
        })
    })
})

router.post('/', async(req,res)=> {
    let customer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        passwordHash: req.body.passwordHash,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        postalCode: req.body.postalCode,
        isAdmin: req.body.isAdmin
    })

    customer = await customer.save();

    if(!customer){
        return res.status(404).send('The Customer cannot be created!')
    }

    res.send(customer);
})

module.exports = router;