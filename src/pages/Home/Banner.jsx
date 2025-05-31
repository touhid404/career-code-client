import React from 'react';
import team1 from '../../assets/team2.jpg'
import team2 from '../../assets/team1.jpg'
import { motion } from 'framer-motion';


const Banner = () => {
    return (
      <div className="flex flex-col lg:flex-row items-center  gap-16">
       <div className="">
  <h1 className="text-3xl text-blue-600 text-left font-extrabold">Get Your Dream Job Today</h1>
  <p className=" max-w-[500px] text-gray-700 mt-2 text-justify">
    Explore thousands of job opportunities tailored to your skills and interests. Whether you're a fresh graduate or an experienced professional, our portal connects you with top companies hiring now. Start your career journey today with Job Portal.
  </p>
</div>

         <div className="">
        <motion.img
      src={team1}
      animate={{ y : [100, 150, 100] }}
      transition={{ duration: 5 , repeat: Infinity}}
      className="max-w-sm rounded-t-3xl rounded-r-3xl border-blue-700 border-s-8 border-b-8  shadow-2xl"
    />
     <motion.img
      src={team2}
      animate={{ x : [100, 150, 100] }}
      transition={{ duration: 5 , delay: 2,repeat: Infinity}}
      className="max-w-sm rounded-t-3xl rounded-r-3xl border-blue-700 border-s-8 border-b-8  shadow-2xl"
    />
    </div>
      </div>
   

    );
};

export default Banner;