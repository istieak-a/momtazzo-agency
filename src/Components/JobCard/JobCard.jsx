import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ title, link }) => {
  return (
    <Link to={link} className='bg-[#f4fafc] hover:bg-[#425968] rounded-lg hover:shadow-md duration-300 text-[#3e4d5d] hover:text-[#ffffff]'>
        <h1 className='text-lg px-5 py-4 font-semibold hover:underline'>{title}</h1>
    </Link>
  )
}

export default JobCard;
