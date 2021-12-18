const mongoose = require("../db/index");

const empSchema = new mongoose.Schema(
    {
        cmp_id : {type : String, required : true},
        emp_name : {type : String, required : true, lowercase : true, trim : true},
    },
    {
        timestamps : true
    }
);

const Employees = mongoose.model("Empolyee", empSchema);

module.exports = Employees;