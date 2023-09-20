import './App.css';

import {
  Route,
  Routes,
} from 'react-router-dom';

import SignIn from './Components/auth/SignIn';
import Main from './Components/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/Login" element={<SignIn />} />
      <Route path="/home" element={<Main />} />
    </Routes>
  );
}

export default App;
