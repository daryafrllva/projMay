import React from 'react';
import './Loader.less';

const Loader = ({ isLoading, children }) => {
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