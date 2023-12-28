
import React, { useState } from 'react';

const PostInternship = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    location: '',
    companyName: '',
    startDate: '',
    endDate: '',
    jobType: 'partTime',
    stipend: '',
    skills: '',
    positions: 1,
    jobDescription: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // You can send the form data to the server or perform other actions
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-8 bg-amber-300 rounded shadow-md">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Post Internship</h2>

      <form onSubmit={handleSubmit} className="flex flex-wrap -mx-4">
        {/* Job Title */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="jobTitle" className="block text-sm font-medium text-black">
            Internship Title:
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
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
            placeholder="Enter your Internship here"
            required
          />
        </div>

        {/* Company Name */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-black">
            Company Name:
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter your Company name here"
            required
          />
        </div>

        {/* Start Date */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="startDate" className="block text-sm font-medium text-black">
            Start Date:
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        {/* End Date */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="endDate" className="block text-sm font-medium text-black">
            End Date:
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Job Type */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="jobType" className="block text-sm font-medium text-black">
            Internship Type:
          </label>
          <select
            id="internshipType"
            name="internshipType"
            value={formData.jobType}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          >
            <option value="partTime">Part Time</option>
            <option value="fullTime">Full Time</option>
            {/* <option value="internship">Internship</option> */}
          </select>
        </div>

        {/* Stipend */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="stipend" className="block text-sm font-medium text-black">
            Stipend:
          </label>
          <input
            type="text"
            id="stipend"
            name="stipend"
            value={formData.stipend}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
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

        {/* Number of Positions */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="positions" className="block text-sm font-medium text-black">
            Number of Positions:
          </label>
          <input
            type="number"
            id="positions"
            name="positions"
            value={formData.positions}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            min="1"
            required
          />
        </div>

        {/* Job Description */}
        <div className="w-full px-4 mb-4">
          <label htmlFor="jobDescription" className="block text-sm font-medium text-black">
            Job Description:
          </label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            value={formData.jobDescription}
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

