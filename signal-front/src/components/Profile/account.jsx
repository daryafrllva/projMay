import click from '../../assets/svg/click.svg';
import exit from '../../assets/svg/exit.svg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './account.css';

const Account = () => {

    const [email, setEmail] = useState(''); 
    const [id, setId] = useState(''); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('https://your-backend-url.com/user', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Передаём токен
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setEmail(data.email);
                    setId(data.id);
                } else {
                    alert('Ошибка при получении данных пользователя.');
                }
            } catch (error) {
                console.error('Ошибка:', error);
                alert('Произошла ошибка. Попробуйте снова.');
            }
        };

        fetchUserData();
    }, []);

    const handleChangeEmail = async () => {
        try {
            const response = await fetch('https://your-backend-url.com/change-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, 
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                alert('Письмо для изменения почты отправлено.');
            } else {
                alert('Ошибка при отправке письма. Попробуйте снова.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Произошла ошибка. Попробуйте снова.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token'); 
        navigate('/login'); 
    };


    return (
        <>
            <section className='_wrapper_hq2vv_1'>
                <div className='_container_hq2vv_8 _container_ptqq2_1'>
                    <p className='_winRate_ptqq2_23'>Win rate 78.79%</p>
                    <div className='_settings_ptqq2_7'>
                        <div className='_accountCardsWrapper_ptqq2_52'>
                            <div className='_card_1nwk5_1'>
                                <h2 className='_title_1nwk5_5'>Личная информация</h2>
                                <div className='_privatInfoCard_ptqq2_60'>
                                    <div>
                                        <p className='_emailText_ptqq2_79'>Email</p>
                                        <input
                                            type="email"
                                            className='_emailInput_ptqq2_67'
                                            readOnly
                                            disabled
                                            value={email}
                                        />
                                    </div>
                                    <div>
                                        <p className='_emailText_ptqq2_79'>Referral ID</p>
                                        <input
                                            type="number"
                                            className='_emailInput_ptqq2_67'
                                            readOnly
                                            disabled
                                            value={id}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='_card_1nwk5_1'>
                                <h2 className='_title_1nwk5_5'>Безопасность</h2>
                                <div>
                                    <p className='_passwordText_ptqq2_88'>
                                        Для повышения безопасности обновить пароль можно только через почту
                                    </p>
                                    <button
                                        type='button'
                                        className='_button_13fxj_1 _passwordBtn_ptqq2_130 _action_13fxj_13'
                                        onClick={handleChangeEmail}
                                    >
                                        <span>Изменить почту</span>
                                        <img src={click} alt="click" />
                                    </button>
                                </div>
                            </div>
                            <button className='_exitButton_ptqq2_106' onClick={handleLogout}>
                                <img src={exit} alt="exit" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Account;