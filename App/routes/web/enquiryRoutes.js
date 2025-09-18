let express = require("express");
const { enquiryInsert, enquiryList, enquiryDelete } = require("../../controllers/web/enquiryController");
let enquiryRouter = express.Router();

// Calling Controller Function
enquiryRouter.post("/insert",enquiryInsert);
enquiryRouter.get("/view",enquiryList);
enquiryRouter.get("/delete/:id",enquiryDelete);

module.exports=enquiryRouter;