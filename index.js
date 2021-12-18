require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

const options = {origin:true, credential : true};
app.use(cors(options));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/test", (req, res)=>{
    res.send({message : "welcome"})
})
// Router 
const allRouter = require("./src/routers");
app.use("/api", allRouter);


app.listen(process.env.PORT, ()=>console.log("server has started"));