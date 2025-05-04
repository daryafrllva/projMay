import click from '../../assets/svg/click.svg';
import lock from '../../assets/png/lock.png';
import chartlock from '../../assets/png/chartLock.png';
import cross from '../../assets/svg/cross.svg'
import "./forgot.css";
const ForgotPassword = () => {

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [timer, setTimer] = useState(0);
    const [showRemainingText, setShowRemainingText] = useState(false);
  
    const startTimer = () => {
      setTimer(30); 
      setIsButtonDisabled(true);
      setShowRemainingText(true);
    
  
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsButtonDisabled(false);
            setShowRemainingText(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const email = e.target.email.value; 
    
        try {
          const response = await fetch('https://your-server.com/api/reset-password', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });
    
          if (response.ok) {
            startTimer(); 
          } else {
            alert('Ошибка при отправке запроса. Попробуйте снова.');
          }
        } catch (error) {
          console.error('Ошибка:', error);
          alert('Ошибка при подключении к серверу.');
        }
      };

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
                        <form className='_form_1lnpm_50'onSubmit={handleSubmit}>
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
                                {showRemainingText && (
                                <p className='_remainigText_1lnpm_77'>
                                    Мы отправили письмо на ваш электронный адрес. Проверьте почту и нажмите на ссылку в письме, чтобы сбросить пароль к аккаунту.
                                    <br />
                                    Вы сможете повторно отправить письмо через: {`00:${timer.toString().padStart(2, '0')}`}
                                </p>
                                )}
                                <button
                                type='submit'
                                className='_button_13fxj_1 _button_1lnpm_73 _action_13fxj_13'
                                disabled={isButtonDisabled}
                                >
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