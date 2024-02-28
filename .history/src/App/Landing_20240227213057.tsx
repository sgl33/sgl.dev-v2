import '../css/general.css';
import '../css/landing.css';

function Landing() {
    return (
        <div id='landing-background'>
            <div id='landing-container'>
                <img id='landing-pic'></img>
                <h1>Seung-Gu Lee</h1>
                <h2>Hello, welcome! I'm a passionate computer science student at the University of Michigan.</h2>
            </div>
            <div id='landing-buttons-container'>
                    <button className='landing-button'>Experience</button>
                    <button className='landing-button'>Projects</button>
                </div>
        </div>
    );
}

export default Landing;