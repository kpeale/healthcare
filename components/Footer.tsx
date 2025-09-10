import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <section className='bg-gradient-to-r from-[#67c3f3] to-[#5a98f2] relative z-20 mt-[5rem] lg:mt-[8rem] xl:mt-[13rem]'>
      <div className='hidden xl:flex '>
        <Image
          src='/FooterElementLeft.png'
          width={131.58}
          height={115}
          alt='image'
          className='xl:absolute xl:left-0 xl:bottom-0'
        />
      </div>

      <div className='hidden xl:flex xl:items-end xl:justify-end '>
        <Image
          src='/footerElement1.png'
          width={131.58}
          height={115}
          alt='image'
          className='xl:absolute xl:right-5 xl:top-[-4rem] opacity-30'
        />
      </div>

      <div className='flex flex-col lg:flex-row py-[3rem] lg:py-[7rem] gap-[3rem] lg:gap-[5rem] lg:gap-[9rem] items-center justify-center mx-auto'>
        <div className='flex flex-col'>
          <div>
            <Link
              href='/'
              className='flex flex-row gap-2 items-center '
            >
              <div className='bg-white flex items-center justify-center w-[50px] h-[50px] rounded-full mb-3'>
                <p className='text-[#5B9BF3] font-mulish font-bold text-[26px]'>
                  T
                </p>
              </div>
              <div>
                <p className='font-bold text-[24px] text-white font-mulish leading-auto text-white'>
                  Trafalgar
                </p>
              </div>
            </Link>
          </div>

          <div className='flex items-center justify-center xl:items-start xl:justify-start max-w-[391px] mt-[22px]'>
            <p className='text-lg text-white leading-[28px] font-mulish font-light'>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
          </div>
          <div className='flex items-center justify-center xl:items-start xl:justify-start max-w-[391px] mt-[31px] mb-[17px]'>
            <p className='text-lg text-white leading-[28px] font-mulish font-light'>
              ©Trafalgar PTY LTD 2020. All rights reserved
            </p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-[3rem] lg:gap-[8rem] xl:gap-[14rem]'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-white font-mulish font-bold text-[20px] leading-[60px] '>
              Company
            </h2>
            <div className='flex flex-col gap-2'>
              <p className='text-white font-mulish font-light text-[16px] leading-[28px] '>
                About
              </p>
              <p className='text-white font-mulish font-light text-[16px] leading-[28px] '>
                Testimonials
              </p>
              <p className='text-white font-mulish font-light text-[16px] leading-[28px] '>
                Find a doctor
              </p>
              <p className='text-white font-mulish font-light text-[16px] leading-[28px] '>
                Apps
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <h2 className='text-white font-mulish font-bold text-[20px] leading-[60px] '>
              Region
            </h2>
            <div className='flex flex-col gap-2'>
              <p className='text-white font-mulish font-light text-[16px] leading-[28px] '>
                Indonesia
              </p>
              <p className='text-white font-mulish font-light text-[16px] leading-[28px] '>
                Singapore
              </p>
              <p className='text-white font-mulish font-light text-[16px] leading-[28px] '>
                Hongkong
              </p>
              <p className='text-white font-mulish font-light text-[16px] leading-[28px] '>
                Canada
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <h2 className='text-white font-mulish font-bold text-[20px] leading-[60px] '>
              Help
            </h2>
            <div className='flex flex-col gap-2'>
              <p className='text-white font-mulish font-light text-[16px] leading-[28px] '>
                Help center
              </p>
              <p className='text-white font-mulish font-light text-[16px] leading-[28px] '>
                Contact support
              </p>
              <p className='text-white font-mulish font-light text-[16px] leading-[28px] '>
                instructions
              </p>
              <p className='text-white font-mulish font-light text-[16px] leading-[28px] '>
                How it works
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
