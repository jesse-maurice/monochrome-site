import {
  React,
  useState,
} from 'react';

import avatar
  from '../asssets/images/WhatsApp Image 2022-11-01 at 22.39.49_eb25e570.jpg';

const ImageModal = ({ image, onClose }) => {
  const [isCollected, setIsCollected] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  if (!image) return null;

  const handleDownload = () => {
    fetch(image.src)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = getFileNameFromUrl(image.src); // You'll need to define this function
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch((err) => console.error("Download failed", err));
  };

  // Utility function to extract file name from URL
  function getFileNameFromUrl(url) {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 1];
  }

  // Handle collection toggle
  const handleCollection = () => {
    setIsCollected(!isCollected);
    // Additional logic for when an item is collected or uncollected
  };

  // Handle likes increment
  const handleLikes = () => {
    setLikes((prevLikes) => prevLikes + 1);
    setIsLiked(!isLiked);// Correctly increment likes
    // Additional logic for when an item is liked
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-90 flex justify-center items-center md:items-start px-4 max-sm:px-0 md:px-24 lg:px-32 pt-4 pb-4 md:pt-10 md:pb-10">
      <button
        onClick={onClose}
        className="absolute top-20 lg:left-16 md:left-12 max-sm:top-5 max-sm:left-5  text-white flex items-center justify-center border-none rounded-full outline-none"
      >
        <i className="fa-solid fa-xmark text-3xl"></i>
      </button>
      <div className="bg-white rounded-2xl max-sm:rounded-none shadow py-5 max-sm:py-3 px-4 max-sm:px-2 lg:px-10 w-full m-auto">
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
                className="p-4 text-[#000000] font-semibold flex items-center justify-center gap-2 bg-transparent rounded-lg border-2 hover:border-[#bfbdbd]"
              >
                <i className="fa-regular fa-bookmark"></i>
                <span className="hidden lg:inline-block">
                  {isCollected ? "Collected" : "Collect"}
                </span>
              </button>
              <button
                onClick={handleLikes}
                className="p-4 text-[#000000] font-semibold flex items-center justify-center gap-2 bg-transparent rounded-lg border-2 hover:border-[#bfbdbd]"
              >
                <i
                  className={
                    isLiked
                      ? "fa-solid fa-heart text-red-500"
                      : "fa-regular fa-heart"
                  }
                ></i>
                <span className="hidden lg:inline-block">Like {likes}</span>
              </button>
            </div>

            <button
              onClick={handleDownload}
              className="px-4 py-2 text-white bg-[#ef5350] rounded-lg hover:bg-[#de3e3b] ease-in-out duration-150 transition-shadow"
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
            <button className="px-5 py-2 text-[#000000] flex items-center justify-center gap-2 bg-transparent rounded-lg border-2 hover:border-[#bfbdbd]">
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
  );
}

export default ImageModal