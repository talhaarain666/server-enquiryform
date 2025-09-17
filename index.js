let express = require("express");
let mongoose = require("mongoose");
const enquiryRouter = require("./App/routes/web/enquiryRoutes");
require("dotenv").config();
let app = express();

app.use(express.json());

// Import Routes
app.use("/api/website/enquiry",enquiryRouter); // http://localhost:3000/api/website/enquiry/insert

// Connect to MongoDB
mongoose.connect(process.env.DBURL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 3000, () => {
        console.log("Server is running");
    })
}).catch((err) => { console.log(err) })

