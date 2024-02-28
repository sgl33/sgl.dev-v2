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
            <div id='landing-buttons-container'>
                Down Arrow
                <button className='landing-button'>Experience</button>
                <button className='landing-button'>Projects</button>
            </div>
        </div>
    );
}

export default Landing;