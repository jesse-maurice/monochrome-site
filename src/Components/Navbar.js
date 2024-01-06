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
      <div className=" w-full flex flex-row justify-between content-center px-10 max-sm:px-6 mt-3 z-50">
        <div className="flex flex-row items-center content-center mt-2 justify-center ">
          <span className=" rounded-se-2xl px-[5px] h-9 mr-3 text-center items-center font-tide text-2xl max-sm:text-[35px] bg-black text-[#ffffff]">
            m
          </span>
          <h1 className="font-bold text-xl font-tide max-sm:hidden tracking-wider ">
            {" "}
            MONOCHROME
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