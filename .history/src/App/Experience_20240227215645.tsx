import '../css/general.css';
import '../css/experience.css';
import Carousel from 'react-bootstrap/Carousel';

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
                <Carousel>
                    <Carousel.Item>
                        <p>Text 1</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <p>Text 2</p>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Experience;