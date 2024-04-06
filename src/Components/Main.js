import React from 'react';

import loginImg from '../assets/images/IMG_4195.webp';
import ClosingSection from './ClosingSection';
import ImageGrid from './ImageGrid';
import Navbar from './Navbar';

const Main = () => {
  return (
    <>
      <div className="relative flex flex-col w-full min-h-[500px] text-center bg-zinc-900/80">
        <Navbar />
        <img
          className="absolute object-cover w-full h-full mix-blend-overlay "
          src={loginImg}
          alt="/"
          loading="lazy"
        />

        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="flex flex-col text-center max-w-[600px] 2xl:max-w-[700px] max-sm:px-6 border-box pt-12">
            <h1 className="font-sans capitalize font-Light 2xl:font-Light max-sm:leading-[35px] text-[#ffffff] md:text-[33px] md:leading-[40px] lg:text-[33px] 2xl:text-[40px] lg:leading-[40px] 2xl:leading-[45px] -tracking-tight 2xl:tracking-wide fill-[#ffffff] px-4 max-sm:text-[28px]  ">
              providing afrocentric stock images for your business and
              creativity.
            </h1>
            <p className=" capitalize lg:mt-2 max-sm:mt-1 md:mt-1 lg:text-[16px] md:text-[15px] max-sm:text-[13px] text-[#9e9c9c] font-sans">
              we are a stock image company that focuses on providing timeless
              elegance of monochromatic photography for your business and
              creative needs.
            </p>
            {/* <button
              className="bg-[#ef5350] border-2 border-transparent hover:bg-transparent hover:border-[#ef5350] rounded-3xl mt-5 font-sans cursor-pointer font-extralight mx-auto py-[10px] max-sm:mt-5 max-sm:px-[35px] md:px-[40px] lg:px-[35px] max-sm:text-[12px] text-[#ffffff] transition duration-300 ease-in-out md:text-lg lg:text-lg 2xl:text-sm tracking-widest"
              type="submit"
            >
              Join Community
            </button> */}
          </div>
        </div>
      </div>
      <ImageGrid />
      <ClosingSection />
    </>
  );
}

export default Main