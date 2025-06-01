import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import { format } from 'date-fns';
import axios from 'axios';
const JobApply = () => {
  const { user } = useContext(AuthContext);
  const { jobId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const github = form.github.value;
    const portfolio = form.portfolio.value;
    const resume = form.resume.value;
    const coverLetter = form.coverLetter.value;

      const now = new Date();
      const formattedDate = format(now, "PPP p"); 

    const applicationData = {
      jobId,
      fullName,
      applicant: email,
      github,
      portfolio,
      resume,
      coverLetter,
      applyAt : formattedDate
      
    };

    axios.post('http://localhost:3000/applications', applicationData)
    .then(res=>{
      console.log(res.data);
    })
    .catch(err => {
      console.error("Error submitting application:", err);
    });


  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Apply for Job</h2>
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              defaultValue={user?.displayName || ""}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email || ""}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* GitHub Link */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">GitHub Profile</label>
            <input
              type="text"
              name="github"
              placeholder="https://github.com/yourusername"
              className="w-full border px-4 py-2 rounded-md"
              required
            />
          </div>

          {/* Portfolio Link */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Portfolio Website</label>
            <input
              type="text"
              name="portfolio"
              placeholder="https://yourportfolio.com"
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          {/* Resume Link */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Resume (Drive/URL)</label>
            <input
              type="text"
              name="resume"
              placeholder="https://drive.google.com/your-resume"
              className="w-full border px-4 py-2 rounded-md"
              required
            />
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Cover Letter</label>
            <textarea
              name="coverLetter"
              rows="5"
              placeholder="Write a short cover letter..."
              className="w-full border px-4 py-2 rounded-md"
            ></textarea>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
