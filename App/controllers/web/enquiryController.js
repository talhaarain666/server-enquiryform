const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert = (req, res) => {
    let { sName, sEmail, sPhone, sMessage } = req.body;
    let enquiry = new enquiryModel({
        name: sName,
        email: sEmail,
        phone: sPhone,
        message: sMessage
    })
    enquiry.save().then(() => {
        res.send({ status: 1, msg: "Enquiry Saved Successfully" })
    }).catch((err) => {
        res.send({ status: 0, msg: "Error while saving enquiry", err })

    })
}

module.exports = { enquiryInsert };