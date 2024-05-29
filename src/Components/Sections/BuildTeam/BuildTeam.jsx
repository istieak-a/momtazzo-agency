import React from 'react';
import { Link } from 'react-router-dom';

const BuildTeam = () => {
    return (
        <div className='bg-[#1c2336] text-white flex flex-col md:flex-row gap-10 px-8 py-20 md:py-36'>
            <div className='md:border-e '>
                <h1 className='font-outfit font-bold text-4xl md:text-5xl hover:underline hover:text-[#63b3bb] duration-300 cursor-pointer'>Build a dedicated team in the Philippines</h1>
            </div>
            <div className='flex flex-col items-start gap-4'>
                <p className='font-dmsans text-lg md:text-xl'>Get in contact today and have your offshore team up and running in as little as six weeks.</p>
                <Link to="/contact" className='btn'>Contact us</Link>
            </div>
        </div>
    );
};

export default BuildTeam;