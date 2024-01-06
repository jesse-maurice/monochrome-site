import '../ImageGrid.css';

import React, {
  useEffect,
  useState,
} from 'react';

// Import your images
import image1 from '../asssets/images/Image 1.png';
import image10 from '../asssets/images/Image 10.png';
import image11 from '../asssets/images/Image 11.png';
import image12 from '../asssets/images/Image 12.png';
import image13 from '../asssets/images/Image 13.png';
import image14 from '../asssets/images/Image 14.png';
import image15 from '../asssets/images/Image 15.png';
import image16 from '../asssets/images/Image 16.png';
import image2 from '../asssets/images/Image 2.png';
import image3 from '../asssets/images/Image 3.png';
import image4 from '../asssets/images/Image 4.png';
import image5 from '../asssets/images/Image 5.png';
import image6 from '../asssets/images/Image 6.png';
import image7 from '../asssets/images/Image 7.png';
import image8 from '../asssets/images/Image 8.png';
import image9 from '../asssets/images/Image 9.png';

// Initialize your images array
const initialImages = [
  {
    src: image1,
    tag: ["nature", "landscape", "macro"],
  },
  {
    src: image2,
    tag: ["nature", "landscape", "macro"],
  },
  {
    src: image3,
    tag: ["nature", "landscape", "macro"],
  },
  {
    src: image4,
    tag: ["street", "work", "portrait"],
  },
  {
    src: image5,
    tag: ["street", "portrait", "work"],
  },
  {
    src: image6,
    tag: ["street", "building", "skyscraper"],
  },
  {
    src: image7,
    tag: ["tower", "sky", "clouds"],
  },
  {
    src: image8,
    tag: ["power", "sky", "tower"],
  },
  {
    src: image9,
    tag: ["street", "portrait", "engineer"],
  },
  {
    src: image10,
    tag: ["nature", "sunset", "wildlife"],
  },
  {
    src: image11,
    tag: ["street", "skyscraper", "building"],
  },
  {
    src: image12,
    tag: ["sky", "portrait", "street"],
  },
  {
    src: image13,
    tag: ["clouds", "sky", "lamp"],
  },
  {
    src: image14,
    tag: ["nature", "clouds", "street"],
  },
  {
    src: image15,
    tag: ["street", "skyscraper", "building"],
  },
  {
    src: image16,
    tag: ["street", "skyscraper", "building"],
  },
];


const ImageGrid = () => {
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    // Filter images based on searchValue
    const filteredImages = initialImages.filter((image) => {
      return image.tag.some((tag) =>
        tag.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    setFilteredImages(filteredImages);
  }, [searchValue]);

  

  return (
    <div className="grid-container px-4 lg:px-10 max-sm:px-4">
      <div className="flex flex-row content-center justify-between w-full">
        <h1 className="font-rale font-semibold text-2xl py-[60px] max-sm:hidden">
          Free Stock Photos
        </h1>
        <form className="py-[60px] w-full max-w-md">
          <div className="relative flex items-center">
            <i className="fa-solid absolute w-[13px] h-[13px] pointer-events-none ml-3 fa-magnifying-glass fa-beat-fade"></i>
            <input
              type="text"
              name="search"
              placeholder="Search Images..."
              autoComplete="off"
              className="w-full px-3 py-[10px] max-sm:py-[15px] pl-10 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
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
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-[20px] md:gap-[15px] max-sm:gap-[15px]">
          {filteredImages.map((image, index) => (
            <li key={index} className="relative cursor-pointer">
              <img
                src={image.src}
                alt={`street${index + 1}`}
                className="w-auto h-auto cursor-pointer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-300"></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default ImageGrid;
