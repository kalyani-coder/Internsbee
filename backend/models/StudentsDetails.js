const mongoose = require('mongoose');

const StudentDetailsSchema = new mongoose.Schema({
 
  student_id : String,
    firstName: String,
    lastName: String,
    email: String,
    birthdate: String,
   
      city: String,
      district: String,
      country: String,
   
   
      city: String,
      district: String,
      country: String,
 
  
    education: String,
    instituteName: String,
    stream: String,
    passOutYear: String,

    keySkills: String,
    languages: String,
    experience: String,
    salaryExpectations: String,
    projectName: String,
    projectSummary: String,

    resume: String,
    certificate: String,
 
});

const StudentDetailsModel = mongoose.model('StudentDetails', StudentDetailsSchema);

module.exports = StudentDetailsModel;
