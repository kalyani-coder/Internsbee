import React, { useState, useEffect } from 'react';
import EmployerSidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const EmployerSection = () => {
  const [jobs, setJobs] = useState([]);

  // Simulating API call to fetch jobs
  useEffect(() => {
    // Replace this with your actual API endpoint
    fetch('https://your-api-endpoint.com/jobs')
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <> <div><Navbar/></div>
    <div className="flex">
      <Sidebar/>
      <div className="flex w-full">
        {/* Posted Jobs Card */}
        <div className="w-1/2 bg-white p-4 border border-gray-300 shadow-md mr-4">
          <h2 className="text-xl font-semibold mb-4">Posted Internship</h2>
          {jobs.length === 0 ? (
            <div>
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.J9z_3SEPaAa3EqFY8U-gsgHaHa&pid=Api&P=0&h=180" // Replace with your image URL
                alt="No Jobs Posted Yet"
                className="mb-4 w-full h-96 object-contain"
              />
              <p className="text-black text-center">No Internship posted yet.</p>
            </div>
          ) : (
            <ul>
              {jobs.map((job) => (
                <li key={job.id} className="mb-2">
                  {job.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Post Free Jobs Card */}
        <div className="w-1/2 bg-white p-4 border border-gray-300 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Post Internships</h2>
          <div>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.WfhNKe-rMNoslsjKtgE_3gHaE3&pid=Api&P=0&h=180" // Replace with your image URL
              alt="Post Internship"
              className="mb-4 w-full h-96 object-contain"
            />
            <p className="text-black text-center">Post a new internship opportunity today!</p>
          </div>
          <div className='flex justify-center mt-4'>
          <Link to={'/PostInternship'}>
            <button className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 hover:text-amber-300">
              Post Internship
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
    <div>
    <Footer/>
    </div>
    </>
  );
};

export default EmployerSection;