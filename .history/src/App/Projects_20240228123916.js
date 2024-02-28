import React, { useState, useRef } from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../css/general.css';
import '../css/projects.css'

import {ProjectsCarousel1, ProjectsCarousel2, ProjectsCarousel3, ProjectsCarousel4} from './ProjectsCarousel';

function Projects() {
    const [slideIndex, setSlideIndex] = useState(0);
    var sliderRef = useRef(null);

    var sliderSettings = {
        dots: false,
        arrows: false,
        swipe: false,
        infinite: true,
        slidesToShow: 1,
        beforeChange: (current, next) => setSlideIndex(next)
    };


    return (
        <div id='projects'>
            <h1 id='projects-header'>Projects</h1>
            {/* Buttons */}
            <div id='project-buttons-container'>
                <button className={slideIndex === 0 ? 'project-button-selected' : 'project-button'}
                    onClick={e => sliderRef.slickGoTo(0)}
                >
                    Highlights
                </button>
                <button className={slideIndex === 1 ? 'project-button-selected' : 'project-button'}
                    onClick={e => sliderRef.slickGoTo(1)}
                >
                    Web & Mobile
                </button>
                <button className={slideIndex === 2 ? 'project-button-selected' : 'project-button'}
                    onClick={e => sliderRef.slickGoTo(2)}
                >
                    Other
                </button>
                <button className={slideIndex === 3 ? 'project-button-selected' : 'project-button'} 
                    onClick={e => sliderRef.slickGoTo(3)}
                >
                    In Progress
                </button>
            </div>
            {/* Carousel Content */}
            <div id='projects-carousel'>
                <Slider {...sliderSettings} ref={slider => { sliderRef = slider; }}>
                    <div className='projcar-container'>
                        <ProjectsCarousel1/>
                    </div>
                    <div className='projcar-container'>
                        <ProjectsCarousel2/>
                    </div>
                    <div className='projcar-container'>
                        <ProjectsCarousel3/>
                    </div>
                    <div className='projcar-container'>
                        <ProjectsCarousel4/>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Projects;