const Company = require("../../model/company.model");

module.exports = async(req, res)=>{
    try{
        const allCmp = await Company.find().sort({number_of_emp:"desc"});
        res.send({message : "success", data : allCmp});
    }
    catch(e){
        res.send(e);
    }
}