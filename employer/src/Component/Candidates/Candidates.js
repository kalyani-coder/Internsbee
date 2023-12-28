import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const CandidatePage = () => {
  return ( 
    <> 
    <div><Navbar/></div>
    <div className="flex h-screen bg-white">

      <div className=" bg-white">
        {/* Add your sidebar content here */}
        <Sidebar/>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        {/* Candidate Title */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Candidate</h1>
          <div className="flex items-center">
            {/* Search Icon (replace with your actual search icon) */}
            {/* <span className="material-icons">search</span> */}
            {/* Post Job Button */}
            {/* <button className="bg-blue-500 text-white ml-4 px-4 py-2">Post Job</button> */}
          </div>
        </div>

        {/* No Applicants Available */}
        <div className="flex flex-col items-center">
          <img
            src="https://clipground.com/images/applicant-clipart-png-4.png"  // Replace with your image URL
            alt="No Applicants Available"
            className="mb-4 w-96 h-72"
          />
          <p>You don't have any posted jobs. Post a job today!</p>
          {/* Post Job Button */}
          {/* <button className="bg-blue-500 text-white px-4 py-2 mt-4">Post Job</button> */}
        </div>
      </div>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  );
};

export default CandidatePage;