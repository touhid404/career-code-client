import React from "react";
import { Link } from "react-router";

const JobCardModern = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    company,
    company_logo,
    salaryRange,
    requirements,
  } = job;


  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-lg transition">
      <div className="flex  space-x-4 mb-4">
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-10 h-10 rounded-md object-contain"
        />
        <div>
          <h3 className="text-base font-semibold text-gray-800">{company}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>

      {/* Job Title */}
      <h4 className="text-xl text-left font-semibold text-gray-800 mb-1">{title}</h4>

      {/* Job Type & Timestamp (Static time for now) */}
      <div className="flex justify-between text-sm text-gray-400 mb-3">
        <span>{jobType}</span>
        <span>5 minutes ago</span>
      </div>

      

      {/* Requirements */}
      <div className="flex flex-wrap gap-2 mb-4">
        {requirements.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Salary & Button */}
      <div className="flex justify-between items-center">
        <p className="text-indigo-600 font-semibold text-lg">
          {`৳${salaryRange.min.toLocaleString()}`} -{" "}
          {`৳${salaryRange.max.toLocaleString()}`}{" "}
          <span className="text-sm text-gray-500">/Month</span>
        </p>
        <Link to={`/jobdetails/${_id}`}>
          <button className="text-indigo-700 bg-indigo-100 px-4 py-2 rounded hover:bg-indigo-700 hover:text-white text-sm font-medium transform transition duration-400">
          See more
        </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCardModern;
