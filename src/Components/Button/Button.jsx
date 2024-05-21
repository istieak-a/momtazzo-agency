import React from 'react';

const Button = ({ onClick, children, ...props }) => {
  return (
    <button className='font-outfit text-[15px] border-2 px-10 py-3 border-black hover:bg-black hover:text-white duration-300' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;