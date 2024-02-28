import '../css/menubar.css';

import linkedin_icon from '../icons/linkedin_icon.png';

function MenuBar() {
    return (
        <div id='menubar-container'>
            <div id='menubar-right'>
                <img src={linkedin_icon}/>
            </div>
        </div>
    );
}

export default MenuBar;