import React, {
  useEffect,
  useState,
} from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import imageList from '../server/images.json';
import ClosingSection from './ClosingSection';
import ImageGrid from './ImageGrid';
import Navbar from './Navbar';

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};


const images = importAll(require.context('../assets/images', false, /\.(webp|jpe?g|svg)$/));
;

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to switch to the next image index
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval
  }, []);





  return (
    <>
      <Navbar />
      <div className="relative flex flex-col w-full h-[700px] text-center bg-zinc-900/80">
        <div className="absolute top-0 left-0 w-full h-[700px] image-wrapper border-box"></div>
        <LazyLoadImage
          className=" object-cover w-full h-full mix-blend-overlay "
          src={images[imageList[currentIndex].src]}
          alt={`frames${currentIndex}`}
        />

        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="flex flex-col text-center max-w-[600px] 2xl:max-w-[650px] max-sm:px-6 border-box pt-12">
            {/* <h1 className=" font-jakarta capitalize font-semibold  max-sm:leading-[35px] text-[#ffffff] md:text-[33px] md:leading-[40px] lg:text-[33px] 2xl:text-[33px] lg:leading-[40px] 2xl:leading-[40px] -tracking-[0.7px] 2xl:-tracking-[0.7px]  px-4 max-sm:text-[28px]  ">
              providing afrocentric stock images for your business and
              creativity.
            </h1>
            <p className=" capitalize lg:mt-2 max-sm:mt-1 md:mt-1 lg:text-[16px] leading-[26px] md:text-[15px] max-sm:text-[13px] text-[#9e9c9c] font-jakarta">
              we are a stock image company that focuses on providing timeless
              elegance of monochromatic photography for your business and
              creative needs.
            </p> */}
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