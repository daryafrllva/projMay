
import React, { useRef, useEffect } from 'react';
import bar from "../../assets/svg/bar.svg";

const AboutAs = () => {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        sectionsRef.current.forEach(section => {
            if (section) sectionObserver.observe(section);
        });

        return () => {
            sectionsRef.current.forEach(section => {
                if (section) sectionObserver.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="about-content-container">
            <div className="about-fixed-title">
                <h2>Кто мы?</h2>
            </div>
            <div className="about-scroll-content">
                <div className="about-image-section">
                    <img
                        className="about-main-image"
                        src={bar}
                        alt="About us visual"
                    />
                </div>
                <div className="text-sections-wrapper">
                    <div className="text-sections-container">
                        <div
                            className="about-section"
                            ref={el => sectionsRef.current[0] = el}
                        >
                            <p className="about-section-text">
                                Your about section text here...
                            </p>
                        </div>
                        {/* Add more sections as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAs;