import React from 'react';
import { Link } from 'react-router-dom';

const GetInTouch = () => {
    return (
        <div className='bg-[#1c2336] text-white '>
            <div className='flex flex-col md:flex-row gap-10 px-8 py-20 md:py-36 max-w-7xl mx-auto'>
            <div className='md:border-e md:w-1/2 flex items-center justify-center'>
                <h1 className='font-outfit font-bold text-4xl md:text-5xl hover:underline hover:text-[#63b3bb] duration-300 cursor-pointer'>Get in touch</h1>
            </div>
            <div className='flex flex-col md:items-start gap-4 items-center'>
                <p className='font-dmsans text-lg md:text-xl'>Get in contact today and have your offshore team up and running in as little as two weeks.</p>
                <Link to="/contact" className='btn'>Contact us</Link>
            </div>
            </div>
        </div>
    );
};

export default GetInTouch;