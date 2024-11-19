import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from './components/GlobalStyles';
import Menu from './components/Menu';
import Measurements from './pages/Measurements';
import Admin from './pages/Admin';
import DetailsDevices from './components/DetailsDevices';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import NewPassword from './pages/NewPassword';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import AuthProvider from './components/AuthContext'; 
import ContactButton from './components/ContactButton';

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyles />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<PublicRoute element={<Login />} />} />
          <Route path="/cadastro" element={<PublicRoute element={<Register />} />} />
          <Route path="/reset-password" element={<PublicRoute element={<ResetPassword />} />} />
          <Route path="/reset-password/:token" element={<PublicRoute element={<NewPassword />} />} />
          <Route path="/medidas" element={<PrivateRoute element={<Measurements />} />} />
          <Route path="/medidas/:id" element={<PrivateRoute element={<DetailsDevices />} />} />
          <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
        </Routes>
        <ContactButton /> 
      </Router>
    </AuthProvider>
  );
}

export default App;
