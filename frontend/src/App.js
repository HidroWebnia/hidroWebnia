import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from './components/GlobalStyles';
import Menu from './components/Menu';
import Measurements from './pages/Measurements';
import Admin from './pages/Admin';
import Messages from './pages/Messages';
import DetailsDevices from './components/DetailsDevices';
import { Login, Signup } from './components/authentication/Authentication';
import DeviceData from './components/DeviceData';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medidas" element={<Measurements />} />
        <Route path="/medidas/:id" element={<DetailsDevices />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/mensagens" element={<Messages />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
