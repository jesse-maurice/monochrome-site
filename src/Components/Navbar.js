import React from 'react';

import { signOut } from 'firebase/auth';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

import { auth } from '../firebase';

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/SignUp');
  }




  return (
    <>
      <div className="z-10 flex flex-row items-center content-center justify-between w-full border-box px-44 max-sm:px-6 md:px-10 lg:px-10 xl:px-10 2xl:px-44">
        <div className="">
          <h1 className=" font-tide text-[50px] max-sm:text-[40px] text-[#ffffff]">
            m
          </h1>
        </div>
        <div className=" font-rale pt-[7px] text-lg font-semibold">
          <Link to={"/SignUp"}>
            <button
              className=" bg-[#ef5350] font-tide px-[20px] outline-none border-none max-sm:py-[7px] max-sm:px-[20px] max-sm:text-lg transition ease-in delay-150 hover:translate-y-1 hover:scale-40 hover:bg-[#ef5350] duration-300 py-[10px] rounded-lg"
              type="submit"
              onClick={handleLogout}
            >
              Join
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar