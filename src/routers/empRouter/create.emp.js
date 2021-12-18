const Company = require("../../model/company.model");
const Employees = require("../../model/emp.model");

module.exports = async(req, res)=>{
    try{
        const { cmp_name, emp_name }  = req.body;
        if(!cmp_name || !emp_name){
            throw {message : "please send required attribute", data : null};
        }
        const isCmp = await Company.findOne({cmp_name : cmp_name.toLowerCase()});
        if(!isCmp){
            throw {message : "invalid company", data : null};
        }
        const newEmp = new Employees({emp_name,cmp_id: isCmp._id});
        await newEmp.save();
        isCmp.number_of_emp +=1;
        await isCmp.save();
        res.send({message : "success", data : newEmp});
    }
    catch(e){
        res.send(e);
    }
}