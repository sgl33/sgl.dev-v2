import '../css/general.css';
import '../css/experience.css';
import Slider from "react-slick";

function Experience() {
    return (
        <div id='experience'>
            <h1>Experience</h1>
            <div id='experience-buttons-container'>
                <button className='experience-button'>Overview</button>
                <button className='experience-button'>Work Experience</button>
                <button className='experience-button'>Education</button>
                <button className='experience-button'>Skills</button>
            </div>
            <div id='experience-carousel'>
                <Slider>
                    <div>
                        1
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Experience;