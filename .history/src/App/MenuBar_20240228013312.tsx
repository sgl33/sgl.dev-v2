import '../css/menubar.css';

import linkedin_icon from '../icons/linkedin_icon.png';

function MenuBar() {
    return (
        <div id='menubar-container'>
            <div id='menubar-right'>
                <a>
                    <img src={linkedin_icon}/>
                </a>
                
            </div>
        </div>
    );
}

export default MenuBar;