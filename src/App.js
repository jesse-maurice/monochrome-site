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
      <Route path="/" element={<Main />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
