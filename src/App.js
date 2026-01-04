import './App.css';

import {
  Route,
  Routes,
} from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import Login from './Components/auth/Login';
import SignUp from './Components/auth/SignUp';
import Main from './Components/Main';
import Upload from './Components/Upload';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
