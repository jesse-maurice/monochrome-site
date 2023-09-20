import React from 'react';

import { Link } from 'react-router-dom';

import loginImg from '../asssets/images/IMG_4195.png';
import ClosingSection from './ClosingSection';
import ImageGrid from './ImageGrid';
import Navbar from './Navbar';

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen flex flex-col content-center justify-center text-center bg-zinc-900/80">
        <img
          className="absolute w-full h-full object-cover mix-blend-overlay "
          src={loginImg}
          alt="/"
        />

        <div className=" min-h-screen flex items-center absolute inset-0  justify-center">
          <div className=" text-center w-[800px]">
            <h1 className=" font-rale capitalize font-black max-sm:leading-[35px] text-[#ffffff] md:text-5xl lg:text-[45px] px-4 max-sm:text-[30px]  ">
              providing afrocentric stock images for your business and
              creativity.
            </h1>
            <p className=" capitalize mt-2 text-[20px] md:text-[20px] max-sm:text-[16px] lg:text-[20px] text-[#9e9c9c]">
              we are a stock image company that focuses on providing timeless
              elegance of monochromatic photography for your business and
              creative needs.
            </p>
            <Link to={"/"}>
              <button
                className="bg-[#ef5350] hover:bg-transparent hover:border-2 hover:border-[#ef5350] rounded-3xl mt-10 font-tide cursor-pointer px-[70px] py-[12px] max-sm:mt-10 max-sm:px-[50px] max-sm:text-base text-[#ffffff] transition duration-300 ease-in-out sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"
                type="submit"
              >
                Join Community
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ImageGrid />
      <ClosingSection/>
    </>
  );
}

export default Main