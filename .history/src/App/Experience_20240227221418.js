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
    var sliderRef = useRef(null);

    return (
        <div id='experience'>
            <h1>Experience</h1>
            {/* Buttons */}
            <div id='experience-buttons-container'>
                <button className={slideIndex === 0 ? 'experience-button' : 'experience-button'}
                    onClick={e => sliderRef.slickGoTo(0)}
                >
                    Overview
                </button>
                <button className='experience-button' 
                    onClick={e => sliderRef.slickGoTo(1)}
                >
                    Work Experience
                </button>
                <button className='experience-button' 
                    onClick={e => sliderRef.slickGoTo(2)}
                >
                    Education
                </button>
                <button className='experience-button' 
                    onClick={e => sliderRef.slickGoTo(3)}
                >
                    Skills
                </button>
            </div>
            {/* Carousel Content */}
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