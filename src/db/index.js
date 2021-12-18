const mongoose = require("mongoose");

const options = {};

mongoose.connect(process.env.MONGO_URL,options)
    .then(()=>console.log("Database is now connected"))
    .catch(()=>console.log("some error with database connections"));


module.exports = mongoose;