import cross from '../../assets/svg/cross.svg'
import eye from '../../assets/svg/eye.svg'
import openeye from '../../assets/svg/open-eye.svg'
import bitc from '../../assets/png/bitc.png';
import bar from '../../assets/png/bar.png';
import bitcoin from '../../assets/png/bitcoin.png';
import click from '../../assets/svg/click.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://your-backend-url.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                navigate('/signal'); 
            } else {
                alert('Ошибка входа. Проверьте введённые данные.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Произошла ошибка. Попробуйте снова.');
        }
    };

    return (
        <div className="_wrapper_16p5b_1">
            <a href="/" className="_cross_16p5b_7">
                <img src={cross} alt="cross" />
            </a>
            <div className="_desktopWrapper_atysd_107">
                <div className="_rightSide_atysd_79">
                    <img src={bitc} alt="bitcoin" className="_bitcoinRight_atysd_135" />
                    <img src={bar} alt="chart" className="_chartRight_atysd_130" />
                </div>
                <div className="_wrapper_atysd_1">
                    <div className="_topLinks_atysd_11">
                        <h2 className="_title_atysd_28 _active_atysd_39">Вход</h2>
                        <a href="/register" className="_link_64em0_1 _title_atysd_28">Регистрация</a>
                        <img src={bitcoin} alt="bitcoin" className="_linkImg_atysd_20" />
                    </div>
                    <form onSubmit={handleSubmit} className="_form_atysd_44">
                        <div className="_container_atysd_52">
                            <div className="_inputs_atysd_60">
                                <div className="_wrapper_13v8j_1">
                                    <div className="_inputContainer_13v8j_5">
                                        <input
                                            type="text"
                                            name="email"
                                            className="_input_13v8j_5"
                                            placeholder="Электронная почта"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="_wrapper_13v8j_1">
                                    <div className="_inputContainer_13v8j_5 _password_13v8j_35">
                                        <input
                                            type="password"
                                            name="password"
                                            className="_input_13v8j_5"
                                            placeholder="Пароль"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="" className="_eye_13v8j_10">
                                            <img src={eye} alt="eye" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="_wrapper_493cs_1">
                                {/* капча */}
                            </div>
                            <a href="/forgot-password" className="_link_64em0_1 _forgotPassword_atysd_71">Забыли пароль?</a>
                        </div>
                        <button type="submit" className="_button_13fxj_1 _button_atysd_67 _action_13fxj_13">
                            <span>Вход</span>
                            <img src={click} alt="click" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};




export default Login;