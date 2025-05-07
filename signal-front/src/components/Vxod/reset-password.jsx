import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cross from '../../assets/svg/cross.svg';
import click from '../../assets/svg/click.svg';
import eye from '../../assets/svg/eye.svg';
import openeye from '../../assets/svg/open-eye.svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Получаем токен из query-параметра или pathname
    // Например: /reset-password/abc123
    const token = location.pathname.split('/').pop();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('/api/reset-password', {
                token,
                password,
            });

            if (response.status === 200) {
                toast.success('Пароль успешно обновлён!');
                setTimeout(() => navigate('/login'), 2000);
            } else {
                toast.error(response.data?.message || 'Ошибка при обновлении пароля.');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Ошибка при подключении к серверу.');
            }
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <div className="_wrapper_16p5b_1">
                <a href="/" className="_cross_16p5b_7">
                    <img src={cross} alt="cross" />
                </a>
                <div className='_wrapper_172lp_1'>
                    <div className='_titles_172lp_13'>
                        <h1 className='_title_172lp_13'>
                            Введите новый пароль 
                        </h1>
                    </div>
                    <form className='_form_172lp_35' onSubmit={handleSubmit}>
                        <div className='_container_172lp_44'>
                            <div className='_inputs_172lp_52'>
                                <div className='_wrapper_13v8j_1'>
                                    <div className='_inputContainer_13v8j_5 _password_13v8j_35'>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className='_input_13v8j_5'
                                            placeholder='Пароль'
                                            name='password'
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            required
                                        />
                                        <label
                                            className='_eye_13v8j_10'
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => setShowPassword(v => !v)}
                                        >
                                            <img src={showPassword ? openeye : eye} alt="eye" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type='submit'
                            className='_button_13fxj_1 _action_13fxj_13'
                            disabled={loading}
                        >
                            <span>
                                {loading ? 'Отправка...' : 'Установить пароль'}
                            </span>
                            <img src={click} alt="click" />
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default ResetPassword;