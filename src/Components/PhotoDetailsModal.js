import React from 'react';

const PhotoDetailsModal = ({ image, onClose }) => {

  if (!image) return null;


  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center overflow-hidden">
      <div className="scrollable-hidden w-[610px] h-[577px] rounded-lg">
        <div className="w-full  py-7 px-12 bg-black rounded-t-xl">
          <div className="photo-details-container flex content-center items-center gap-7">
            <div className="max-w-[110px] max-sm:max-w-[100px] max-h-[150px] rounded-xl">
              <img
                className="w-auto h-auto rounded-xl"
                src={image.src}
                alt="details"
              ></img>
            </div>
            <div>
              <h2 className=" font-semibold leading-10 text-[35px] max-sm:text-[30px] text-[#ffffff]">
                Photo details
              </h2>
              <p className=" text-base max-sm:text-sm -mt-1 max-sm:-mt-0 font-medium text-[#bfbfbf]">
                Uploaded on January 12th, 2024
              </p>
            </div>
          </div>
          <div className="views-container mt-7 flex items-center content-center gap-[100px] max-sm:gap-[60px]">
            <div className="flex flex-col gap-1">
              <h3 className=" text-sm font-medium text-[#bfbfbf]">Views</h3>
              <span className=" text-[21px] font-medium text-[#ffffff] "></span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-medium text-[#bfbfbf]">Likes</h3>
              <span className="text-[21px] font-medium text-[#ffffff]"></span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-medium text-[#bfbfbf]">Downloads</h3>
              <span className="text-[21px] font-medium text-[#ffffff]"></span>
            </div>
          </div>
        </div>
        <div className=" bg-white w-full relative  py-8 px-12 rounded-xl ">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#bfbfbf] flex items-center justify-center border-none outline-none"
          >
            <i className="fa-solid fa-xmark text-3xl"></i>
          </button>
          <div className="flex flex-col content-center items-center w-full">
            <div className="flex gap-7 max-sm:gap-3 w-full">
              <div className="flex flex-col gap-2 max-sm:max-w-[60px]">
                <h3 className=" text-sm font-normal text-[#7f7f7f]">
                  Dimensions
                </h3>
                <p className=" text-xl max-sm:text-base font-normal text-[#2c343e] truncate">
                  3272 x 4090
                </p>
              </div>
              <div className="flex flex-col gap-2 max-sm:max-w-[70px]">
                <h3 className=" text-sm font-normal truncate text-[#7f7f7f]">
                  Aspect Ratio
                </h3>
                <p className=" text-xl max-sm:text-base font-normal text-[#2c343e]">
                  4:5
                </p>
              </div>
              <div className="flex flex-col gap-2 max-sm:max-w-[95px]">
                <h3 className=" text-sm font-normal text-[#7f7f7f]">Camera</h3>
                <p className=" text-xl max-sm:text-base truncate font-normal text-ellipsis text-[#2c343e]">
                  IPhone 11 Pro
                </p>
              </div>
              <div className="flex flex-col gap-2 max-sm:max-w-[50px]">
                <h3 className=" text-sm font-normal text-[#7f7f7f]">Focal</h3>
                <p className=" text-xl max-sm:text-base truncate font-normal text-[#2c343e]">
                  18.0mm
                </p>
              </div>
            </div>
            <div className="flex gap-[74px] max-sm:gap-10 w-full mt-6">
              <div className="flex flex-col gap-2">
                <h3 className=" text-sm font-normal text-[#7f7f7f]">
                  Aperture
                </h3>
                <p className=" text-xl max-sm:text-base font-normal text-[#2c343e]">
                  f/10.0
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className=" text-sm font-normal text-[#7f7f7f]">ISO</h3>
                <p className=" text-xl max-sm:text-base font-normal text-[#2c343e]">
                  100
                </p>
              </div>
              <div className="flex flex-col gap-2 max-sm:max-w-[50px]">
                <h3 className=" text-sm truncate font-normal text-[#7f7f7f]">
                  Shutter Speed
                </h3>
                <p className=" text-xl max-sm:text-base font-normal text-ellipsis text-[#2c343e]">
                  0.004s
                </p>
              </div>
              <div className="flex flex-col gap-2 max-sm:max-w-[60px]">
                <h3 className=" text-sm font-normal text-[#7f7f7f]">
                  Taken At
                </h3>
                <p className=" text-xl max-sm:text-base truncate font-normal text-[#2c343e]">
                  Jan 26, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoDetailsModal