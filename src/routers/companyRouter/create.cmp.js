const Company = require("../../model/company.model");

module.exports = async(req, res)=>{
    try{
        let {cmp_name} = req.body;
        if(!cmp_name){
            throw {message : "please send company name", data : null};
        }
        let isCmp = await Company.findOne({cmp_name });
        
        if(isCmp){
            throw {message : "Already exist company with this nampe", data : isCmp};
        }
        let newCmp = new Company({cmp_name});
        await newCmp.save();
        res.send({message : "successfully created company", data : newCmp});
    }
    catch(e){
        res.send(e);
    }
}