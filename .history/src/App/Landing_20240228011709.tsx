import '../css/general.css';
import '../css/landing.css';

function Landing() {
    return (
        <div id='landing-background'>
            <div id='landing-text-container'>
                <img id='landing-pic'></img>
                <h1>Seung-Gu Lee</h1>
                <h2>Hello! I'm a passionate computer science student at the University of Michigan.</h2>
            </div>
            {/* Buttons */}
            <div id='landing-buttons-container'>
                <button className='landing-button'>
                    &darr; Experience
                </button>
                <button className='landing-button'>
                    &darr; Projects
                </button>
            </div>
        </div>
    );
}

export default Landing;