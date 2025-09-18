const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert = (req, res) => {
    let { name, email, phone, message } = req.body;
    let enquiry = new enquiryModel({
        name,
        email,
        phone,
        message
    })
    enquiry.save().then(() => {
        res.send({ status: 1, msg: "Enquiry Saved Successfully" })
    }).catch((err) => {
        res.send({ status: 0, msg: "Error while saving enquiry", err })

    })
}

let enquiryList = async (req, res) => {
    let enquiries = await enquiryModel.find();
    res.send({ status: 1, enquiryList: enquiries })
}

let enquiryDelete = async (req, res) => {
    const enId = req.params.id;
    let enquiry = await enquiryModel.deleteOne({ _id: enId });
    res.send({ status: 1, msg: "Enquiry Deleted Successfully", enquiry })
}

module.exports = { enquiryInsert, enquiryList, enquiryDelete };