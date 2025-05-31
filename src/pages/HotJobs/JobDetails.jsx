import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {

    const jobDeatilsData = useLoaderData();
    console.log(jobDeatilsData)
    return (
        <div>

            <h1>This is job details page</h1>
            
        </div>
    );
};

export default JobDetails;