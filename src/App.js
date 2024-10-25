import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Routes/Login';
import Homepage from './Routes/Homepage';
import AsesorRegister from './Routes/AsesorRegister';
import AgenteRegister from './Routes/AgenteRegister';
import Register from './Routes/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/asesor" element={<AsesorRegister />} />
        <Route path="/register/agente" element={<AgenteRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
