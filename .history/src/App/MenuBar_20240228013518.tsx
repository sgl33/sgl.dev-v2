import '../css/menubar.css';

import linkedin_icon from '../icons/linkedin_icon.png';
import email_icon from '../icons/email_black.png';

function MenuBar() {
    return (
        <div id='menubar-container'>
            <div id='menubar-right'>
                <a target='_blank' href='https://www.linkedin.com/in/seunggulee/'>
                    <img src={linkedin_icon}/>
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/seunggulee/'>
                    <img src={email_icon}/>
                </a>
            </div>
        </div>
    );
}

export default MenuBar;