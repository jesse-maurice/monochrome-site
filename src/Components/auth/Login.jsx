/* eslint-disable no-undef */
import React, { useState } from 'react';

import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import loginImg from '../../assets/images/IMG_4195.webp';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Await the response from signInWithEmailAndPassword
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");

      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="relative w-full h-screen bg-zinc-900/90">
        <img
          className="absolute object-cover w-full h-full mix-blend-overlay"
          src={loginImg}
          alt="/"
        />

        <div className="absolute inset-0 flex items-center justify-center h-full">
          <form
            className="max-w-[400px] rounded-xl w-full mx-auto bg-white p-8"
            onSubmit={handleSignUp}
          >
            <h2 className="py-4 text-4xl font-bold text-center font-high">
              MONOCHROME.
            </h2>
            <div className="flex flex-col mt-5 mb-4 font-semibold font-jakarta">
              <label>Email</label>
              <input
                className="relative p-2 bg-gray-100 rounded-lg border font-medium focus:outline-black text-[#7f7f7f] solid"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col font-semibold font-jakarta ">
              <label>Password</label>
              <input
                className="relative p-2 bg-gray-100 rounded-lg border font-medium focus:outline-black text-[#7f7f7f] solid"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full py-3 mt-8 bg-[#ef5350] font-semibold font-jakarta hover:bg-transparent hover:border-[3px] rounded-lg hover:border-[#ef5350] hover:text-[#ef5350] relative text-white"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
