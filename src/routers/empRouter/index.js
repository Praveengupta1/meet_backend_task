const createEmp = require("./create.emp");
const getEmp = require("./get.EmpByCmp");

const routers = require("express").Router();

routers.get("/:cmp_name", getEmp);
routers.post("/", createEmp);

module.exports = routers;