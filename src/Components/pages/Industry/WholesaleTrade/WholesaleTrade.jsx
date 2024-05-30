import React from 'react';
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";

const WholesaleTrade = () => {
    const banner = {
        img: '',
        title: 'Wholesale trade outsourcing to the Philippines',
        btn: 'HOW IT WORKS',
        cate: 'INDUSTRY'
    }
    return (
        <div>
        <div>
          <HeroBanner2
            img={banner.img}
            title={banner.title}
            btn={banner.btn}
            cate={banner.cate}
          />
        </div>
            this is wholesale trade page
        </div>
    );
};

export default WholesaleTrade;