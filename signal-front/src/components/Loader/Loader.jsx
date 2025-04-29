import React, { useState, useEffect } from 'react';
import './Loader.less';

const Loader = ({ children}) => {

    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    if (isLoading) {


    return (
    <div className="loader-container">
      <div className="loader-dots">
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
      </div>
    </div>
    );
    }
  return children;
};

export default Loader;