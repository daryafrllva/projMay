import React from 'react';
import './Loader.less';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-dots">
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;