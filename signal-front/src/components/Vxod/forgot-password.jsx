import click from '../../assets/svg/click.svg';
import lock from '../../assets/png/lock.png';
import chartlock from '../../assets/png/chartLock.png';
import cross from '../../assets/svg/cross.svg'
import "./forgot.css";
const ForgotPassword = () => {




        return(
            <>
            <div className='_wrapper_16p5b_1'>
                <a href="/" className='_cross_16p5b_7'>
                    <img src={cross} alt="cross" />
                </a>
                <div className='_desktopWrapper_1lnpm_139'>
                    <div className='_rightSide_1lnpm_110'>
                        <img src={chartlock} alt="chart" className='_chartImg_1lnpm_162'/>
                    </div>
                    <div className='_wrapper_1lnpm_1'>
                        <div className='_titles_1lnpm_11'>
                            <h2 className='_title_1lnpm_11'>Обновление пароля</h2>
                            <h3 className='_subtitle_1lnpm_33'>Введите свой Email</h3>
                            <h3 className='_titleText_1lnpm_41'>Чтобы обновить пароль, введите свой Email, который мог использоваться в системе</h3>
                            <img src={lock} alt="lock" className='_lockImg_1lnpm_15'/>
                        </div>
                        <form className='_form_1lnpm_50'>
                            <div className='_container_1lnpm_58'>
                                <div className='_inputs_1lnpm_66'>
                                    <div className='_wrapper_13v8j_1'>
                                        <div className='_inputContainer_13v8j_5'>
                                            <input type="email" className='_input_13v8j_5' placeholder='Электронная почта' name='email'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='_bottomWrapper_1lnpm_87'>
                                <button type='submit' className='_button_13fxj_1 _button_1lnpm_73 _action_13fxj_13'>
                                    <span>Отправить запрос</span>
                                    <img src={click} alt="click" />
                                </button>
                                <a href="/login" className='_backLink_1lnpm_97'>Назад</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </>
);


}


export default ForgotPassword;