import React, { useState, useRef } from 'react';

import '../css/general.css';
import '../css/projects.css'

function Projects() {
    const [filterIndex, setFilterIndex] = useState(0);

    return (
        <div id='projects'>
            <h1 id='projects-header'>Projects</h1>
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
        </div>
    )
}

export default Projects;