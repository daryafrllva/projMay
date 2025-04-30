import React, { useRef, useEffect } from 'react';
import './About.less';
import bar from "../../assets/svg/bar.svg";


const About = () => {
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
        <div className="about-wrapper">
            <div className="about-hero">
                <div className="about-hero-content">
                    <h1 className="about-hero-title">
                        Мы анализируем<br />
                        Создаем стратегии<br />
                        Достигаем успеха
                    </h1>
                </div>
            </div>

            <div className="about-content-container">
                <div className="about-fixed-title">
                    <h2>КТО МЫ?</h2>
                </div>

                <div className="about-scroll-content">
                    <div className="text-sections-wrapper">
                    <div className="about-image-section">
                        <img src={bar} alt="background" className="about-main-image" />
                    </div>

                    <div className="text-sections-container">
                    <section className="about-section" ref={el => sectionsRef.current[0] = el}>
                        <div className="about-section-text">
                            <p>Мы меняем трейдинг, делая его простым, понятным и доступным. Вы ставите цели, а мы предоставляем инструменты, которые ведут к успеху.</p>
                        </div>
                    </section>

                    <section className="about-section" ref={el => sectionsRef.current[1] = el}>
                        <div className="about-section-text">
                            <p>Технологии и аналитика работают на вас. Мы создаем решения, которые снижают риски и максимизируют прибыль в каждой сделке.</p>
                        </div>
                    </section>

                    <section className="about-section" ref={el => sectionsRef.current[2] = el}>
                        <div className="about-section-text">
                            <p>Трейдинг – это ваша история, и мы делаем ее ярче. Удобный интерфейс, передовая аналитика и полная поддержка на каждом этапе – все это помогает вам достигать вершин.</p>
                        </div>
                    </section>
                    </div>
                </div>
                </div>
            </div>

            <section className="about-team" ref={el => sectionsRef.current[3] = el}>
                <h2 className="about-team-title">Наша команда</h2>
                <p className="about-team-subtitle">Профессионалы, работающие для вашего успеха</p>

                <div className="team-members">
                    <div className="team-member">
                        <div className="member-photo"></div>
                        <h3 className="member-name">Иван Петренко</h3>
                        <p className="member-position">CEO & Основатель</p>
                    </div>
                    <div className="team-member">
                        <div className="member-photo"></div>
                        <h3 className="member-name">Елена Сидорова</h3>
                        <p className="member-position">Технический директор</p>
                    </div>
                    <div className="team-member">
                        <div className="member-photo"></div>
                        <h3 className="member-name">Михаил Иванов</h3>
                        <p className="member-position">Разработчик</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;