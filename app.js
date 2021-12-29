const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const internal = require('stream');
const { errorMonitor } = require('events');

require('dotenv/config')

const api = process.env.API_URL

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));


const foodSchema = mongoose.Schema({
  codeId: Number,
  name: String,
  foodDescreption: String,
  qntInStock: Number,
  buyPrice: Number
})

const Food = mongoose.model('Food', foodSchema);

// http://localhost:3000/api/v1/foods
app.get(`${api}/foods`, (req,res) => {
  const food = {
    id: 1,
    name: 'burger',
    image: 'some_url',
  }
  res.send(food);
});

app.post(`${api}/foods`, (req,res) =>{
  const food = new Food({
    codeId: req.body.codeId,
    name : req.body.name,
    foodDescreption: req.body.foodDescreption,
    qntInStock: req.body.qntInStock,
    buyPrice: req.body.buyPrice
  })

  food.save().then(createdProduct=> {
    res.status(201).json(createdProduct)
  }).catch((err) => {
    res.status(500).json({
      error: err,
      success: false
    })
  })
  res.send(food);
});

//database
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'eat-a-loot-db'
})
.then(() => {
  console.log('Database connection is ready...');
})
.catch((err)=> {
  console.log(err);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})