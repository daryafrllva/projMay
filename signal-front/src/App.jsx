import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Vxod/Login';
import Register from './components/Vxod/Register';
import ConfirmEmail from './components/Vxod/confirm-email';
import ForgotPassword from './components/Vxod/forgot-password';
import ActivatedEmail from './components/Vxod/activated-email';
import EnterId from './components/Vxod/enter-id';
const App = () => {

  return (
    <Router>
      <div className="app">
        <Loader>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            <Route path="/activated-email" element={<ActivatedEmail />} />
            <Route path="/enter-id" element={<EnterId />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/" element={
              <>
                <Header />
                <main className="main-content">
                  <HomePage />
                </main>
                <Footer />
              </>
            } />
            <Route path="/about" element={
              <>
                <Header />
                <main className="main-content">
                  <About />
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </Loader>
      </div>
    </Router>
);
};

export default App;