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
                    Links
                </button>
            </div>
            {/* Carousel Content */}
            <div id='about-me-carousel'>
                <Slider {...sliderSettings} ref={slider => { sliderRef = slider; }}>
                    {/* Interests/Hobbies */}
                    <div className='amcar-container'>
                        <div className='amcar-content'>
                            <ul>
                                <li>I like <b>travelling</b>! I've been to 16 countries in 4 continents and 30+ states in the United States, and I hope to explore other countries and cultures soon.</li>
                                <li>I love visiting <b>theme parks</b> and riding roller coasters. My favorite ride is Velocicoaster at Universal's Islands of Adventure (Orlando, FL).</li>
                                <li>I like playing PC games. My favorite games are Cities: Skylines and single-player or mass-multiplayer shooter games (e.g. Battlefield).</li>
                                <li>Sometimes I can't stop when I get started on <b>programming projects</b>, such as this website.</li>
                                <li>I like <b>anthromorphic animals</b> and fursuiting. I'm not active in the furry community, but I enjoy hanging out and going to conventions with friends.</li>
                            </ul>
                        </div>
                    </div>
                    {/* Links */}
                    <div className='amcar-container'>
                        <div className='amcar-content'>
                            <ul>
                                <li>
                                    <a>Writing & Video Samples</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default AboutMe;