import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { FaArrowRight } from 'react-icons/fa6';
const Articles = () => {
  return (
    <section
      id=''
      className='mt-[3rem] sm:mt-[5rem] lg:mt-[8rem] xl:mt-[13rem] relative'
    >
      <h2 className='font-mulish font-bold text-black text-2xl sm:text-[36px] leading-14  text-center flex items-center justify-center'>
        Check out our latest article
      </h2>
      <div className='border-t-2 border-t-black w-14 h-0.5 flex mx-auto my-2 items-center justify-center rounded-[6px] mt-[1rem] xl:mt-[26px]'></div>
      <div className='hidden xl:flex xl:items-end xl:justify-end'>
        <Image
          className='xl:absolute xl:z-10 xl:top-[-5rem] opacity-30 bg:w-[800px]  bg:top-[-5rem] '
          src='/articleelement.png'
          width={500}
          height={557.38}
          alt='image'
        />
      </div>

      <div className='hidden xl:flex xl:items-start xl:justify-start'>
        <Image
          className='xl:absolute   xl:z-10 xl:top-[7rem] xl:left-[3%] esm:left-[4.5%] jsm:left-[5.5%] zmd:left-[6%] ksm:left-[7%] ysm:left-[8%] psm:left-[9%] qsm:left-[10%] rsm:left-[11%] msm:left-[12%] nsm:left-[13%] lsm:left-[14%] asm:left-[15%] bsm:left-[16%] csm:left-[17%] gsm:left-[17.5%] dsm:left-[18%] hsm:left-[18.5%] ism:left-[19%] osm:left-[19.5%] bg:left-[20%] lbg:left-[20.5%] wsm:left-[21%] mbg:left-[21.5%] vsm:left-[22%] bmd:left-[22.5%] cmd:left-[23%] dmd:left-[23.5%] ug:left-[22%] emd:left-[22.5%] fmd:left-[23%] gmd:left-[23.5%] hmd:left-[24%] imd:left-[24.5%] jmd:left-[25%]'
          src='/articleDot.png'
          width={111.58}
          height={115}
          alt='image'
        />
      </div>
      <div className='flex flex-col items-center justify-center mx-auto xl:flex-row gap-[34px] ug:gap-[71px] mt-[2rem] xl:mt-[4rem]'>
        {/* first card */}
        <div className='w-[300px]  nwsm:w-[350px] h-[512px]  shadow-xl rounded-[20px] xl:z-20 '>
          <div>
            <Image
              src='/diseaseImg.png'
              width={350}
              height={240}
              alt='image'
              className='w-[300px] nwsm:w-[350px]'
            />
          </div>
          <div className='flex flex-col items-center justify-center mx-auto xl:items-start xl:justify-start'>
            <h3 className='pl-0 xl:pl-[33px] pt-[24px] text-center xl:text-start max-w-[270px] text-black font-mulish text-[20px] xl:text-[21px] leading-[32px] '>
              Disease detection, check up in the laboratory
            </h3>

            <p className='pl-0 xl:pl-[33px] pt-[12px] text-center xl:text-start  text-[#7D7987] font-mulish text-[16px] leading-[28px] max-w-[260px] xl:max-w-[280px] font-light'>
              In this case, the role of the health laboratory is very important
              to do a disease detection...
            </p>
          </div>
          <div className='flex flex-row items-center justify-center  xl:justify-start gap-[8px] pl-0 xl:pl-[33px] pt-[25px] pb-[24px] xl:pb-[33px]'>
            <Link
              href='image'
              className='text-[#4089ED] font-mulish font-semibold text-[17px] leading-[28px]'
            >
              Read more
            </Link>
            <FaArrowRight className='text-[#4089ED] w-[14.14px] h-[9px]' />
          </div>
        </div>

        {/* second card */}
        <div className='w-[300px] h-[412px] shadow-xl rounded-[20px] nwsm:w-[350px] h-[512px] xl:z-20 '>
          <div>
            <Image
              src='/herbalImg.png'
              width={350}
              height={240}
              alt='image'
              className='w-[300px] nwsm:w-[350px]'
            />
          </div>
          <div className='flex flex-col items-center justify-center mx-auto xl:items-start xl:justify-start'>
            <h3 className='pl-0 xl:pl-[33px] pt-[24px] text-center xl:text-start max-w-[275px] text-black font-mulish text-[20px] xl:text-[21px] leading-[32px]'>
              Herbal medicines that are safe for consumption
            </h3>
            <p className='pl-0 xl:pl-[33px] pt-[12px] text-center xl:text-start text-[#7D7987] font-mulish text-[16px] leading-[28px] max-w-[260px] xl:max-w-[280px] font-light'>
              Herbal medicine is very widely used at this time because of its
              very good for your health...
            </p>
          </div>
          <div className='flex flex-row items-center justify-center  xl:justify-start gap-[8px] pl-0 xl:pl-[33px] pt-[25px] pb-[24px] xl:pb-[33px]'>
            <Link
              href='image'
              className='text-[#4089ED] font-mulish font-semibold text-[17px] leading-[28px]'
            >
              Read more
            </Link>
            <FaArrowRight className='text-[#4089ED] w-[14.14px] h-[9px]' />
          </div>
        </div>

        {/* third card */}
        <div className='w-[300px] h-[412px] nwsm:w-[350px] h-[512px] flex flex-col shadow-xl rounded-[20px] xl:z-20 '>
          <div>
            <Image
              src='/naturaldrugs.png'
              width={350}
              height={240}
              alt='image'
              className='w-[300px] nwsm:w-[350px]'
            />
          </div>

          <div className='flex items-center justify-center xl:items-start xl:justify-start'>
            <h3 className='pl-0 xl:pl-[32px] pt-[24px] text-center xl:text-start max-w-[270px] text-black font-mulish text-[20px] xl:text-[21px] leading-[32px] '>
              Natural care for healthy facial skin
            </h3>
          </div>

          <div className='flex items-center justify-center xl:items-start xl:justify-start'>
            <p className=' pl-0 xl:pl-[32px] pt-[12px] text-center xl:text-start  text-[#7D7987] font-mulish text-[16px] leading-[28px] max-w-[250px] xl:max-w-[280px] font-light'>
              A healthy lifestyle should start from now and also for your skin
              health. There are some...
            </p>
          </div>

          <div className='flex flex-row gap-[8px] pl-0 xl:pl-[32px] pt-[25px]  pb-[12px] xl:pb-[33px] items-center justify-center  xl:justify-start '>
            <Link
              href='image'
              className='text-[#4089ED] font-mulish font-semibold text-[17px] leading-[28px]'
            >
              Read more
            </Link>
            <FaArrowRight className='text-[#4089ED] w-[14.14px] h-[9px]' />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center mx-auto mt-[4rem]'>
        <Button>View all</Button>
      </div>
    </section>
  );
};

export default Articles;
