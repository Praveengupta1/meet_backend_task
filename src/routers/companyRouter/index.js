const createCmp = require("./create.cmp");
const getCmp = require("./get.cmp");
const querySearch = require("./searchCompanyByName");

const router = require("express").Router();

router.get("/", getCmp);
router.post("/", createCmp);
router.get("/:query",querySearch);
module.exports = router;