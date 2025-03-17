const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
app.use(cors());

const path = __dirname + "/public"
const absolutePath = __dirname + '/views/index.html'




app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req,res) =>{
    abs_path = __dirname + "/views/index.html"
    res.sendFile(abs_path)
})
app.get("/json", (req,res) =>{
    console.log(process.env.MESSAGE_STYLE)
    if (process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message": "HELLO JSON"})
    }
    else{
        res.json({"message": "Hello json"})
    }

})
 module.exports = app;

app.listen(3000);