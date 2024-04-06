import React, {
  useEffect,
  useState,
} from 'react';

import {
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

import { auth } from '../firebase';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const toggleDotDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleExploreDropdown = () => {
    setIsExploreOpen(!isExploreOpen);
  };

  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/SignUp");
  };

  return (
    <>
      <div className="z-10 flex flex-row items-center content-center justify-between w-full border-box px-44 max-sm:px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-44">
        <h1 className="font-high text-[50px] max-sm:text-[40px] text-[#ffffff]">
          m
        </h1>
        <div className="flex font-sans items-center lg:gap-8 2xl:gap-8 max-sm:gap-4 md:gap-4">
          <div
            className="flex items-center gap-2 relative max-sm:hidden md:hidden lg:inline-flex 2xl:inline-flex"
            onClick={toggleExploreDropdown}
          >
            <p className=" text-lg text-white cursor-pointer hover:text-gray-300">
              Explore
            </p>
            <i
              className={`fa-solid fa-angle-down fa-xs mt-1 cursor-pointer ${
                isExploreOpen ? "rotate-180" : ""
              }`}
              style={{ color: "#ffffff" }}
            ></i>
            {isExploreOpen && (
              <div className="absolute -right-6 top-12 w-44 bg-white rounded-lg shadow-lg z-20">
                <div className="tooltip-arrow"></div>
                <div className="py-2 w-full flex flex-col font-sans font-medium">
                  <a
                    href="/"
                    className=" px-4 py-2 flex items-start text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Discover Photos
                  </a>
                  <a
                    href="/"
                    className="px-4 py-2 flex items-start text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Popular searches
                  </a>
                  <a
                    href="/"
                    className="px-4 py-2 flex items-start text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Leaderboard
                  </a>
                  <a
                    href="/"
                    className="px-4 py-2 flex items-start text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Challenges
                  </a>
                  <a
                    href="/"
                    className="px-4 py-2 flex items-start text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Blog
                  </a>
                </div>
              </div>
            )}
          </div>
          <p className=" text-lg text-white cursor-pointer max-sm:hidden md:hidden lg:inline-flex 2xl:inline-flex hover:text-gray-300">
            Upload
          </p>
          <div className="relative max-sm:hidden md:hidden lg:inline-flex 2xl:inline-flex">
            <i
              className="fa-solid fa-ellipsis cursor-pointer text-white"
              style={{ color: "#ffffff" }}
              onClick={toggleDotDropdown}
            ></i>
            {isOpen && (
              <div className="absolute -right-6 mt-10 w-44 bg-white rounded-lg shadow-lg z-20">
                <div className="tooltip-arrow"></div>
                <div className="py-2 w-full flex flex-col font-sans font-medium">
                  <a
                    href="/"
                    className=" px-4 py-2 flex items-start text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Login
                  </a>
                  <div className="w-full h-[1px] bg-gray-100"></div>
                  <a
                    href="/"
                    className="px-4 py-2 flex items-start text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Join
                  </a>
                  <a
                    href="/"
                    className="px-4 py-2 flex items-start text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Image & Video API
                  </a>
                  <a
                    href="/"
                    className="px-4 py-2 flex items-start text-sm text-gray-700 hover:bg-gray-100"
                  >
                    FAQ
                  </a>
                  <a
                    href="/"
                    className="px-4 py-2 flex items-start text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Partnerships
                  </a>
                  <div className="w-full h-[1px] bg-gray-100"></div>
                  <div className="w-full flex items-center gap-4 px-4 py-2">
                    <a
                      target="_blank"
                      href="https://twitter.com/i_am_monochrome"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/i.am.monochrome/"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to={user ? "/" : "/SignUp"}>
            <button
              className={`bg-[#ef5350] flex items-center justify-center text-white tracking-wider px-[16px] font-light outline-none border-none max-sm:py-[7px] max-sm:px-[20px] max-sm:text-base md:text-lg transition ease-in delay-150 hover:translate-y-1 hover:scale-40 hover:bg-[#ef5350] duration-300 py-[10px] rounded-lg`}
              type="submit"
              onClick={user ? handleLogout : null}
            >
              {user ? "Sign Out" : "Join"}
            </button>
          </Link>
          <i
            className="fa-solid fa-bars fa-lg lg:hidden 2xl:hidden"
            style={{ color: "#ffffff" }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
