import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div className='hidden xl:flex lg:justify-start mt-[9rem]'>
        <Image
          src='/heroDots.png'
          width={131.58}
          height={115}
          alt='dots'
        />
      </div>

      <section
        id='home'
        className='flex flex-col justify-between items-center xl:flex-row mt-[8rem] xl:mt-[-8rem]  px-0  lg:px-[6rem] xl:px-[10rem] 2xl:px-[15rem] '
      >
        <div className='flex flex-col items-center justify-center xl:items-start xl:justify-start'>
          <h2 className='text-black font-mulish text-[2rem] lg:text-[3rem] leading-[2rem] lg:leading-[3.5rem] font-bold max-w-max xl:max-w-[480px] text-center xl:text-start'>
            Virtual Healthcare for you
          </h2>
          <p className='font-mulish font-light text-lg lg:text-[21px] leading-[1.5rem] lg:leading-[2rem] text-[#7d7987] max-w-[445px] mt-4 text-center xl:text-start'>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <div className='mt-6'>
            <button className='bg-[#458ff6] rounded-[55px] px-6 py-3 text-white font-mulish font-bold text-lg leading-[60px['>
              Consult today
            </button>
          </div>
        </div>

        <div>
          <Image
            src='/heroImg.png'
            width={693}
            height={598}
            alt='hero image'
            className='w-[310px] h-[300px] md:w-[693px] md:h-[598px]  xl:w-[550px] 2xl:w-[693px] '
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
