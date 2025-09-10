import { FaArrowDownLong } from 'react-icons/fa6';
import Image from 'next/image';
const Download = () => {
  return (
    <section
      id='apps'
      className='mt-[3rem] sm:mt-[5rem] md:mt-[8rem] xl:mt-[14rem] flex items-center justify-center gap-[3rem]  flex-col xl:items-start xl:justify-center xl:gap-[71px]  xl:flex-row'
    >
      <div className='flex flex-col items-center justify-center  xl:items-start xl:justify-start'>
        <h1 className='max-w-max xl:max-w-[254px] text-black font-mulish font-bold text-2xl xl:text-4xl'>
          Download our mobile apps
        </h1>
        <div className='border-black border-t-2 w-14 h-0.5 rounded-[10px] flex items-center justify-center mt-[26px] xl:items-start xl:justify-start mx-auto xl:mx-0'></div>
        <div className='mt-[31px] max-w-[420px] '>
          <p className='text-lg font-mulish font-light text-[#7D7987] text-center xl:text-start '>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
        </div>
        <div className='mt-[20px] xl:mt-[40px] flex items-center justify-center xl:items-start xl:justify-start'>
          <button className='bg-white font-mulish text-[#458FF6]  font-bold text-lg leading-[60px]  px-[41px] pt-[2px] pb-[1px] border-[1.4px] border-[#458FF6] rounded-[55px] flex items-center justify-center gap-2'>
            Download
            <FaArrowDownLong className='text-[#458FF6] w-[15.43px] h-[12px] ' />
          </button>
        </div>
      </div>

      <div>
        <Image
          src='/downloadImg.png'
          width={665}
          height={445}
          alt='image'
          className='w-[310px] h-[300px] md:w-[665px] md:h-[445px]  xl:w-[550px] 2xl:w-[665px] '
        />
      </div>
    </section>
  );
};

export default Download;
