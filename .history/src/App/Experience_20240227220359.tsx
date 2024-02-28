import '../css/general.css';
import '../css/experience.css';
import Slider from 'react-slick';

function Experience() {
    var sliderSettings = {
        dots: true,
        slidesToShow: 4
    }

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
                        <h1>1</h1>
                    </div>
                    <div>
                        <h1>2</h1>
                    </div>
                    <div>
                        <h1>3</h1>
                    </div>
                    <div>
                        <h1>4</h1>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Experience;