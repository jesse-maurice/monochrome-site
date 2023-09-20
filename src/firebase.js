import 'firebase/compat/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8QZTrAnOGxgZ5WkG7uNPbQ2afpuFpTvI",
  authDomain: "monochrome-image-gallery.firebaseapp.com",
  projectId: "monochrome-image-gallery",
  storageBucket: "monochrome-image-gallery.appspot.com",
  messagingSenderId: "1067636627093",
  appId: "1:1067636627093:web:69d0113105af5e15aaed9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

