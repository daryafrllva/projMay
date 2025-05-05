import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import History from './components/Profile/history';
import Account from './components/Profile/account';
import Wiki from "./components/Wiki/WikiPage.jsx";
import Signal from "./components/Profile/signal";

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const noHeaderRoutes = ['/login', '/register', '/confirm-email', '/forgot-password', '/activated-email','/enter-id'];

  return (
    <div className="app">
      <Loader>
      <ToastContainer />
        {!noHeaderRoutes.includes(location.pathname) && <Header />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirm-email" element={<ConfirmEmail />} />
          <Route path="/activated-email" element={<ActivatedEmail />} />
          <Route path="/enter-id" element={<EnterId />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/account" element={<Account />} />
          <Route path="/" element={
            <>
              <main className="main-content">
                <HomePage />
              </main>
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <main className="main-content">
                <About />
              </main>
              <Footer />
            </>
          } />
          <Route path="/Wiki" element={
            <>
              <main className="main-content">
                <Wiki />
              </main>
              <Footer />
            </>
          } />
          <Route path="/signal" element={
            <>
              <main className="main-content">
                <Signal />
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </Loader>
    </div>
  );
};

export default App;