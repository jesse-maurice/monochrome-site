import React from 'react';

import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../firebase';

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  }




  return (
    <>
      <div className=" w-full border-box flex flex-row justify-between items-center content-center px-44 max-sm:px-6 md:px-10 lg:px-10 xl:px-10 2xl:px-44 z-10">
        <div className=" ">
          <h1 className=" font-tide text-[50px] max-sm:text-[40px] text-[#ffffff]">
            m
          </h1>
        </div>
        <div className=" font-rale pt-[7px] text-lg font-semibold">
          <button
            className=" bg-[#ef5350] font-tide px-[30px] outline-none border-none max-sm:py-[7px] max-sm:px-[20px] max-sm:text-lg transition ease-in delay-150 hover:translate-y-1 hover:scale-40 hover:bg-[#ef5350] duration-300 py-[10px] rounded-lg"
            type="submit"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar