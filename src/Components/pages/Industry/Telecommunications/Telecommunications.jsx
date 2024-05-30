import React from 'react';
import HeroBanner2 from "../../../Sections/HeroBanner2/HeroBanner2";

const Telecommunications = () => {
    const banner = {
        img: '',
        title: 'Telecommunications Outsourcing Services',
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
            this is telecommunications page
        </div>
    );
};

export default Telecommunications;