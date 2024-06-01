import React from 'react';
import './FeaturesSection.css'

const featuresSection = ({title, li1, li2, li3, li4}) => {
    return (
        <div className='px-5 md:px-28 flex flex-col gap-10'>
            <h1 className='md:text-5xl text-3xl font-outfit text-center font-[600]'>{title}</h1>
            <ul className='grid grid-cols-2 gap-10 features'>
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>
                <li>{li4}</li>
            </ul>
        </div>
    );
};

export default featuresSection;