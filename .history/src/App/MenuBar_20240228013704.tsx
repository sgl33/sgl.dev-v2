import '../css/menubar.css';

import github_icon from '../icons/github_black.png';
import linkedin_icon from '../icons/linkedin_icon.png';
import email_icon from '../icons/email_black.png';

function MenuBar() {
    return (
        <div id='menubar-container'>
            <div id='menubar-right'>
                <a target='_blank' href='https://www.linkedin.com/in/seunggulee/'>
                    <img src={linkedin_icon} alt='LinkedIn'/>
                </a>
                <a target='_blank' href='https://github.com/sgl33'>
                    <img src={github_icon} alt='Github'/>
                </a>
                <a target='_blank' href='mailto:seunggu@sgl.dev'>
                    <img src={email_icon} alt='Email'/>
                </a>
            </div>
        </div>
    );
}

export default MenuBar;