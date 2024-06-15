import React from 'react';
import gurantee from '../../../assets/icons/Pricing Guarantee.svg';
import fixed from '../../../assets/icons/Fixed monthly service.svg';
import hidden from '../../../assets/icons/No hidden costs.svg';
import transparent from '../../../assets/icons/Transparent pricing model.svg';



const GuranteePricing = () => {
    return (
        <div className='bg-[#20253d] mx-5 px-5 md:px-40 md:mx-16 py-10 flex flex-col gap-10 rounded-lg'>
            <div className='flex flex-col items-center gap-5'>
                <img src={gurantee} alt="ico" />
                <div className='flex flex-col items-center'>
                    <h1 className='text-white text-4xl text-center font-outfit font-[700]'>Montazzo’s pricing guarantee</h1>
                    <p className='text-[#02b6f4] pt-3 text-3xl text-center font-dmsans font-bold'>Unlock your potential- no surprises, just result. </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-around items-center  gap-8'>
                <div className='flex flex-col items-center gap-4'>
                    <img src={fixed} alt="ico" />
                    <h2 className='text-white font-dmsans text-xl'>All inclusive pricing</h2>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <img src={hidden} alt="ico" />
                    <h2 className='text-white font-dmsans text-xl'>No hidden fees</h2>
                </div>
            </div>
        </div>
    );
};

export default GuranteePricing;