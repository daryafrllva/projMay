import click from '../../assets/svg/click.svg';
import './confirm.css';
const ActivatedEmail = () => {



    return (
        <>
        <div className='_container_1dpxt_1'>
            <div className='_contentWrapper_1dpxt_39'>
                <h1 className='_title_1dpxt_15'>Ваша почта активировано!</h1>
                <p className='_subtitle_1dpxt_24'>Осталось совсем немного :)</p>
                <a href="/enter-id" className='_button_13fxj_1 _button_1dpxt_34 _action_13fxj_13'>
                <span>К следующему шагу</span>
                <img src={click} alt="click" />
                </a>
            </div>
        </div>
        </>
    );
}

export default ActivatedEmail;