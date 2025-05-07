// AboutAs.jsx
import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import hand3 from "../../assets/svg/hand3.svg";
import barsImg from "../../assets/png/bar.png";
import shieldImg from "../../assets/png/shield.png";
import goldImg from "../../assets/png/gold.png";

const AboutAs = () => {
    const sectionsRef = useRef([]);
    const { t } = useTranslation();

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
        <section className="_wrapper_hq2vv_1 about-section-wrapper">
            <div className="_container_hq2vv_8 _whoContainer_wotaq_110">
                <h2 className="_whoTitle_wotaq_40">{t('about.whoWeAre')}</h2>
                <div className="_whoWrapper_wotaq_50">
                    <div className="_whoHandImg_wotaq_95">
                        <img
                            src={hand3}
                            alt="About us visual"
                            className="about-main-image"
                        />
                    </div>

                    <div className="_whoTextsContainer_wotaq_58">
                        <div
                            className="about-section _whoTextBlock_wotaq_58"
                            ref={el => sectionsRef.current[0] = el}
                        >
                            <img src={barsImg} alt="bars" className="_whoImg_wotaq_70" />
                            <p className="_whoParagraph_wotaq_58">{t('about.mission1')}</p>
                            <div className="_dividerLine_wotaq_58"></div>
                        </div>

                        <div
                            className="about-section _whoTextBlock_wotaq_58"
                            ref={el => sectionsRef.current[1] = el}
                        >
                            <img src={shieldImg} alt="shield" className="_whoImg_wotaq_70" />
                            <p className="_whoParagraph_wotaq_58">
                                {t('about.mission2')}                            </p>
                            <div className="_dividerLine_wotaq_58"></div>
                        </div>

                        <div
                            className="about-section _whoTextBlock_wotaq_58"
                            ref={el => sectionsRef.current[2] = el}
                        >
                            <img src={goldImg} alt="gold" className="_whoImg_wotaq_70" />
                            <p className="_whoParagraph_wotaq_58">
                                {t('about.mission3')}                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutAs;