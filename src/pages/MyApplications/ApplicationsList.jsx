import React, { use } from 'react';

const ApplicationsList = ({myApplicaionsPromise}) => {
    const myApplications = use(myApplicaionsPromise);
    console.log(myApplications);
    return (
        <div>
            
        </div>
    );
};

export default ApplicationsList;