import React, { useState } from 'react';

const PostInternship = () => {
  const [formData, setFormData] = useState({
    job_Title: '',
    location: '',
    company_Name: '',
    start_Date: '',
    end_Date: '',
    job_Type: 'Full-time',
    skills: '',
    position: '',
    job_Description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if required fields are filled
    const requiredFields = ['job_Title', 'location', 'company_Name', 'start_Date', 'end_Date', 'position', 'job_Description'];
    const isFormValid = requiredFields.every(field => formData[field].trim() !== '');

    if (!isFormValid) {
      console.error('Please fill out all required fields');
      // You can display an error message to the user
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/postinternship', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
        // You can handle success, e.g., redirect or show a success message
      } else {
        console.error('Failed to submit form data');
        // You can handle errors, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error during form submission', error);
      // Handle other types of errors, e.g., network issues
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-8 bg-amber-300 rounded shadow-md">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Post Internship</h2>

      <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-wrap -mx-4">
        {/* Job Title */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="job_Title" className="block text-sm font-medium text-black">
            Internship Title:
          </label>
          <input
            type="text"
            id="job_Title"
            name="job_Title"
            value={formData.job_Title}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter Internship title here"
            required
          />
        </div>

        {/* Location */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-black">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter your Internship location here"
            required
          />
        </div>

        {/* Company Name */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="company_Name" className="block text-sm font-medium text-black">
            Company Name:
          </label>
          <input
            type="text"
            id="company_Name"
            name="company_Name"
            value={formData.company_Name}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter your Company name here"
            required
          />
        </div>

        {/* Start Date */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="start_Date" className="block text-sm font-medium text-black">
            Start Date:
          </label>
          <input
            type="date"
            id="start_Date"
            name="start_Date"
            value={formData.start_Date}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        {/* End Date */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="end_Date" className="block text-sm font-medium text-black">
            End Date:
          </label>
          <input
            type="date"
            id="end_Date"
            name="end_Date"
            value={formData.end_Date}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Job Type */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="job_Type" className="block text-sm font-medium text-black">
            Job Type:
          </label>
          <select
            id="job_Type"
            name="job_Type"
            value={formData.job_Type}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          >
            <option value="Full-time">Full Time</option>
            <option value="Part-time">Part Time</option>
          </select>
        </div>

        {/* Skills */}
        <div className="w-full px-4 mb-4">
          <label htmlFor="skills" className="block text-sm font-medium text-black">
            Skills:
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter required skills here"
          />
        </div>

        {/* Position */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="position" className="block text-sm font-medium text-black">
            Position:
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter the position here"
            required
          />
        </div>

        {/* Job Description */}
        <div className="w-full px-4 mb-4">
          <label htmlFor="job_Description" className="block text-sm font-medium text-black">
            Job Description:
          </label>
          <textarea
            id="job_Description"
            name="job_Description"
            value={formData.job_Description}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Write Internship description"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="w-full px-4 mt-4">
          <button
            type="submit"
            className="bg-black text-amber-300 py-2 px-4 rounded hover:bg-gray-800"
          >
            Post Internship
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostInternship;
