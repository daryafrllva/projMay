import React from 'react';
import './Wiki.less';
import HeroSection from './HeroSection';
import LibrarySection from './LibrarySection';
import CtaSection from './CtaSection';


const Wiki = () => {
    return (
        <div className="wiki-wrapper">
            <HeroSection />
            <LibrarySection />
            <CtaSection />
        </div>
    );
};
export default Wiki;