
// Hero.jsx
import React from 'react';
import './Hero.less'; // We'll create this file for hero-specific styles
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <section className="_wrapper_hq2vv_1 _wrapper_wotaq_1">
            <div className="_container_hq2vv_8">
                <h1 className="_mainTitle_wotaq_25">
                    {t('about.title').split('|').map((part, index) => (
                        <span key={index}>{part.trim()}</span>
                    ))}
                </h1>
            </div>
        </section>
    );
};


export default HeroSection;
