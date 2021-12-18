
const Company = require("../../model/company.model");
const Employees = require("../../model/emp.model");


module.exports =async(req, res)=>{
    try{
        const {cmp_name} = req.params
        if(!cmp_name){
            throw {message : "please send company name", data : null};
        }
        const isCmp = await Company.findOne({cmp_name : cmp_name.toLowerCase()});
        if(!isCmp){
            throw {message : "invalid company name ", data : null};
        }

        const employees = await Employees.find({cmp_id : isCmp._id});
        res.send({message : "success", data : employees});
    }
    catch(e){
        res.send(e);
    }
}
