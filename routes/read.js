const express = require('express');
const router = express.Router();

//routes
router.get('/', (request,response) =>{

    response.send("<h1>Hello From router read.js</h1>");
});

module.exports = router;