/* eslint-disable no-undef */
import React, { useState } from 'react';

import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

import loginImg from '../../assets/images/IMG_4195.png';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  //  const [error, setError] = useState("");
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
      navigate("/home");

      
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

        <div className="flex items-center justify-center h-full">
          <form
            className="...group max-w-[400px] w-full mx-auto bg-white p-8"
            onSubmit={handleSignUp}
            noValidate
          >
            <h2 className="py-4 text-4xl font-bold text-center font-tide">
              MONOCHROME.
            </h2>
            <div className="flex flex-col mt-5 mb-4">
              <label>Full Name</label>
              <input
                className="relative p-2 bg-gray-100 border"
                type="text"
                name="fullName"
                placeholder="full name"
                autoComplete="off"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="flex flex-col mt-5 mb-4">
              <label htmlFor="email" className="flex flex-col">
                <span>Email</span>
                <input
                  className="relative p-2 bg-gray-100 border ... invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  autoComplete="off"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="flex flex-col mb-4 ">
              <label className="flex flex-col" htmlFor="password">
                <span>Password</span>
                <input
                  className="relative p-2 bg-gray-100 border ... invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*******"
                  required
                  pattern=".{7,}"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              <button
                onClick={handleSignUp}
                type="submit"
                className="w-full py-3 mt-8 bg-[#ef5350] hover:bg-transparent hover:border-[3px] hover:border-[#ef5350] hover:text-[#ef5350] relative text-white
                ...group-invalid:pointer-events-none group-invalid:opacity-30"
              >
                Sign Up
              </button>
            </div>

            <p className="mt-8 text-center">
              Already a member? <Link to="/login">Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
