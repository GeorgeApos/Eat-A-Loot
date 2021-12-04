//require('./db/mongoose');
const express = require("express");
const app = express();

app.get("/", (res,req) => {
    req.send("Hello World");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Listening to Port");
});
