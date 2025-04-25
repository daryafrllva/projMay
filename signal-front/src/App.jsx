import React from 'react';
import './App.less';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

const App = () => {

  return (
    <div className="app">

        <Loader>

          <>
            <Header />
            <main className="main-content">
              <h1>Welcome to MyApp</h1>
              <p>This is a React application with Vite and Less styles</p>
            </main>
            <Footer />
          </>
        </Loader>
    </div>
  );
};

export default App;