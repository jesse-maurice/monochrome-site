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

const Upload = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
    <div className="flex flex-col w-full h-screen font-sans">
      <header className="z-10 flex flex-row items-center border-b-[1px] border-b-gray-200 content-center justify-between w-full pt-1 pb-2 border-box px-44 max-sm:px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-44">
        <h1 className="font-high text-[50px] max-sm:text-[40px] text-[#000000]">
          m
        </h1>
        <Link to={user ? "/" : "/SignUp"}>
          <button
            className={`bg-[#ef5350] flex items-center justify-center text-white tracking-wider px-[16px] font-light outline-none border-none max-sm:py-[7px] max-sm:px-[20px] max-sm:text-base md:text-lg transition ease-in delay-150 hover:translate-y-1 hover:scale-40 hover:bg-[#ef5350] duration-300 py-[10px] rounded-lg`}
            type="submit"
            onClick={user ? handleLogout : null}
          >
            {user ? "Sign Out" : "Login"}
          </button>
        </Link>
      </header>
      <main className="grid grid-cols-2 gap-10 mb-28 w-full mt-[76px] px-44 max-sm:px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-44">
        <div className="border-2 border-red-500 main-description">
          <h1 className=" font-semibold text-[#2c343e] text-[33px] leading-[40px] -tracking-[0.7px]">
            Afrocentric stock imagery to fuel your business initiatives and
            ignite artistic innovation.
          </h1>
          <p className=" text-[23px] mt-3 mb-6 text-[#2c343e] font-semibold leading-[36px] -tracking-[0.3px]">
            Upload your photos and videos to one of the internet's most
            expansive repositories of visual content, free of charge.
          </p>
          <ul className=" text-lg font-semibold leading-[28px] text-[#7f7f7f]">
            <li className="flex items-center gap-2">
              <i
                class="fa-solid fa-check fa-lg"
                style={{ color: "#ef5350" }}
              ></i>
              Reach a global audience of more than{" "}
              <span className="text-lg leading-[28px] text-[#4a4a4a] font-bold">
                30 million
              </span>
            </li>
            <li className="flex items-center gap-2 my-1">
              <i
                class="fa-solid fa-check fa-lg"
                style={{ color: "#ef5350" }}
              ></i>
              Help creative people all over the world bring their ideas to life
            </li>
            <li className="flex items-center gap-2">
              <i
                class="fa-solid fa-check fa-lg"
                style={{ color: "#ef5350" }}
              ></i>
              Reach a global audience of more than 30 million.
            </li>
          </ul>
        </div>
        <div className="border-2 border-red-500 main-image"></div>
      </main>
    </div>
  );
}

export default Upload