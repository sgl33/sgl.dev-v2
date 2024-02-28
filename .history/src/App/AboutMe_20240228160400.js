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
            <div id='about-me-buttons-container'>
                <button className={slideIndex === 0 ? 'about-me-button-selected' : 'about-me-button'}
                    onClick={e => sliderRef.slickGoTo(0)}
                >
                    Interests/Hobbies
                </button>
                <button className={slideIndex === 1 ? 'about-me-button-selected' : 'about-me-button'}
                    onClick={e => sliderRef.slickGoTo(1)}
                >
                    Hobbies
                </button>
                <button className={slideIndex === 2 ? 'about-me-button-selected' : 'about-me-button'}
                    onClick={e => sliderRef.slickGoTo(2)}
                >
                    Fun Facts
                </button>
                <button className={slideIndex === 3 ? 'about-me-button-selected' : 'about-me-button'} 
                    onClick={e => sliderRef.slickGoTo(3)}
                >
                    Links
                </button>
            </div>
            {/* Carousel Content */}
            <div id='about-me-carousel'>
                <Slider {...sliderSettings} ref={slider => { sliderRef = slider; }}>
                    <div className='amcar-container'>
                        <div className='amcar-content'>
                            <ul>
                                <li>I like travelling! I've been to 16 countries in 4 continents and 30+ states in the United States.</li>
                                <li>Fursuiter</li>
                            </ul>
                        </div>
                    </div>
                    <div className='amcar-container'>
                        2
                    </div>
                    <div className='amcar-container'>
                        3
                    </div>
                    <div className='amcar-container'>
                        4
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default AboutMe;