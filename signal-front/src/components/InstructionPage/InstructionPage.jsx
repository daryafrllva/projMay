// InstructionPage.jsx
import React from 'react';
import './Instruction.less';
import xx from "../../assets/svg/xx.svg";

const Instruction = () => {
    return (
        <div className="_wrapper_1a085_1">
            <div className="_container_1a085_6">
                <div className="_content_1a085_101">
                    <div className="maintenance-wrapper">
                        <div className="maintenance-content">
                            <img src={xx} alt="red shield" className="maintenance-icon"/>
                            <h2 className="_title_1apmi_7">Страница в разработке</h2>
                            <p className="_description_1apmi_22">
                                Мы работаем над улучшением функционала и скоро вернемся с обновлениями!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instruction;