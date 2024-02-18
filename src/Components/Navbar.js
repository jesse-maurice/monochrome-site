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
        <Link to={user ? "/" : "/SignUp"}>
          <button
            className={`bg-[#ef5350] flex items-center justify-center text-white tracking-wider font-high px-[20px] outline-none mt-3 border-none max-sm:py-[7px] max-sm:px-[20px] max-sm:text-base transition ease-in delay-150 hover:translate-y-1 hover:scale-40 hover:bg-[#ef5350] duration-300 py-[10px] rounded-lg`}
            type="submit"
            onClick={user ? handleLogout : null}
          >
            {user ? "Sign Out" : "Join"}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
