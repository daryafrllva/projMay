import React from 'react';
import './App.less';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import HomePage from './components/HomePage/HomePage';

const App = () => {

  return (
    <div className="app">

        <Loader>

          <>
            <Header />
            <main className="main-content">
              <HomePage />
            </main>
            <Footer />
          </>
        </Loader>
    </div>
  );
};

export default App;