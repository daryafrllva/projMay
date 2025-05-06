import React, { useState, useEffect, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';
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
import HederAuth from './components/Header/HederAuth/HederAuth.jsx';
import Instruction from './components/InstructionPage/InstructionPage';


import BinaryOptionsArticle from './components/BinaryOptionsArticle/BinaryOptionsArticle';
import TwoStat from "./components/BinaryOptionsArticle/TwoStat.jsx";

import Signal from "./components/Profile/signal";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
      <ToastContainer />
      <Loader isLoading={isLoading}>
        <Suspense fallback={<div>Loading...</div>}>
          {!noHeaderRoutes.includes(location.pathname) && (
              <>
                {isAuthenticated ? <HederAuth /> : <Header />}
                <div className="language-switcher">
                  <button onClick={() => changeLanguage('ru')}>RU</button>
                  <button onClick={() => changeLanguage('en')}>EN</button>
                </div>
              </>
          )}
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirm-email" element={<ConfirmEmail />} />
          <Route path="/activated-email" element={<ActivatedEmail />} />
          <Route path="/enter-id" element={<EnterId />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/history" element={<History />} />
          <Route path="/account" element={<Account />} />
          <Route path="/binary-options-guide" element={
            <>
              <main className="main-content">
                <BinaryOptionsArticle />
              </main>
              <Footer />
            </>
          } />
          <Route path="/TwoStat" element={
            <>
              <main className="main-content">
                <TwoStat />
              </main>
              <Footer />
            </>
          } />

          <Route path="/" element={
            <>
              <main className="main-content">
                <HomePage isAuthenticated={isAuthenticated} />
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
          <Route path="/instruction" element={
            <>
              <main className="main-content">
                <Instruction />
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
        </Suspense>
      </Loader>
    </div>
  );
};

export default App;