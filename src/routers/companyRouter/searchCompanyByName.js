const Company = require("../../model/company.model");

module.exports = async(req, res)=>{
    try{
        let { query } = req.params;
        // Like 'pa%'
        
        let matchCmp = await Company.find({cmp_name : {$regex : query,  $options: "i"}});
        res.send({message : "success",data : matchCmp});
    }
    catch(e){
        res.send(e);
    }
}