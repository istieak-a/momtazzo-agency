import React from 'react';
import { Link } from 'react-router-dom';

const FilipinoBefinits = ({title}) => {
    const cardData = [
        {
            ico: 'https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/template-assets/icons/Reduce%20costs.svg', 
            title: 'Reduce Costs',
            desc: 'Save up to 70% on employment costs. Get top-notch skills at a fraction of the price.', 
            link: '/why-outsource/reduce-cost'

        }, 
        {
            ico: 'https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/template-assets/icons/Foster%20Business%20Growth.svg', 
            title: 'Foster business growth', 
            desc: 'Navigate demand and scale sustainably with the right people dedicated to your business.', 
            link: '/why-outsource/reduce-cost'
        }, 
        {
            ico: 'https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/template-assets/icons/Increase%20efficiencies.svg', 
            title: 'Increase efficiencies',
            desc: '27% of companies outsource to maximize efficiencies.', 
            link: '/why-outsource/increase-quality-efficiency'
        }, 
        {
            ico: 'https://www.microsourcing.com/hubfs/MicroSourcing/Build%20Your%20Team/template-assets/icons/Access%2024_7%20support.svg', 
            title: 'Access 24/7 support',
            desc: 'Get the support you need, when you need it.', 
            link: '/why-outsource/why-montazzo'
        }
    ]
    return (
        <div className='flex px-5 md:px-16 items-center flex-col md:flex-row bg-[#f4fafc] py-10 gap-10'>
            <h1 className='font-outfit text-5xl font-semibold text-center'>What are the benifits of Indian {title} outsourcing?</h1>
            <div className='grid grid-cols-2 gap-5'>
                {cardData.map((card, i) => (
                    <Card key={i} title={card.title} ico={card.ico} desc={card.desc} link={card.link} />
                ))}
            </div>
        </div>
    );
};

const Card = ({title, ico, desc, link}) => {
    return (
        <Link to={link} className='bg-white px-5 py-8 rounded-lg flex flex-col  items-center gap-3'>
            <img src={ico} alt="icon" />
            <h1 className='font-outfit text-2xl font-bold'>{title}</h1>
            <p className='text-center'>{desc}</p>
        </Link>
    );
}

export default FilipinoBefinits;