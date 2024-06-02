import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Tools = ({title, logos}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Enable auto scroll
        autoplaySpeed: 500, // Auto scroll speed in milliseconds. Lower value = faster scroll
    };

    return (
        <div className='py-20 flex flex-col gap-20'>
            <h1 className='text-center font-outfit font-semibold text-3xl md:text-5xl px-5 md:px-28'>What tools our outsourced {title} trained in</h1>
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className="flex justify-center items-center h-20 w-20">
                        <img src={logo} alt={`logo-${index}`} className="max-h-full max-w-full object-contain px-10" /> 
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Tools;