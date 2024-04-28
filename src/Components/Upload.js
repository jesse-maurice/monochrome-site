import React, {
  useEffect,
  useState,
} from 'react';

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

import google from '../assets/images/Google_Icons-09-512.webp';
import imageList from '../server/images.json';

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};


const images = importAll(require.context('../assets/images', false, /\.(webp|jpe?g|svg)$/));
;

const Upload = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

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
      navigate("/");
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


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Function to switch to the next image index
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval
  }, []);

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
    <div className="flex flex-col w-full h-full font-jakarta">
      <header className="z-10 flex flex-row bg-white items-center sticky top-0 border-b-[1px] border-b-gray-100 content-center justify-between w-full pt-1 pb-2 border-box px-44 max-sm:px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-44">
        <Link to={"/"}>
          <h1 className="font-high text-[50px] max-sm:text-[40px] text-[#000000]">
            m
          </h1>
        </Link>

        <Link to={user ? "/" : "/SignUp"}>
          <button
            className={`bg-[#ef5350] flex items-center justify-center text-white px-[16px] font-jakarta font-semibold outline-none border-none max-sm:py-[7px] max-sm:px-[20px] max-sm:text-base md:text-[15px] leading-[19.5px] -tracking-[0.2px] transition ease-in delay-150 hover:translate-y-1 hover:scale-40 hover:bg-[#ef5350] duration-300 py-[10px] rounded-lg`}
            type="submit"
            onClick={user ? handleLogout : null}
          >
            {user ? "Sign Out" : "Login"}
          </button>
        </Link>
      </header>
      <main className="grid w-full grid-cols-2 gap-10 mt-8 lg:mt-5 px-44 max-sm:px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-0 max-w-[1441px] mx-auto">
        <div className=" main-description">
          <h1 className=" font-semibold text-[#2c343e] lg:text-[27px] 2xl:text-[33px] leading-[40px] lg:-tracking-[0.5px] 2xl:-tracking-[0.7px]">
            Afrocentric stock imagery to fuel your business initiatives and
            ignite artistic innovation.
          </h1>
          <p className=" 2xl:text-[23px] mt-3 mb-4 text-[#2c343e] font-semibold 2xl:leading-[36px] 2xl:-tracking-[0.3px] lg:text-[19px] lg:leading-[30px] lg:-tracking-[0.4px]">
            Upload your photos and videos to one of the internet's most
            expansive repositories of visual content, free of charge.
          </p>
          <ul className=" 2xl:text-[18px] font-semibold 2xl:leading-[28px] lg:text-[15px] lg:leading-[26px] text-[#7f7f7f]">
            <li className="flex items-center gap-2">
              <i
                class="fa-solid fa-check fa-lg"
                style={{ color: "#ef5350" }}
              ></i>
              <p>
                <span>Reach a global audience of more than</span>
                <span className="text-[#4a4a4a] font-bold"> 30 million</span>
              </p>
            </li>
            <li className="flex items-center gap-2 my-1">
              <i
                class="fa-solid fa-check fa-lg"
                style={{ color: "#ef5350" }}
              ></i>
              <p>
                <span className=" text-[#4a4a4a] font-bold">
                  Help creative people all over the world
                </span>
                <span> bring their ideas to life</span>
              </p>
            </li>
            <li className="flex items-center gap-2">
              <i
                class="fa-solid fa-check fa-lg"
                style={{ color: "#ef5350" }}
              ></i>
              <p>
                <span>Join more than 320K</span>
                <span className=" text-[#4a4a4a] font-bold">
                  {" "}
                  incredibly talented photographers
                </span>
              </p>
            </li>
          </ul>

          <div className="flex items-center justify-center w-full gap-4 mt-5">
            <button
              type=""
              className="flex w-full items-center justify-center google text-lg leading-[28px] -tracking-[0.2px] font-semibold text-[#2c343e] border-[1px] border-gray-300 hover:border-gray-400 rounded-md py-1 hover:bg-gray-100"
            >
              <img className="w-9 h-9 " src={google} alt="google icon"></img>
              Join with Google
            </button>
            <button
              className="apple px-3 py-[10px] border-[1px] border-gray-300 rounded-md hover:bg-[#000000]"
              type=""
            >
              <i className="fa-brands fa-apple fa-xl text-[#4a4a4a] hover:text-[#ffffff] "></i>
            </button>
          </div>
          <div className="flex items-center justify-center w-full lg:my-4 2xl:my-7">
            <hr className="w-full border-gray-100 "></hr>
            <p className="w-full 2xl:text-[16px] lg:text-[14px] text-center font-semibold leading-[26px] text-[#7f7f7f]">
              Or, sign up with email
            </p>
            <hr className="w-full border-gray-100"></hr>
          </div>
          <div className="w-full">
            {/* Error Message */}
            {error && <p className="text-center text-red-500">{error}</p>}
            <form onSubmit={handleSignUp} noValidate>
              <div className="grid w-full grid-cols-2 gap-2 ">
                <div className="">
                  <input
                    className="relative w-full rounded-md pl-5 py-3 text-[18px] leading-[28px] border-[1px] font-normal text-[#7f7f7f] border-gray-300 outline-none"
                    type="text"
                    name="firstName"
                    autoComplete="off"
                    value={firstName}
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>
                <div className="">
                  <input
                    className="relative w-full rounded-md pl-5 py-3 text-[18px] leading-[28px] border-[1px] font-normal text-[#7f7f7f] border-gray-300 outline-none"
                    type="text"
                    name="lastName"
                    autoComplete="off"
                    value={lastName}
                    placeholder="Last name"
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="my-3 ">
                <input
                  className="relative w-full rounded-md pl-5 py-3 text-[18px] leading-[28px] border-[1px] font-normal text-[#7f7f7f] border-gray-300 outline-none"
                  type=""
                  name=""
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div>
                <input
                  className="relative w-full rounded-md pl-5 py-3 text-[18px] leading-[28px] border-[1px] font-normal text-[#7f7f7f] border-gray-300 outline-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                  pattern=".{7,}"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <button
                className="w-full py-[13px] 2xl:text-[16px] font-semibold 2xl:leading-[20.8px] lg:text-[15px] lg:leading-[19.5px] -tracking-[0.2px] hover:bg-white hover:text-[#000000] hover:border-[1px] hover:border-gray-500 mt-8 bg-black rounded-md text-[#ffffff]"
                type="Submit"
              >
                Start sharing your content on Monochrome
              </button>
            </form>
          </div>
        </div>
        <div className="relative flex items-center justify-center main-image rounded-2xl">
          <div className="absolute top-0 left-0 w-full h-full shadow-inner image-wraper border-box">
            <LazyLoadImage
              src={images[imageList[currentIndex].src]}
              alt={`frame${currentIndex}`}
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
        </div>
        <p className="text-center text-[14px] leading-[22px] -mt-5 font-medium text-[#7f7f7f] ">
          By joining, you agree to our{" "}
          <span className="underline decoration-dotted decoration-2 underline-offset-4 decoration-[#7f7f7f]">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="underline decoration-dotted decoration-2 underline-offset-4 decoration-[#7f7f7f]">
            Privacy Policy
          </span>
        </p>
      </main>
    </div>
  );
}

export default Upload