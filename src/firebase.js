// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwOkpLGnYI3keKebVTfTiiWflqggX3_1E",
  authDomain: "monochrome-9c030.firebaseapp.com",
  projectId: "monochrome-9c030",
  storageBucket: "monochrome-9c030.appspot.com",
  messagingSenderId: "632530882293",
  appId: "1:632530882293:web:4c299e7e32b065c9b67fbc",
  measurementId: "G-CP2ZXPE1BP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
