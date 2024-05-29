import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

const WhyOutsource = () => {
  return (
    <div className='min-h-screen'>
      <Outlet />
    </div>
  );
};

export default WhyOutsource;