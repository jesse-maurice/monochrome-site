import '../Components/ImageModal';
import 'react-lazy-load-image-component/src/effects/blur.css';

import React, {
  useEffect,
  useState,
} from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import ImageModal from '../Components/ImageModal';
import imageList from '../server/images.json';
import BookmarkModal from './BookmarkModal';

// Function to import all images dynamically
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// Import images from the directory
const images = importAll(require.context('../assets/images', false, /\.(webp|jpe?g|svg)$/));
;


const ImageGrid = () => {
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [filteredImages, setFilteredImages] = useState(imageList);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showBookmarkModal, setShowBookmarkModal] = useState(false);
  const [likes, setLikes] = useState({});

  // Function to toggle bookmark modal
  const toggleBookmarkModal = (e) => {
    e.preventDefault(); // Prevent any default action
    e.stopPropagation(); // Stop the event from bubbling up
    setShowBookmarkModal(!showBookmarkModal);
  };


  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    // Simulate loading for 2 seconds
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup function to clear the timeout when component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    // Filter images based on searchValue
    const filtered = imageList
      .filter((image) =>
        image.tag.some((tag) =>
          tag.toLowerCase().includes(searchValue.toLowerCase())
        )
      )
      .map((image) => ({
        ...image,
        src: images[image.src], // Update the src to the imported image
      }));
    setFilteredImages(shuffleArray(filtered));
  }, [searchValue]);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const toggleLike = (index) => {
    setLikes((prevLikes) => {
      // Copy the current likes state
      const newLikes = { ...prevLikes };

      // Toggle the like status for the specific image
      newLikes[index] = !newLikes[index];

      return newLikes;
    });
  };


  // Function to toggle bookmark modal

  return (
    <div className="px-4 grid-container lg:px-10 max-sm:px-4 md:px-10 xl:px-10 2xl:px-44">
      <div className="flex py-[40px] lg:py-[60px] flex-row content-center justify-between w-full">
        <h1 className="font-sans text-2xl font-medium max-sm:hidden">
          Free Stock Photos
        </h1>
        <form className="w-full max-sm:max-w-md lg:max-w-lg md:max-w-sm">
          <div className="relative flex items-center">
            <i className="fa-solid absolute w-[13px] h-[13px] pointer-events-none ml-3 fa-magnifying-glass fa-beat-fade"></i>
            <input
              type="text"
              name="search"
              placeholder="Search Images..."
              autoComplete="off"
              className="w-full px-3 py-[10px] max-sm:py-[15px] pl-10 font-medium placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 font-sans"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            ></input>
          </div>
        </form>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-[30px] md:gap-[20px] max-sm:gap-[25px]">
          {Array.from({ length: 16 }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="w-full bg-gray-300 rounded-lg h-60"></div>
            </div>
          ))}
        </div>
      ) : (
        <ResponsiveMasonry>
          <Masonry columnsCount={3} gutter={15}>
            {filteredImages.map((image, index) => (
              <li
                key={index}
                className="relative list-none cursor-pointer "
                onClick={() => openModal(image)}
              >
                <LazyLoadImage
                  src={image.src}
                  alt={`frame${index}`}
                  className="w-auto h-auto cursor-pointer"
                  // loading="lazy"
                />
                <div className="absolute inset-0 transition-opacity duration-300 bg-black bg-opacity-0 hover:bg-opacity-10">
                  <div className="flex items-center w-full h-full gap-2 transition-opacity duration-300 opacity-0 hover:opacity-100">
                    <button
                      onClick={toggleBookmarkModal}
                      className="px-4 py-3 absolute top-3 right-[78px] text-[#000000] bg-white font-semibold flex items-center justify-center gap-2 bg-transparent rounded-lg border-[1px] hover:border-[#bfbdbd]"
                    >
                      <i className="fa-regular fa-bookmark"></i>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(index);
                      }}
                      className="px-4 py-3 text-[#000000] absolute top-3 right-5 bg-white font-semibold flex items-center justify-center gap-2 bg-transparent rounded-lg border-[1px] hover:border-[#bfbdbd]"
                    >
                      <i
                        className={
                          likes[index]
                            ? "fa-solid fa-heart text-red-500 heart-pulse"
                            : "fa-regular fa-heart"
                        }
                      ></i>
                    </button>

                    <a
                      href={image.src}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center font-medium absolute bottom-5 right-5 max-sm:bg-transparent md:bg-[#ffffff] max-sm:text-[#ffffff] md:text-black md:rounded-lg md:py-3 md:px-3 md:hover:bg-[#ffffff] lg:bg-[#ef5350] lg:hover:bg-[#c85655] max-sm:hover:bg-[#ffffff]  max-sm:hover:text-black max-sm:hover:rounded-lg max-sm:hover:px-3 max-sm:hover:py-3 lg:py-2 lg:px-3 lg:rounded-xl content-center justify-center gap-2 lg:text-[#ffffff]"
                    >
                      <i class="fa-solid fa-download"></i>
                      <span className="hidden lg:inline">Download</span>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
      <ImageModal image={selectedImage} onClose={closeModal} />
      {showBookmarkModal && <BookmarkModal />}
    </div>
  );
};


export default ImageGrid;
