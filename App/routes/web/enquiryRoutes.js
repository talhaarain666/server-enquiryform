let express = require("express");
const { enquiryInsert } = require("../../controllers/web/enquiryController");
let enquiryRouter = express.Router();

// Calling Controller Function
enquiryRouter.post("/insert",enquiryInsert);

module.exports=enquiryRouter;