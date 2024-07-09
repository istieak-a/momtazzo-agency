import React from 'react'
import { FaLinkedin } from "react-icons/fa";

const TeamCard = ({title, img, linkedin, desc, designation}) => {
  return (
    <div className='flex flex-col gap-5 items-center'>
        <img className='w-[250px] h-[250px] object-cover rounded-full hover:border-8 hover:border-[#f4fafc] duration-300' src={img} alt="" />
        <div className='text-center flex flex-col gap-2'>
            <h1 className='font-outfit text-3xl'>{title}</h1>
            <h3 className='font-semibold'>{designation}</h3>
            <a href={linkedin} className='text-xl mx-auto py-2 hover:scale-110'><FaLinkedin /></a>
            <p className='px-20 text-sm'>{desc}</p>
        </div>
    </div>
  )
}

export default TeamCard