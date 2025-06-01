import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";
import { Navigate, useLoaderData, useNavigate } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();
  const navigate = useNavigate();
  

  const {
    _id,
    title,
    location,
    jobType,
    applicationDeadline,
    salaryRange,
    description,
    company,
    company_logo,
    requirements,
    responsibilities,
    category,
  } = job;


  const handleApplyNow = () => {

    navigate(`/jobapply/${_id}` );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Card Container */}
      <div className="bg-white shadow-xl rounded-2xl p-8">
        {/* Header */}
        <div className="flex items-center gap-4 border-b pb-6 mb-6">
          <img
            src={company_logo}
            alt={company}
            className="w-20 h-20 object-contain rounded-md border p-2"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            <p className="text-gray-500 mt-1 text-sm">{company}</p>
          </div>
        </div>

        {/* Job Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-3">
            <FaBriefcase className="text-green-500" />
            <span>{jobType} • {category}</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMoneyBillWave className="text-yellow-500" />
            <span>
              {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-red-500" />
            <span>Apply by {applicationDeadline}</span>
          </div>
        </div>

        {/* Description */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Job Description
          </h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Responsibilities */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Responsibilities
          </h2>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            {responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Requirements
          </h2>
          <div className="flex flex-wrap gap-3">
            {requirements.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <div className="mt-10 text-center">
          <button onClick={handleApplyNow} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-lg shadow-md">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
