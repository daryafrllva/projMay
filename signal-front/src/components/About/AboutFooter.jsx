import React from 'react';
import { Link } from 'react-router-dom';

const TrendsSection = () => {
    return (
        <section className="_wrapper_hq2vv_1">
            <div className="_container_hq2vv_8 _wrapper_yvbyh_1">
                <div className="_wrapper_1apmi_1 _titlesWrapper_yvbyh_33">
                    <h2 className="_title_1apmi_7">Будьте в курсе всех трендов трейдинга!</h2>
                    <p className="_description_1apmi_22">
                        Регистрируйтесь и получайте доступ к аналитике, эксклюзивным стратегиям.
                    </p>
                </div>
                <div className="_buttons_yvbyh_38">
                    <Link
                        className="_button_13fxj_1 _action_13fxj_13"
                        to="/login"
                        target="_self"
                    >
                        <span>Авторизация</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_539_5622)">
                                <path d="M8.00065 2.74935L7.06065 3.68602L10.894 7.52602H2.66699V8.47268H10.894L7.06065 12.3127L8.00065 13.2493L13.3333 7.99935L8.00065 2.74935Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_539_5622">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TrendsSection;