import React, { useState } from 'react';

import {
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

import loginImg from '../../assets/images/IMG_4195.webp';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    // Check if the email contains 'test'
    if (email.toLowerCase().includes("test")) {
      setError("Sign up with a valid email address");
      return; // Exit the function
    }

    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(
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
      // Custom error messages based on Firebase error codes
      switch (error.code) {
        case "auth/invalid-email":
          setError("The email address is not valid.");
          break;
        case "auth/email-already-in-use":
          setError("This email address is already in use.");
          break;
        case "auth/weak-password":
          setError("The password is too weak.");
          break;
        default:
          setError("An unexpected error occurred. Please try again.");
      }
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
            className="max-w-[400px] w-full mx-auto bg-white p-8"
            onSubmit={handleSignUp}
            noValidate
          >
            <h2 className="py-4 text-4xl font-bold text-center font-tide">
              MONOCHROME.
            </h2>

            {/* Error Message */}
            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="flex flex-col mt-5 mb-4">
              <label>Full Name</label>
              <input
                className="relative p-2 bg-gray-100 border focus:outline-black font-light text-[#7f7f7f] solid"
                type="text"
                name="fullName"
                placeholder="full name"
                autoComplete="off"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col mt-5 mb-4">
              <label htmlFor="email">Email</label>
              <input
                className="relative p-2 bg-gray-100 border font-light focus:outline-black text-[#7f7f7f] solid"
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col mb-4">
              <label htmlFor="password">Password</label>
              <input
                className="relative p-2 bg-gray-100 border font-light text-[#7f7f7f] focus:outline-black solid"
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                required
                pattern=".{7,}"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 mt-8 bg-[#ef5350] hover:bg-[#be4341] text-white"
            >
              Sign Up
            </button>

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
