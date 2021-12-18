const companyRouters = require("./companyRouter");
const empolyeesRouters  = require("./empRouter");

const router = require("express").Router();

router.use("/cmp", companyRouters);
router.use("/emp", empolyeesRouters);
module.exports = router;
