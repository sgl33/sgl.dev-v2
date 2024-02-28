import '../css/general.css';
import '../css/experience.css';

function Experience() {
    return (
        <div id='experience'>
            <h1>Experience</h1>
            <div id='experience-buttons-container'>
                <button className='experience-button'>Overview</button>
                <button>Work Experience</button>
                <button>Education</button>
                <button>Skills</button>
            </div>
        </div>
    )
}

export default Experience;