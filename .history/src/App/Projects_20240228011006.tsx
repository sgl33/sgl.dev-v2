import React, { useState, useRef } from 'react';

import '../css/general.css';
import '../css/projects.css'

function Projects() {
    const [filterIndex, setFilterIndex] = useState(0);

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
                <button className={slideIndex === 3 ? 'experience-button-selected' : 'experience-button'}>
                    Skills
                </button>
            </div>
        </div>
    )
}

export default Projects;