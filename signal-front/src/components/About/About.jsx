import React from 'react';
import './About.less';
import Hero from './Hero';
import AboutAs from './AboutAs';
import TeamSection from './TeamSection';
import FeedbackSection from "./FeedbackSection.jsx";



const About = () => {
    return (
        <div className="about-wrapper">
            <Hero />
            <AboutAs />
            <TeamSection />
            <FeedbackSection />
        </div>
    );
};
export default About;