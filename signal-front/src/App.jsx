import React, { useState, useEffect } from 'react';
import './App.less';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main className="main-content">
            <h1>Welcome to MyApp</h1>
            <p>This is a React application with Vite and Less styles</p>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;