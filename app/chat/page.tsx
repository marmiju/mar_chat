import React from 'react';
import Sidebar from '../components/sidebar/sideBar';

const app = () => {
    return (
        <div className='max-w-[90%] mx-auto grid grid-cols-8 '>
            <div className='col-span-2 border'>
                <Sidebar />
            </div>
            <div className='flex flex-wrap col-span-5 border'>
                chat section
            </div>
            <div className='col-span-1 border'>
                members
            </div>


        </div>
    );
};

export default app;