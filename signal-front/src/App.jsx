import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.less';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import About from './components/About/About';

const Home = () => (
    <main className="main-content">
      <h1>Welcome to MyApp</h1>
      <p>This is a React application with Vite and Less styles</p>
    </main>
);

const App = () => {
  return (
      <Router>
        <div className="app">
          <Loader>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </Loader>
        </div>
      </Router>
  );
};

export default App;