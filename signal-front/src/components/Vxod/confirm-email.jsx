import { useState, useEffect } from 'react';
import click from '../../assets/svg/click.svg';
import cross from '../../assets/svg/cross.svg'
import './confirm.css';
import './activate.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConfirmEmail = ({ email }) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [timer, setTimer] = useState(30); // Таймер на 30 секунд

    useEffect(() => {
        let interval;
        if (isButtonDisabled) {
            interval = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        setIsButtonDisabled(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isButtonDisabled]);

    const resendEmail = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/email/verification-notification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                // Если пользователь авторизован через токен, добавьте credentials: 'include'
                // credentials: 'include',
                body: JSON.stringify({ email }), // Если email нужен, иначе уберите
            });

            if (response.ok) {
                toast.success('Письмо отправлено повторно.');
                setIsButtonDisabled(true);
                setTimer(30);
            } else {
                const data = await response.json();
                toast.error(data.message || 'Ошибка при отправке письма. Попробуйте снова.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            toast.error('Произошла ошибка. Попробуйте снова.');
        }
    };

    return (
        <>
        <div className='_wrapper_16p5b_1'>
            <a href="/" className='_cross_16p5b_7'>
                <img src={cross} alt="cross"/>
            </a>
            <div className='_container_rgf45_1'>
                <div className='_contentWrapper_rgf45_57'>
                    <h1 className='_title_rgf45_15'>Подтвердите свой email</h1>
                    <p className='_subtitle_rgf45_24'>Чтобы войти, активируйте свой аккаунт через email</p>
                    <p className='_text_rgf45_34'>
                        Мы отправили письмо на ваш электронный адрес. Проверьте почту и нажмите на ссылку в письме, чтобы активировать свой аккаунт. Если не можете найти письмо, проверьте вкладку спам.
                    </p>
                    <p className='_remainigText_rgf45_44'>
                        {isButtonDisabled
                            ? `Вы сможете повторно отправить письмо через: 00:${timer.toString().padStart(2, '0')}`
                            : 'Вы можете отправить письмо снова.'}
                    </p>
                    <button
                        type="button"
                        className='_button_13fxj_1 _action_13fxj_13'
                        onClick={resendEmail}
                        disabled={isButtonDisabled}
                    >
                        <span>Отправить письмо снова</span>
                        <img src={click} alt="click" />
                    </button>
                    <div className='Toastify'></div>
                </div>
            </div>
        </div>
        <ToastContainer />
        </>
    );
};
export default ConfirmEmail;