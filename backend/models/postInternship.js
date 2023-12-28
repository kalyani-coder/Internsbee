
const mongoose = require('mongoose')

const PostInternshipSchema = new mongoose.Schema({

    job_Title : String,
    location : String,
    company_Name : String,
    start_Date : String,
    end_Date : String,
    job_Type : String,
    stipned : String,
    skills : String,
    position : String,
    job_Description : String

})

const newInterShipSchema = new mongoose.model('PostIntership' , PostInternshipSchema)

module.exports = newInterShipSchema;