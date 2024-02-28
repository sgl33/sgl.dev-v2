import React, { useState, useRef } from 'react';

import '../css/general.css';
import '../css/experience.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Experience() {
    var sliderSettings = {
        dots: true,
        slidesToShow: 1
    }

    const [slideIndex, setSlideIndex] = useState(0);
    var sliderRef = React.useRef<Slider>(null);

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
                <Slider {...sliderSettings} ref={slider => { sliderRef = slider; }}>
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