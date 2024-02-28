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
                    Fun Facts
                </button>
                <button className={slideIndex === 2 ? 'about-me-button-selected' : 'about-me-button'}
                    onClick={e => sliderRef.slickGoTo(2)}
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
                    {/* Fun Facts */}
                    <div className='amcar-container'>
                        <div className='amcar-content'>
                            <ul>
                                <li>I've lived in 4 different states in the United States: Michigan, Texas, Kansas, and Pennsylvania! I've lived in diverse climates ranging from -35&deg;F to 110&deg;F.</li>
                                <li>I'm a night owl.</li>
                                <li>I love stuffed animals!</li>
                                <li>I like Indie, Pop/Alt-Pop, Rock, some K-pop, etc. music and my favorite artist is <a href='https://open.spotify.com/artist/4I13kBfOo5vI4LT8oNE0Fy' target='_blank'>Sagong</a>.</li>
                            </ul>
                        </div>
                    </div>
                    {/* Links */}
                    <div className='amcar-container'>
                        <div className='amcar-content'>
                            <ul>
                                <li>
                                    <a href='https://sgl.dev/library/' target='_blank'>
                                        Writing & Video Samples
                                    </a>
                                </li>
                                <li>
                                    <a href='mailto:seunggu@sgl.dev' target='_blank'>
                                        Email Me!
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.linkedin.com/in/seunggulee/' target='_blank'>
                                        Connect with me on LinkedIn!
                                    </a>
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