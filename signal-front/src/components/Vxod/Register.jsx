import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cross from '../../assets/svg/cross.svg';
import eye from '../../assets/svg/eye.svg';
import openeye from '../../assets/svg/open-eye.svg'
import bitc from '../../assets/png/bitc.png';
import bar from '../../assets/png/bar.png';
import bitcoin from '../../assets/png/bitcoin.png';
import click from '../../assets/svg/click.svg';
import './login.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (formData.password !== formData.confirmPassword) {
            toast.error('Пароли не совпадают');
            return;
        }

        try {
            const response = await axios.post('/api/register', {
                email: formData.email,
                password: formData.password,
            });

            if (response.status === 200 || response.status === 201) {
                navigate('/confirm-email');
            } else {
                toast.error(response.data?.message || 'Ошибка регистрации');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Произошла ошибка. Попробуйте снова.');
            }
            console.error('Ошибка:', error);
        }
    };

    return (
        <>
            <ToastContainer position="top-center" />
            <div className="_wrapper_16p5b_1">
                <a href="/" className="_cross_16p5b_7">
                    <img src={cross} alt="cross" />
                </a>
                <div className="_desktopWrapper_ck1m9_96">
                    <div className="_rightSide_ck1m9_71">
                        <img src={bitc} alt="bitcoin" className="_bitcoinRight_atysd_135" />
                        <img src={bar} alt="chart" className="_chartRight_atysd_130" />
                    </div>
                    <div className="_wrapper_ck1m9_1">
                        <div className="_topLinks_ck1m9_11">
                            <a href="/login" className="_link_64em0_1 _title_atysd_28">Вход</a>
                            <h2 className="_title_ck1m9_28 _active_ck1m9_39">Регистрация</h2>
                            <img src={bitcoin} alt="bitcoin" className="_linkImg_ck1m9_20" />
                        </div>
                        <form onSubmit={handleSubmit} className="_form_ck1m9_44">
                            <div className="_container_ck1m9_52">
                                <div className="_inputs_ck1m9_60">
                                    <div className="_wrapper_13v8j_1">
                                        <div className="_inputContainer_13v8j_5">
                                            <input
                                                type="text"
                                                name="email"
                                                className="_input_13v8j_5"
                                                placeholder="Электронная почта"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="_wrapper_13v8j_1">
                                        <div className="_inputContainer_13v8j_5 _password_13v8j_35">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                className="_input_13v8j_5"
                                                placeholder="Пароль"
                                                value={formData.password}
                                                onChange={handleChange}
                                            />
                                            <label
                                                htmlFor=""
                                                className="_eye_13v8j_10"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => setShowPassword((v) => !v)}
                                            >
                                                <img src={showPassword ? openeye : eye} alt="eye" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="_wrapper_13v8j_1">
                                        <div className="_inputContainer_13v8j_5 _password_13v8j_35">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                name="confirmPassword"
                                                className="_input_13v8j_5"
                                                placeholder="Повторите пароль"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                            />
                                            <label
                                                htmlFor=""
                                                className="_eye_13v8j_10"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => setShowConfirmPassword((v) => !v)}
                                            >
                                                <img src={showConfirmPassword ? openeye : eye} alt="eye" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="_wrapper_493cs_1">
                                    {/* капча */}
                                </div>
                            </div>
                            <button type="submit" className="_button_13fxj_1 _button_ck1m9_67 _action_13fxj_13">
                                <span>Регистрация</span>
                                <img src={click} alt="click" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;