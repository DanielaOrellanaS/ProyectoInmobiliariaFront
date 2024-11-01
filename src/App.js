import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Routes/Login';
import Homepage from './Routes/Homepage';
import AsesorRegister from './Routes/AsesorRegister';
import ConstructoraRegister from './Routes/ConstructoraRegister';
import Register from './Routes/Register';
import Profile from './Routes/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/asesor" element={<AsesorRegister />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
