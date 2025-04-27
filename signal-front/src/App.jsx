import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.less';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';

const App = () => {

  return (
      <Router>
        <div className="app">
          <Loader>
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <Footer />
          </Loader>
        </div>
      </Router>
  );
};

export default App;