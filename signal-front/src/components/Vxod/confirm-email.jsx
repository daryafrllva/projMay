import click from '../../assets/svg/click.svg';
import cross from '../../assets/svg/cross.svg'
import './confirm.css';
import './activate.css';
const ConfirmEmail = () => {



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
                    <p className='_remainigText_rgf45_44'>Вы сможете повторно отправить письмо через: 00:00</p>
                    <button type="button" className='_button_13fxj_1 _action_13fxj_13'>
                        <span>Отправить письмо снова</span>
                        <img src={click} alt="click" />
                    </button>
                    <div className='Toastify'></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ConfirmEmail;