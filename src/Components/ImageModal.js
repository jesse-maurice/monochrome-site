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
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center overflow-hidden">
      <div className="scrollable-hidden w-full h-full max-sm:h-auto px-4 max-sm:px-0 md:px-24 lg:px-40 pt-4 pb-4 md:pt-10 md:pb-10">
        <button
          onClick={onClose}
          className="absolute top-16 lg:left-24 md:left-12 max-sm:top-2 max-sm:left-5 text-white flex items-center justify-center border-none rounded-full outline-none"
        >
          <i className="fa-solid fa-xmark text-3xl"></i>
        </button>
        <div className="modal-container bg-white rounded-2xl max-sm:rounded-none shadow py-5 max-sm:py-3 px-4 max-sm:px-0 lg:px-10 w-full m-auto">
          <div className="md:w-full py-3 max-sm:py-0 flex flex-col md:flex-row max-sm:px-4 md:px-4 justify-between items-center">
            <div className="md:w-1/2 items-center hidden lg:inline-flex mb-4 md:mb-0 gap-3">
              <div className=" w-12 h-12 rounded-full ">
                <img
                  src={avatar}
                  className="w-full h-full object-cover rounded-full"
                  alt="avatar"
                ></img>
              </div>
              <p className=" font-medium text-lg">Jesse-Maurice Iyoha</p>
            </div>
            <div className="lg:w-1/2 max-sm:w-full md:w-full flex items-center justify-between">
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
          <div className="w-full flex p-4 justify-center items-center mx-auto max-w-2xl">
            <div className="w-full h-full">
              <img src={image.src} alt="Modal" className="w-full h-full" />
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center gap-2 justify-center">
              <i
                class="fa-solid fa-circle-check"
                style={{ color: "#acacae" }}
              ></i>
              <p>Free to use</p>
            </div>
            <div className="w-full py-8 flex items-center justify-center gap-3">
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