import { use } from "react";
import JobCard from "./JobCard";

const HotJobs = ({ jobsPromise }) => {
    const jobs = use(jobsPromise);
  


  return (
    <div>
        <h1 className="text-3xl font-bold my-14 text-blue-500">Trending Jobs Hiring Right Now</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
