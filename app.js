const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const internal = require('stream');
const { errorMonitor } = require('events');
const cors = require('cors');
require('dotenv/config')
const api = process.env.API_URL
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

app.use(cors());
app.options('*', cors())

//middlewares
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use(errorHandler);

//routes
const customerRouter = require('./routers/customers');
const foodRouter = require('./routers/foods');
const institutionRouter = require('./routers/institutions');
const operatorRouter = require('./routers/operators');
const orderRouter = require('./routers/orders');


//routers
app.use(`${api}/customers`, customerRouter)
app.use(`${api}/foods`, foodRouter)
app.use(`${api}/institutions`, institutionRouter)
app.use(`${api}/operators`, operatorRouter)
app.use(`${api}/orders`, orderRouter)

//database
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'eat-a-loot-db'
})
  .then(() => {
    console.log('Database connection is ready...');
  })
  .catch((err) => {
    console.log(err);
  })

//port:3000
app.listen(port, () => {
  console.log(`Eat-A-Loot Application is listening at http://localhost:${port}`)
})

