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
      <div className=" w-full flex flex-row justify-between content-center px-20 max-sm:px-8 pb-2">
        <div className="flex flex-row content-center mt-2 justify-center ">
          <span className=" rounded-se-2xl px-[5px] h-9 mr-[6px] text-center items-center font-tide text-2xl max-sm:text-[35px] bg-black text-[#ffffff]">
            m
          </span>
          <h1 className="font-bold text-xl mt-[3px] font-tide max-sm:hidden ">
            {" "}
            MONOCHROME.
          </h1>
        </div>
        <div className=" font-rale pt-[7px] text-lg font-semibold">
            <button
              className=" bg-[#ef5350] font-tide px-[30px] hover:border-[3px] max-sm:py-[7px] max-sm:px-[20px] max-sm:text-lg hover:border-black transition duration-300 ease-in-out py-[10px] rounded-lg"
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