const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


//routers
app.use('/api/savechart', require('./routes/save.js'));
app.use('/api/readchart', require('./routes/read.js'));
//test

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})