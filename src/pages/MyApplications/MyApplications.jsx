import React, { Suspense, use } from 'react';
import ApplicationsStates from './ApplicationsStates';
import ApplicationsList from './ApplicationsList';
import { AuthContext } from './../../contexts/AuthContexts/AuthContext';
import Loader from './../Shared/Loader';
import { myApplicaionsPromise } from '../../api/ApplicationsApi';




const MyApplications = () => {

    const { user} = use(AuthContext);
    return (
        <div>

            <h1>This is my applications</h1>
            <ApplicationsStates></ApplicationsStates>
            <Suspense fallback={<Loader></Loader>}>
            <ApplicationsList myApplicaionsPromise={myApplicaionsPromise(user.email)}></ApplicationsList>

            </Suspense>
            
        </div>
    );
};

export default MyApplications;