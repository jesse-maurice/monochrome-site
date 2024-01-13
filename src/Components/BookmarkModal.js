import React, { useState } from 'react';

const BookmarkModal = () => {
  const [isBookmarkModalOpen, setBookmarkModalOpen] = useState(true);

  const closeBookmarkModal = () => {
    setBookmarkModalOpen(false);
  };



  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center overflow-hidden ${
        isBookmarkModalOpen ? "" : "hidden"
      }`}
    >
      <div className="scrollable-hidden relative w-[601px] h-[400px] bg-[#ffffff] rounded-lg py-10 px-12">
        <button
          onClick={closeBookmarkModal}
          className="absolute top-6 right-4 text-black flex items-center justify-center border-none outline-none"
        >
          <i
            class="fa-sharp fa-solid fa-xmark fa-xl"
            style={{ color: "#dfdfe0" }}
          ></i>
        </button>
        <div className=" flex content-center flex-col">
          <h1 className="text-center font-semibold text-[33px] text-[#2c343e]">
            Save to collection
          </h1>
          <div className=" w-[101px] mx-auto border-dotted border-b-2 border-[#c7c7c7]">
            <h2 className="text-center font-medium mt-3 text-base text-[#7f7f7f]">
              All collections
            </h2>
          </div>

          <div className="w-[152px] h-[153px] cursor-pointer transition ease-in delay-150 hover:translate-y-1 hover:scale-40 hover:bg-[#f7f7f7] duration-300 mt-7 flex items-center bg-[#f7f7f7] rounded-xl content-center justify-center bg-">
            <div className=" w-10 h-10 flex items-center justify-center border-2 rounded-full border-[#7f7f7f]">
              <i
                class="fa-sharp fa-solid fa-plus fa-xl"
                style={{ color: "#7f7f7f" }}
              ></i>
            </div>
          </div>
          <div className=" mt-2 w-[150px]">
            <p className=" font-medium text-base text-[#4a4a4a]  truncate">
              Create New Collection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookmarkModal