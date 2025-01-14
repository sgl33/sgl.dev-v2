import '../css/general.css';
import '../css/landing.css';

import profile_pic from '../images/profile_pic.png';

function Landing() {
    return (
        <div id='landing-background'>
            <div id='landing-text-container'>
                <img id='landing-pic' src={profile_pic}></img>
                <h1>Seung-Gu Lee</h1>
                <h2>Hello! I'm a passionate computer science student at the University of Michigan.</h2>
            </div>
            {/* Buttons */}
            <div id='landing-buttons-container'>
                <p>&darr; Learn More:</p>
                <a className='landing-button' href="#experience">
                    Experience
                </a>
                <a className='landing-button' href="#projects">
                    Projects
                </a>
                <a className='landing-button' href="#about-me">
                    About Me
                </a>
            </div>
        </div>
    );
}

export default Landing;