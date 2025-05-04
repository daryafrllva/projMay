import React, { useState, useEffect } from 'react';
import cross from '../../assets/svg/cross.svg';
import click from '../../assets/svg/click.svg';
import bitc from '../../assets/png/bitc.png';
import bar from '../../assets/png/bar.png';
import present from '../../assets/png/present.png';
import './enter.css';

const EnterId = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1100);
    const [isClosing, setIsClosing] = useState(false);

    const [id, setId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleOpenModal = (modalId) => {
        setActiveModal(modalId);
        setIsClosing(false);
    };

    const handleCloseModal = () => {
        setIsClosing(true); 
        setTimeout(() => {
            setActiveModal(null);
            setIsClosing(false);
        }, 300);
    };

    const renderModalContent = () => {
        switch (activeModal) {
            case 'whereId':
                return (
                    <React.Fragment>
                        <p className='_instructionText_yllvt_193 _text_b50nl_51'>Чтобы получить ваш ID, необходимо зарегистрироваться у брокера. После регистрации вы сможете найти свой ID в личном кабинете.</p>
                    </React.Fragment>
                );
            case 'whyId':
                return (
                    <>
                        <p className='_text_b50nl_51 _instructionText_yllvt_193'>Мы сотрудничаем с брокером по реферальной системе, чтобы предоставлять сигналы бесплатно для пользователей.</p>
                        <p className='_text_b50nl_51 _instructionText_yllvt_193'>Наш доход формируется за счет реферальной программы брокера Pocket Option, который выплачивает нам 2% от годового оборота успешных сделок пользователей.</p>
                        <p className='_text_b50nl_51 _instructionText_yllvt_193'>При этом пользователи ничего не теряют — комиссия начисляется со стороны брокера, а не с средств пользователей. Такой подход позволяет нам сохранять сервис бесплатным и поддерживать его качество на высоком уровне.</p>
                    </>
                );
            case 'alreadyAccount':
                return (
                    <>
                        <p className='_text_b50nl_51 _instructionText_yllvt_193'>Если у вас уже есть аккаунт у брокера Pocket Option без реферальной системы – вам нужно создать новый по нашей ссылке, иначе вы не сможете пользоваться этим сервисом.</p>
                    </>
                );
            default:
                return null;
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1100);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!id) {
            setErrorMessage('ID не может быть пустым.');
            return;
        }
    
        try {
            const response = await fetch('https://your-backend-url.com/verify-id', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
    
            if (response.ok) {
                const data = await response.json();
                alert('ID успешно проверен!');
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Ошибка проверки ID.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            setErrorMessage('Произошла ошибка. Попробуйте снова.');
        }
    };

    return (
        <>
            <div className='_wrapper_16p5b_1'>
                <a href="/" className='_cross_16p5b_7'>
                    <img src={cross} alt="cross" />
                </a>
                <div className='_desktopWrapper_yllvt_150'>
                    <div className='_rightSide_yllvt_104'>
                        <div>
                            <img src={bitc} alt="bitcoin" className='_bitcoinRight_yllvt_207' />
                            <img src={bar} alt="chart" className='_chartRight_yllvt_202' />
                        </div>
                    </div>
                    <div className='_wrapper_yllvt_1'>
                        <img src={present} alt="present" className='_presentImg_yllvt_13' />
                        <div>
                            <h1 className='_title_yllvt_23'>Почти готово!</h1>
                            <h2 className='_description_yllvt_32'>Для завершения регистрации и получения сигналов зарегистрируйте аккаунт по ссылке ниже и отправьте свой ID</h2>
                        </div>
                        <div>
                            <a className="_button_13fxj_1 _button_yllvt_69 _action_13fxj_13" href="https://u3.shortink.io/register?utm_campaign=810806&utm_source=affiliate&utm_medium=sr&a=I4fJBz7sqi19db&ac=blog777&code=GEC831">
                                <span>Регистрация на Pocket Option</span>
                                <img src={click} alt="click" />
                            </a>
                            <p className='_registerWarningText_yllvt_41'>
                                <span>Важно! </span>
                                Если у вас уже есть аккаунт, сначала выйдите из него (или удалите), а затем зарегистрируйтесь по этой ссылке. Иначе мы не получим ваш ID.
                            </p>
                        </div>
                        <form className='_form_yllvt_59' onSubmit={handleSubmit}>
                            <p className='_whereIsId_yllvt_73' onClick={() => handleOpenModal('whereId')}>Где найти ID?</p>
                            <div className='_wrapper_13v8j_1'>
                                <div className='_inputContainer_13v8j_5'>
                                    <input
                                        type="number"
                                        className='_input_13v8j_5'
                                        placeholder='ID'
                                        value={id}
                                        onChange={(e) => setId(e.target.value)}
                                    />
                                </div>
                            </div>
                            {errorMessage && <p className='_errorText_yllvt_93'>{errorMessage}</p>}
                            <button type="submit" className='_button_13fxj_1 _button_yllvt_69 _action_13fxj_13'>
                                <span>Создать аккаунт</span>
                                <img src={click} alt="click" />
                            </button>
                        </form>
                        <div className='_bottomQuestions_yllvt_85'>
                            <p className='_questionText_yllvt_93' onClick={() => handleOpenModal('whyId')}>Зачем вам мой ID?</p>
                            <p className='_questionText_yllvt_93' onClick={() => handleOpenModal('alreadyAccount')}>У меня уже есть аккаунт у брокера</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Модальное окно для ПК */}
            {activeModal && isDesktop && (
                <div className="_modalContentDesktop_yllvt_200">
                    <button className="_modalCross_yllvt_186" onClick={handleCloseModal}>
                        <img src={cross} alt="modal-cross" />
                    </button>
                    {renderModalContent()}
                </div>
            )}

            {/* Модальное окно для телефона */}
            {activeModal && !isDesktop && (
                <div className={`_modal_b50nl_1 ${isClosing ? '_closing' : '_opening'}`}>
                    <div className="_modalContent_b50nl_28">
                        <button className="_closeBtn_b50nl_42" onClick={handleCloseModal}>
                        <img src={cross} alt="modal-cross"/>
                        </button>
                        <div className='_textWrapper_b50nl_51'>
                        {renderModalContent()}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default EnterId;
