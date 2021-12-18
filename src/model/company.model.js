const mongoose = require("../db");

const companySchema = new mongoose.Schema(
    {
        cmp_name : {type : String, required:true, unique : true, lowercase : true, time : true},
        number_of_emp : {type :Number, default : 0}
    },
    {
        timestamps : true
    }
)

const Company = mongoose.model("Company", companySchema);

module.exports = Company;