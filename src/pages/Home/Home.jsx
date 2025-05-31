import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from '../HotJobs/HotJobs';
import Loader from '../Shared/Loader';
import Categories from '../Categories/Categories';

const Home = () => {
    const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json());
    return (
        <div>
            <Banner></Banner>

            <Categories></Categories>
            <Suspense fallback={<Loader></Loader>}>


            <HotJobs jobsPromise={jobsPromise}></HotJobs>


            </Suspense>

            
        </div>
    );
};

export default Home;