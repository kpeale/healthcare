import React from 'react';
import Image from 'next/image';
import Button from './Button';

const AboutUs = () => {
  return (
    <section
      id='about'
      className='mt-[2.5rem] lg:mt-28 '
    >
      <div>
        <h1 className='text-black text-center font-bold font-mulish text-2xl lg:text-4xl leading-10 lg:leading-14'>
          Our services
        </h1>
        <div className='border-t-2 border-t-black w-14 h-0.5 flex mx-auto my-2 items-center justify-center rounded-[5px] '></div>
        <div className='mt-4 flex items-center justify-center mx-auto text-center max-w-[300px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[952px]'>
          <p className='text-[#7D7987]  font-mulish font-light text-[16px] lg:text-lg leading-5 lg:leading-8'>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
      </div>

      <div className='relative'>
        <div className='hidden xl:flex xl:flex-row xl:itens-center xl:justify-between'>
          <div className='hidden xl:flex'>
            <Image
              width={937.96}
              height={671.38}
              src='/serviceFrame.png'
              alt='vector'
              className='xl:absolute xl:z-10 xl:top-[-12rem] xl:left-0 xl:overflow-hidden bg:w-[1200px]'
            />
          </div>

          <div className='hidden xl:flex '>
            <Image
              src='/serviceDots.png'
              width={131.58}
              height={115}
              alt='dots'
              className='xl:absolute xl:z-10 xl:right-[3%] ysm:right-[8%] tsm:right-[5%] 2xl:right-[4%] lsm:right-[5.5%] bsm:right-[6.5%] csm:right-[7.5%] dsm:right-[8.5%] bg:right-[9%] vsm:right-[10%] ug:right-[11%] fsm:right-[12%]   xl:bottom-[19.5rem]'
            />
          </div>
        </div>

        <div className='flex flex-col xl:flex-row items-center justify-center mx-auto gap-[34px] 2xl:justify-evenly mt-10 xl:mt-[80px]'>
          <div className='w-[300px] h-[320px] sm:w-[350px] sm:h-[354px] flex flex-col items-center justify-center xl:items-start xl:justify-start  rounded-[20px] bg-white shadow-2xl xl:z-20'>
            <div className=' pl-0 pt-[54px] xl:pl-[37px]'>
              <Image
                src='/searchImg.png'
                width={91.98}
                height={90}
                alt='search icon'
              />
            </div>
            <h2 className='pt-[22.41px] font-mulish text-bold text-[20px] lg:text-lg leading-7 lg:leading-14 pl-0 xl:pl-[39px]'>
              Search doctor
            </h2>
            <p className='pt-[10px] max-w-[266px] xl:max-w-[310px] text-[#7D7987] font-mulish font-light text-[16px] leading-6 pl-0 xl:pl-[39px] pb-[54px]  xl:pb-[46.59px]'>
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>

          {/* second card */}
          <div className='w-[300px] h-[320px] sm:w-[350px] sm:h-[354px]  flex flex-col items-center justify-center xl:items-start xl:justify-start  rounded-[20px] bg-white shadow-2xl xl:z-20'>
            <div className='pt-[62px] pl-0 xl:pl-[37px]'>
              <Image
                src='/drug.png'
                width={61.86}
                height={81}
                alt='search icon'
              />
            </div>

            <h2 className='pt-[19.41px] font-mulish text-bold text-[20px] lg:text-lg leading-7 lg:leading-14 pl-0 xl:pl-[36.36px]'>
              Online pharmacy
            </h2>
            <p className='pt-[10px] max-w-[260px] xl:max-w-[261px] text-[#7D7987] font-mulish font-light text-[16px] leading-6 pl-0 xl:pl-[37px] pb-[62px] xl:pb-[47px]'>
              Buy your medicines with our mobile application with a simple
              delivery system
            </p>
          </div>

          {/* third card */}
          <div className='w-[300px] h-[320px] sm:w-[350px] sm:h-[354px]  flex flex-col items-center justify-center xl:items-start xl:justify-start   rounded-[20px] bg-white shadow-2xl xl:z-20'>
            <div className='pt-[47px] pl-0 xl:pl-[38px]'>
              <Image
                src='/tabImg.png'
                width={67.29}
                height={95}
                alt='search icon'
              />
            </div>

            <h2 className='pt-[24.41px] font-mulish text-bold text-[20px] lg:text-lg leading-7 lg:leading-14  pl-0 xl:pl-[38.36px]'>
              Consultation
            </h2>
            <p className='pt-[10px] max-w-[260px] xl:max-w-[280px] text-[#7D7987] font-mulish font-light text-[16px] leading-6  pl-0 xl:pl-[39px]  pb-[47px]'>
              Free consultations with our trusted doctors and get the best
              recomendations
            </p>
          </div>
        </div>

        {/* second row */}
        <div className='flex flex-col xl:flex-row items-center justify-center mx-auto  gap-[34px] 2xl:justify-evenly mt-10 xl:mt-[37px]'>
          <div className='w-[300px] h-[320px] sm:w-[350px] sm:h-[354px]  flex flex-col items-center justify-center xl:items-start xl:justify-start    rounded-[20px] bg-white shadow-2xl xl:z-20'>
            <div className='pt-[46px] pl-0 xl:pl-[39.61px]'>
              <Image
                src='/detailsImg.png'
                width={67.08}
                height={95}
                alt='search icon'
              />
            </div>
            <h2 className='pt-[25.41px] font-mulish text-bold text-[20px] lg:text-lg leading-7 lg:leading-14 pl-0 xl:pl-[38.41px]'>
              Details info
            </h2>
            <p className='pt-[10px] max-w-[260px] xl:max-w-[310px] text-[#7D7987] font-mulish font-light text-[16px] leading-6 pl-0 xl:pl-[39px] pb-[46px] xl:pb-[47px]'>
              Free consultation with our trusted doctors and get the best
              recomendations
            </p>
          </div>

          {/* second card */}
          <div className='w-[300px] h-[320px] sm:w-[350px] sm:h-[354px]  flex flex-col items-center justify-center xl:items-start xl:justify-start  rounded-[20px] bg-white shadow-2xl xl:z-20'>
            <div className='pt-[59px] pl-0 xl:pl-[40px]'>
              <Image
                src='/emergency.png'
                width={80}
                height={71.15}
                alt='first aid box '
              />
            </div>

            <h2 className=' pt-[15px] xl:pt-[36.25px] font-mulish text-bold text-[20px] lg:text-lg leading-7 lg:leading-14 pl-0 xl:pl-[38px]'>
              Emergency care
            </h2>
            <p className='pt-[10px] max-w-[260px] xl:max-w-[270px] text-[#7D7987] font-mulish font-light text-[16px] leading-6 pl-0 xl:pl-[39px] pb-[59px] xl:pb-[46.59px]'>
              You can get 24/7 urgent care for yourself or your children and
              your lovely family
            </p>
          </div>

          {/* third card */}
          <div className='w-[300px] h-[320px] sm:w-[350px] sm:h-[354px]  flex flex-col items-center justify-center xl:items-start xl:justify-start   rounded-[20px] bg-white shadow-2xl xl:z-20'>
            <div className='pt-[52px] pl-0 xl:pl-[36px]'>
              <Image
                src='/tabImg.png'
                width={69.42}
                height={95}
                alt='search icon'
              />
            </div>

            <h2 className='pt-[19.41px] font-mulish text-bold text-[20px] lg:text-lg leading-7 lg:leading-14 pl-0  xl:pl-[38.36px]'>
              Tracking
            </h2>
            <p className='pt-[10px] max-w-[260px] xl:max-w-[300px] text-[#7D7987] font-mulish font-light text-[16px] leading-6 pl-0 xl:pl-[39px] pb-[52px] xl:pb-[75px]'>
              Track and save your medical history and health data
            </p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center mt-[69px] mx-auto'>
        <Button>Learn more</Button>
      </div>
    </section>
  );
};

export default AboutUs;
