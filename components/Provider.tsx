import React from 'react';
import Image from 'next/image';
import Button from './Button';

const Provider = () => {
  return (
    <>
      <section
        id='find-doctor'
        className='mt-[8rem] lg:mt-[13.75rem] flex flex-col xl:flex-row items-center justify-center  xl:justify-evenly gap-[3rem] sm:gap-[5rem] mx-auto xl:gap-[137px] 2xl:gap-[150px] bg:gap-[160px] ug:gap-[180px] fsm:gap-[190px]  xl:items-center    '
      >
        <div>
          <Image
            src='/leadingImg.png'
            width={650}
            height={477}
            alt='image'
            className='w-[310px] h-[300px] md:w-[650px] md:h-[477px]  xl:w-[550px] 2xl:w-[650px] '
          />
        </div>

        <div className='flex items-center justify-center flex-col mx-auto xl:mx-0 xl:items-start xl:justify-start'>
          <h1 className='text-black font-mulish font-bold max-w-max text-center xl:text-start xl:max-w-[400px]  text-2xl xl:text-[32px] leading-7 xl:leading-14'>
            Leading healthcare providers
          </h1>
          <div className='border-black border-t-2 w-14 h-0.5 rounded-[10px] flex items-center justify-center mt-[26px] xl:items-start xl:justify-start mx-auto xl:mx-0'></div>
          <div className='mt-[20px] xl:mt-[31px]  max-w-[450px] 2xl:max-w-[600px] bg:max-w-[1000px ] '>
            <p className='font-mulish text-lg text-[#7D7987] font-light text-center xl:text-start leading-[30px]'>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </p>
          </div>

          <div className='mt-[37px] flex items-center justify-center xl:items-start xl:justify-start'>
            <Button>Learn more</Button>
          </div>
        </div>
      </section>
      <div className='hidden xl:flex lg:justify-end mt-[9rem]'>
        <Image
          src='/heroDots.png'
          width={131.58}
          height={115}
          alt='dots'
        />
      </div>
    </>
  );
};

export default Provider;
