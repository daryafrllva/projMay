// TeamSection.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './TeamSection.less';

// Импортируем изображения членов команды
import member1 from '../../assets/png/member1.png';
import member2 from '../../assets/png/member2.png';
import member3 from '../../assets/png/member3.png';
import member4 from '../../assets/png/member4.png';
import member5 from '../../assets/png/member5.png';

const TeamSection = () => {
    const teamMembers = [
        {
            id: 1,
            name: "23",
            position: "Основатель и CEO",
            description: "Основатель платформы с видением сделать трейдинг доступным для всех.",
            image: member1
        },
        {
            id: 2,
            name: "Мария 'Поддержка'",
            position: "Менеджер по работе с клиентами",
            description: "Мария помогает нашим клиентам оставаться довольными нашими услугами.",
            image: member2
        },
        {
            id: 3,
            name: "Иван 'Предприниматель'",
            position: "Бизнес-разработчик",
            description: "Иван ищет новые возможности, создав платформу для новичков, которая помогла тысячам начать трейдинг.",
            image: member3
        },
        {
            id: 4,
            name: "Алекс 'Инноватор'",
            position: "Главный разработчик",
            description: "Алекс использует новейшие инструменты, разработав алгоритм для снижения рисков на волатильных рынках.",
            image: member4
        },
        {
            id: 5,
            name: "Оля 'Аналитик'",
            position: "Финансовый аналитик",
            description: "Оля находит закономерности в данных, создавая точные аналитические отчеты для трейдеров.",
            image: member5
        }
    ];

    return (
        <section className="_wrapper_hq2vv_1 _teamWrapper_wotaq_76">
            <div className="_container_hq2vv_8">
                <div className="_wrapper_1apmi_1">
                    <h2 className="_title_1apmi_7">Наша команда</h2>
                </div>

                <div className="_teamSwiperWrapper_wotaq_80">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        loop={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        className="swiper _teamSwiper_wotaq_80 team-swiper"
                    >
                        {teamMembers.map((member) => (
                            <SwiperSlide key={member.id} className="swiper-slide">
                                <div className="_card_zg19o_1">
                                    <h3 className="_title_zg19o_6">{member.name}</h3>
                                    <p className="_text_zg19o_14">{member.position}</p>
                                    <p className="_description_zg19o_20">{member.description}</p>
                                    <img src={member.image} alt={member.name} className="_image_zg19o_25" />
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;