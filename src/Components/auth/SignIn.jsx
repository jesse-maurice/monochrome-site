import 'firebase/compat/auth';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import loginImg from '../../asssets/images/IMG_4195.png';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

     // Check if the entered credentials are correct
    if (email === 'user@example.com' && password === '1Password') {
      // Authentication is successful, you can set a user as authenticated and perform the necessary actions here.
      // For example, redirect to a protected page.
      setError("");
      // Redirect to the login page or perform any other actions you need
      navigate('/home'); // Redirect to the login page
    } else {
      // Authentication failed, show an error message
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <>
      <div className="relative w-full h-screen bg-zinc-900/90">
        <img
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={loginImg}
          alt="/"
        />

        <div className="flex justify-center items-center h-full">
          <form className="max-w-[400px] w-full mx-auto bg-white p-8" onSubmit={handleLogin}>
            <h2 className="text-4xl font-bold font-tide text-center py-4">
              MONOCHROME.
            </h2>
            <div className="flex flex-col mb-4 mt-5">
              {error && <p style={{ color: "red" }}>{error}</p>}
                <label>Username</label>
                <input
                  className="border relative bg-gray-100 p-2"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="flex flex-col ">
                <label>Password</label>
                <input
                  className="border relative bg-gray-100 p-2"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}
                  type="submit"
                  className="w-full py-3 mt-8 bg-[#ef5350] hover:bg-transparent hover:border-[3px] hover:border-[#ef5350] hover:text-[#ef5350] relative text-white"
                >
                  Login
                </button>
            </div>

            <p className="flex items-center mt-2">
              <input className="mr-2" type="checkbox" />
              Remember Me
            </p>
            <p className="text-center mt-8">Not a member? Sign up now</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
