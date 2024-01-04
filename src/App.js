import './App.css';

import {
  Route,
  Routes,
} from 'react-router-dom';

import Login from './Components/auth/Login';
import SignUp from './Components/auth/SignUp';
import Main from './Components/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Main />} />
    </Routes>
  );
}

export default App;
