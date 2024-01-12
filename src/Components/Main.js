import React from 'react';

import loginImg from '../assets/images/IMG_4195.webp';
import ClosingSection from './ClosingSection';
import ImageGrid from './ImageGrid';
import Navbar from './Navbar';

const Main = () => {
  return (
    <>
      <div className="relative flex flex-col w-full h-screen text-center bg-zinc-900/80">
        <Navbar />
        <img
          className="absolute object-cover w-full h-full mix-blend-overlay "
          src={loginImg}
          alt="/"
          loading="lazy"
        />

        <div className="absolute inset-0 flex items-center justify-center min-h-screen ">
          <div className=" text-center w-[800px]">
            <h1 className=" font-rale capitalize font-black max-sm:leading-[35px] text-[#ffffff] md:text-5xl lg:text-[45px] px-4 max-sm:text-[28px]  ">
              providing afrocentric stock images for your business and
              creativity.
            </h1>
            <p className=" capitalize mt-2 text-[20px] md:text-[20px] max-sm:text-[13px] lg:text-[20px] text-[#9e9c9c]">
              we are a stock image company that focuses on providing timeless
              elegance of monochromatic photography for your business and
              creative needs.
            </p>
            <button
              className="bg-[#ef5350] border-2 border-transparent hover:bg-transparent hover:border-[#ef5350] rounded-3xl mt-10 font-tide cursor-pointer px-[70px] py-[12px] max-sm:mt-10 max-sm:px-[50px] max-sm:text-sm text-[#ffffff] transition duration-300 ease-in-out sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"
              type="submit"
            >
              Join Community
            </button>
          </div>
        </div>
      </div>
      <ImageGrid />
      <ClosingSection />
    </>
  );
}

export default Main