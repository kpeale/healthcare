'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { testimonials } from '@/data';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === testimonials.length - 1;

  return (
    <>
      <section
        id=' testimonials'
        className='bg-gradient-to-r from-[#67c3f3] to-[#5a98f2] overflow-hidden w-[300px] nwsm:w-[400px] sm:w-[500px] md:w-[600px] lg:w-[800px] rounded-3xl xl:w-[1120px] relative z-10 py-8 xl:py-16 flex flex-col items-center justify-center mx-auto mt-[3rem] md:mt-[5rem] xl:mt-[8rem] bg:mt-[15rem]'
      >
        <div className='hidden xl:flex xl:items-end xl:justify-end '>
          <Image
            src='/footerElement1.png'
            width={131.58}
            height={115}
            alt='image'
            className='xl:absolute xl:left-5 xl:top-[-4rem] '
          />
        </div>
        <div className='hidden xl:flex '>
          <Image
            src='/serviceDots.png'
            width={131.58}
            height={115}
            alt='dots'
            className='xl:absolute xl:z-20 xl:top-[-1.4rem] xl:right-[-3rem]'
          />
        </div>

        <h2 className='max-w-[522px] font-mulish font-bold leading-[48px] text-lg xl:text-[32px] text-center text-white '>
          What our customer are saying
        </h2>
        <div className='border-t-2 border-t-white w-14 h-0.5 flex mx-auto my-2 items-center justify-center rounded-[6px] mt-[1rem] xl:mt-[25px]'></div>

        <div className='overflow-hidden'>
          <div
            className='flex transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                className='w-full flex-shrink-0 flex flex-col xl:flex-row items-center justify-center pt-[30px] sm:pt-[50px] xl:pt-[77px] gap-9 xl:gap-[110px]'
                key={testimonial.name}
              >
                <div className='order-2 xl:order-1 flex flex-col items-center justify-center xl:flex-row xl:items-start xl:justify-start gap-4'>
                  <div>
                    <Image
                      src={testimonial.image}
                      width={133}
                      height={133}
                      alt='image'
                      className='rounded-full'
                    />
                  </div>

                  <div className='flex flex-col gap-1 xl:pt-[2rem]'>
                    <p className='font-mulish font-bold text-white text-[22px] leading-12'>
                      {testimonial.name}
                    </p>
                    <p className='font-mulish font-normal text-white text-lg leading-12 xl:mt-[-1rem]'>
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <div className='order-1 xl:order-2 flex items-center justify-center mx-auto xl:items-start xl:justify-start xl:mx-0 max-w-[290px] sm:max-w-[420px]'>
                  <p className='font-mulish font-normal text-white text-[19px] leading-[30px] text-center xl:text-start'>
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className='flex flex-row items-center justify-center gap-[60px] sm:gap-[90px] mt-[42px]'>
        <button
          onClick={prevSlide}
          disabled={isFirstSlide}
          className={`  ${
            isFirstSlide ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          aria-label='Previous testimonial'
        >
          <FaArrowLeft
            className={`w-[31.43px] h-[20px] ${
              isFirstSlide ? ' opacity-40 text-[#5B9BF3]' : 'text-[#5B9BF3]'
            }`}
          />
        </button>

        <div className='flex justify-center gap-[18px] '>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-[10px] h-[10px] rounded-full transition-colors ${
                index === currentSlide
                  ? ' opacity-30 bg-[#5B9BF3]'
                  : 'bg-[#5B9BF3]'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={isLastSlide}
          className={`   ${
            isLastSlide ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          aria-label='Next testimonial'
        >
          <FaArrowRight
            className={`w-[31.43px] h-[20px] ${
              isLastSlide ? ' opacity-40 text-[#5B9BF3]' : 'text-[#5B9BF3]'
            }`}
          />
        </button>
      </div>
    </>
  );
};

export default Testimonial;
