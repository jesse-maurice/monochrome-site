import {
  React,
  useState,
} from 'react';

import avatar
  from '../assets/images/WhatsApp Image 2022-11-01 at 22.39.49_eb25e570.jpg';
import PhotoDetailsModal from '../Components/PhotoDetailsModal';

const ImageModal = ({ image, onClose }) => {
  const [isCollected, setIsCollected] = useState(false);
  const [likes, setLikes] = useState(0);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  if (!image) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = image.src;
    link.download = "DownloadedImage.png"; // Dynamic naming is possible
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


   const openImageDetailsModal = () => {
    //  setSelectedImageDetails(image); // Set the image for details modal
     setShowDetailsModal(true); // Open the PhotoDetailsModal
   };

   const closeImageDetailsModal = () => {
     setShowDetailsModal(false);
   };

  

  // Handle collection toggle
  const handleCollection = () => {
    setIsCollected(!isCollected);
    // Additional logic for when an item is collected or uncollected
  };

  // Handle likes increment
  const handleLikes = () => {
    // setLikes((prevLikes) => prevLikes + 1);
    setIsLiked(!isLiked);// Correctly increment likes
    // Additional logic for when an item is liked
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black bg-opacity-90">
      <div className="w-full h-full px-4 pt-4 pb-4 scrollable-hidden max-sm:h-auto max-sm:px-0 md:px-24 lg:px-40 md:pt-10 md:pb-10">
        <button
          onClick={onClose}
          className="absolute flex items-center justify-center text-white border-none rounded-full outline-none top-16 lg:left-24 md:left-12 max-sm:top-4 max-sm:left-5"
        >
          <i className="text-3xl fa-solid fa-xmark"></i>
        </button>
        <div className="w-full px-4 py-5 m-auto bg-white shadow modal-container rounded-2xl max-sm:rounded-none max-sm:py-3 max-sm:px-0 lg:px-10">
          <div className="flex flex-col items-center justify-between py-3 md:w-full max-sm:py-0 md:flex-row max-sm:px-4 md:px-4">
            <div className="items-center hidden gap-3 mb-4 md:w-1/2 lg:inline-flex md:mb-0">
              <div className="w-12 h-12 rounded-full ">
                <img
                  src={avatar}
                  className="object-cover w-full h-full rounded-full"
                  alt="avatar"
                ></img>
              </div>
              <p className="text-lg font-medium ">Jesse-Maurice Iyoha</p>
            </div>
            <div className="flex items-center justify-between lg:w-1/2 max-sm:w-full md:w-full">
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={handleCollection}
                  className="px-4 py-3 text-[#000000] font-semibold flex items-center justify-center gap-2 bg-transparent rounded-lg border-[1px] hover:border-[#bfbdbd]"
                >
                  <i className="fa-regular fa-bookmark"></i>
                  <span className="hidden lg:inline-block">
                    {isCollected ? "Collected" : "Collect"}
                  </span>
                </button>
                <button
                  onClick={handleLikes}
                  className="px-4 py-3 text-[#000000] font-semibold flex items-center justify-center gap-2 bg-transparent rounded-lg border-[1px] hover:border-[#bfbdbd]"
                >
                  <i
                    className={
                      isLiked
                        ? "fa-solid fa-heart text-red-500"
                        : "fa-regular fa-heart"
                    }
                  ></i>
                  <span className="hidden lg:inline-block">
                    {isLiked ? "Unlike" : "Like"} {likes}
                  </span>
                </button>
              </div>

              <button
                onClick={handleDownload}
                className="px-4 py-3 text-white bg-[#ef5350] rounded-lg hover:bg-[#de3e3b] ease-in-out duration-150 transition-shadow"
              >
                Free Download
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center w-full max-w-2xl p-4 mx-auto">
            <div className="w-full h-full">
              <img src={image.src} alt="Modal" className="w-full h-full" />
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center w-full gap-2">
              <i
                class="fa-solid fa-circle-check"
                style={{ color: "#acacae" }}
              ></i>
              <p>Free to use</p>
            </div>
            <div className="flex items-center justify-center w-full gap-3 py-8 max-sm:py-1">
              <button
                onClick={openImageDetailsModal}
                className="px-5 py-2 text-[#000000] flex items-center justify-center gap-2 bg-transparent rounded-lg border-2 hover:border-[#bfbdbd]"
              >
                <i
                  class="fa-solid fa-circle-info"
                  style={{ color: "#5c5c5c" }}
                ></i>
                <span className="hidden md:inline-block">More info</span>
              </button>
              <button className="px-5 py-2 text-[#000000] flex items-center justify-center gap-2 bg-transparent rounded-lg border-2 hover:border-[#bfbdbd]">
                <i
                  class="fa-solid fa-up-right-from-square"
                  style={{ color: "#5c5c5c" }}
                ></i>
                <span className="hidden md:inline-block">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {showDetailsModal && (
        <PhotoDetailsModal image={image} onClose={closeImageDetailsModal} />
      )}
    </div>
  );
}

export default ImageModal