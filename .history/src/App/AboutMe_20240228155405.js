import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../css/general.css';
import '../css/aboutme.css';

function AboutMe() {
    const [slideIndex, setSlideIndex] = useState(0);
    var sliderRef = useRef(null);

    var sliderSettings = {
        swipe: false,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        beforeChange: (current, next) => setSlideIndex(next)
    };

    return (
        <div id='about-me'>
            <h1 id='about-me-header'>About Me</h1>
            {/* Buttons */}
            <div id='experience-buttons-container'>
                <button className={slideIndex === 0 ? 'experience-button-selected' : 'experience-button'}
                    onClick={e => sliderRef.slickGoTo(0)}
                >
                    Overview
                </button>
                <button className={slideIndex === 1 ? 'experience-button-selected' : 'experience-button'}
                    onClick={e => sliderRef.slickGoTo(1)}
                >
                    Work Experience
                </button>
                <button className={slideIndex === 2 ? 'experience-button-selected' : 'experience-button'}
                    onClick={e => sliderRef.slickGoTo(2)}
                >
                    Education
                </button>
                <button className={slideIndex === 3 ? 'experience-button-selected' : 'experience-button'} 
                    onClick={e => sliderRef.slickGoTo(3)}
                >
                    Skills
                </button>
            </div>
            {/* Carousel Content */}
            <div id='experience-carousel'>
                <Slider {...sliderSettings} ref={slider => { sliderRef = slider; }}>
                    <div className='expcar-container'>
                        <ExperienceCarousel1/>
                    </div>
                    <div className='expcar-container'>
                        <ExperienceCarousel2/>
                    </div>
                    <div className='expcar-container'>
                        <ExperienceCarousel3/>
                    </div>
                    <div className='expcar-container'>
                        <ExperienceCarousel4/>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default AboutMe;