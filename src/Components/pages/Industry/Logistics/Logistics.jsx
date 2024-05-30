import React from 'react';
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";

const Logistics = () => {
    const banner = {
        img: 'https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-1149078028.png?width=828&height=465&name=iStock-1149078028.png',
        title: 'Logistics outsourcing to the Philippines',
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
            this is logistics page
        </div>
    );
};

export default Logistics;