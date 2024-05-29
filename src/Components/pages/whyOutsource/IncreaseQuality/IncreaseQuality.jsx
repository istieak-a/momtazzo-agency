import React from 'react';
import hero from '../../../../assets/banner-img/ms-banner-increase-quality-efficiency.jpg'; 
import heroRes from '../../../../assets/banner-img/ms-banner-increase-quality-efficiency-m.jpg';
import HeroBanner from '../../../Sections/HeroBanner/HeroBanner';

const IncreaseQuality = () => {
    const heroBanner = {
        title: "Why outsource? To increase quality and efficiency",
        desc: "Tap into an offshore talent pool that is committed to boosting productivity and minimizing errors",
        img: hero,
        imgRes: heroRes,
      };
    return (
        <div>
            <div>
        <HeroBanner
          title={heroBanner.title}
          title2={heroBanner.title2}
          desc={heroBanner.desc}
          img={heroBanner.img}
          imgRes={heroBanner.imgRes}
        />
      </div>
            this is increase quality & Effciency Page
        </div>
    );
};

export default IncreaseQuality;