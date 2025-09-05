import React from 'react';

type Props = {
  children: string;
};

const Button = ({ children }: Props) => {
  return (
    <button className='bg-white font-mulish text-[#458FF6]  font-bold text-lg leading-[60px]  px-[51px] pt-[3px] pb-[1px] border-[1.4px] border-[#458FF6] rounded-[55px]'>
      {children}
    </button>
  );
};

export default Button;
