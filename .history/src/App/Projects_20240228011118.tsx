import React, { useState, useRef } from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../css/general.css';
import '../css/projects.css'

function Projects() {
    const [slideIndex, setSlideIndex] = useState(0);
    var sliderRef = useRef(null);

    var sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        beforeChange: (current, next) => setSlideIndex(next)
    };


    return (
        <div id='projects'>
            <h1 id='projects-header'>Projects</h1>
            <div id='experience-buttons-container'>
                <button className={filterIndex === 0 ? 'experience-button-selected' : 'experience-button'}>
                    Overview
                </button>
                <button className={filterIndex === 1 ? 'experience-button-selected' : 'experience-button'} >
                    Work Experience
                </button>
                <button className={filterIndex === 2 ? 'experience-button-selected' : 'experience-button'}>
                    Education
                </button>
                <button className={filterIndex === 3 ? 'experience-button-selected' : 'experience-button'}>
                    Skills
                </button>
            </div>
        </div>
    )
}

export default Projects;