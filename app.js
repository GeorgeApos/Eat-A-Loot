const express = require("express");
const app = express();

app.get("/", (res,req) => {
    req.send("Hello World");
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Listening to 5000 and process env port");
})
