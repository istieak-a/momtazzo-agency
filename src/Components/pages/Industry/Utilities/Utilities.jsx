import React from 'react';
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";

const Utilities = () => {
    const banner = {
        img: 'https://www.microsourcing.com/hs-fs/hubfs/MicroSourcing/Build%20Your%20Team/iStock-1405880267.png?width=828&height=465&name=iStock-1405880267.png',
        title: 'Utilities outsourcing to the Philippines',
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
            this is utilities page
        </div>
    );
};

export default Utilities;