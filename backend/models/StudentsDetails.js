const mongoose = require('mongoose');

const StudentDetailsSchema = new mongoose.Schema({
  personalDetails: {
    firstName: String,
    lastName: String,
    email: String,
    birthdate: String,
    permanentAddress: {
      city: String,
      district: String,
      country: String,
    },
    currentAddress: {
      city: String,
      district: String,
      country: String,
    },
  },
  educationalDetails: {
    education: String,
    instituteName: String,
    stream: String,
    passOutYear: String,
  },
  technicalDetails: {
    keySkills: String,
    languages: String,
    experience: String,
    salaryExpectations: String,
    projectName: String,
    projectSummary: String,
  },
  uploadDocuments: {
    resume: String,
    certificate: String,
  },
});

const StudentDetailsModel = mongoose.model('StudentDetails', StudentDetailsSchema);

module.exports = StudentDetailsModel;
