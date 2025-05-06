import cross from '../../assets/svg/cross.svg'
import click from '../../assets/svg/click.svg';

const ResetPassword = () => {
    return (
        <>
    <div className="_wrapper_16p5b_1">
        <a href="/" className="_cross_16p5b_7">
        <img src={cross} alt="cross" /></a>
        <div className='_wrapper_172lp_1'>
            <div className='_titles_172lp_13'>
                <h1 className='_title_172lp_13'>
                Введите новый пароль 
                </h1>
            </div>
            <form className='_form_172lp_35'>
                <div className='_container_172lp_44'>
                    <div className='_inputs_172lp_52'>
                        <div className='_wrapper_13v8j_1'>
                            <div className='_inputContainer_13v8j_5 _password_13v8j_35'>
                                <input type="password" className='_input_13v8j_5' placeholder='Пароль' name='password'/>
                                <label className='_eye_13v8j_10'>
                                    <img src={eye} alt="eye" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <button type='submit' className='_button_13fxj_1 _action_13fxj_13'>
                    <span>
                    Установить пароль
                    </span>
                    <img src={click} alt="click" />
                </button>
            </form>
        </div>
    </div>

        </>
    );
};

export default ResetPassword;