import React from 'react';

const Loader = () => {
    return (
        <div className='flex  items-center justify-center h-screen space-y-4'>
            <span className="loading loading-ball loading-xs"></span>
<span className="loading loading-ball loading-sm"></span>
<span className="loading loading-ball loading-md"></span>
<span className="loading loading-ball loading-lg"></span>
<span className="loading loading-ball loading-xl"></span>
            
        </div>
    );
};

export default Loader;