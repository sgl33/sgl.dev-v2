import '../css/general.css';
import '../css/experience.css';
import '../css/experiencecarousel.css';

import { CodeBlock, anOldHope } from "react-code-blocks";

import react_icon from '../icons/react_icon.png';
import swift_icon from '../icons/swift_icon.png';
import cpp_icon from '../icons/cpp_icon.png';
import js_icon from '../icons/js_icon.png';

import github_icon from '../icons/github_black.png';
import firebase_icon from '../icons/firebase_icon.png';
import python_icon from '../icons/python_icon.png';
import java_icon from '../icons/java_icon.png';
import ts_icon from '../icons/ts_icon.png';

import node_icon from '../icons/node_icon.png';
import unity_icon from '../icons/unity_black.png';

import mysql_icon from '../icons/mysql_icon.png';

function ExperienceCarousel1() {
    const codeBlockProps = {
        language: "json",
        text: `{
        name: "Seung-Gu Lee",
        pronouns: "he/him",
        education: {
            school: "University of Michigan - Ann Arbor",
            major: "Computer Science",
            gpa: 3.9,
            grad_year: 2025
        },
        work_experience: [
            { employer: "Treetown Tech", position: "Software Engineer Intern" }
            { employer: "DPM Lab", position: "Software Developer" },
            { employer: "DesignOC", position: "Web Developer Intern" }
        ],
        top_skills: ["React", "Swift", "React Native", "Node.js"],
        programming_experience_in_years: 9\n}`
    };

    return (
        <div className='expcar-background'>
            <div className='code-block-container'>
                <CodeBlock {...codeBlockProps} theme={anOldHope}/>
            </div>
        </div>
    );
}

function ExperienceCarousel2() {
    return (
        <div className='expcar-background'>
            {/* Treetown Tech */ }
            <div className='expcar-stack-item'>
                <h1>
                    <a href='https://treetowntech.com/' target='_blank'>
                        Treetown Tech
                    </a>
                </h1>
                <p  className='expcar-stack-item-italics'>Incoming Software Engineer Intern</p>
                <div className='expcar-item-right'>
                    <p>Ann Arbor, MI</p>
                    <p>May 2024 - Aug 2024</p>
                </div>
            </div>
            {/* DPM Lab */ }
            <div className='expcar-stack-item'>
                <h1>
                    <a href='https://dpm.engin.umich.edu/' target='_blank'>
                        DPM Lab
                    </a>
                </h1>
                <p className='expcar-stack-item-italics'>Software Developer</p>
                <ul>
                    <li>
                        Developed iOS application using <b>Swift</b> and <b>Firebase</b> to assist researchers with data collection for walking safety AI model with wearable IMU sensors
                    </li>
                    <li>
                        Created <b>React</b> web apps to visualize data and record user surveys
                    </li>
                    <li>
                        Set up <b>Node.js</b> backend to serve as a REST API endpoint for machine learning algorithms and remote push notifications
                    </li>
                    <li>
                        Assisted development of a cross-platform mobile app with <b>React Native</b> and OpenStreetMaps API guiding users to safer routes
                    </li>
                    <li>
                        Wrote <b>Python</b> web scrapers and data processors to collect a dataset of ~120k images and assisted with training computer vision model; placed 1st in national ASCE datathon
                    </li>
                </ul>
                <div className='expcar-item-right'>
                    <p>Ann Arbor, MI</p>
                    <p>Apr 2023 - Present</p>
                </div>
            </div>
            {/* DesignOC */ }
            <div className='expcar-stack-item'>
                <h1>DesignOC</h1>
                <p className='expcar-stack-item-italics'>Web Developer Intern</p>
                <ul>
                    <li>
                       Maintained and upgraded company website with HTML, CSS, and JavaScript and increased search engine visibility
                    </li>
                    <li>
                        Collaborated with staff and engineers to assist with automation and provided general tech support
                    </li>
                </ul>
                <div className='expcar-item-right'>
                    <p>Remote</p>
                    <p>Jun 2020 - Jul 2020</p>
                </div>
            </div>
        </div>
    );
}

function ExperienceCarousel3() {
    return (
        <div className='expcar-background'>
            {/* UMich */ }
            <div className='expcar-stack-item'>
                <h1>
                    <a href='https://umich.edu' target='_blank'>
                        University of Michigan
                    </a>
                </h1>
                <p className='expcar-stack-item-italics'>B.S.E. in Computer Science</p>
                <ul>
                    <li>GPA: 3.88 / 4.0</li>
                    <li>Minor: Mobility Systems Engineering</li>
                    <li>Relevant Courses: Operating Systems, Computer Security, Computer Organization, Data Structures and Algorithms, CS Pragmatics</li>
                </ul>
                <div className='expcar-item-right'>
                    <p>Ann Arbor, MI</p>
                    <p>May 2025</p>
                </div>
            </div>
            {/* KAMS */}
            <div className='expcar-stack-item'>
                <h1>
                    <a href='https://fhsu.edu/kams' target='_blank'>
                        Kansas Academy of Math and Science
                    </a>
                </h1>
                <p  className='expcar-stack-item-italics'>High School Diploma</p>
                <ul>
                    <li>GPA: 4.0 / 4.0</li>
                </ul>
                <div className='expcar-item-right'>
                    <p>Hays, KS</p>
                    <p>May 2022</p>
                </div>
            </div>
        </div>
    );
}



function ExperienceCarousel4() {
    const skillItem = (name: string, image: any) => {
        return (
            <div className='expcar-skill-item'>
                <img src={image} alt={name + " logo"}/>
                <p>{name}</p>
            </div>
        );
    }

    return (
        <div className='expcar-background'>
            <table className='expcar-table'>
                <tr>
                    <th>Expert</th>
                    <td>
                        <div className='expcar-table-cell'>
                            {skillItem('React', react_icon)}
                            {skillItem('Swift', swift_icon)}
                            {skillItem('JavaScript', js_icon)}
                            
                        </div>
                    </td>
                </tr>
                <tr className='expcar-table-empty-row'></tr>
                <tr>
                    <th>Proficient</th>
                    <td>
                        <div className='expcar-table-cell'>
                            {skillItem('Python', python_icon)}
                            {skillItem('Java', java_icon)}
                            {skillItem('TypeScript', ts_icon)}
                            {skillItem('C++', cpp_icon)}
                            {skillItem('Git', github_icon)}
                            {skillItem('Firebase', firebase_icon)}
                        </div>
                    </td>
                </tr>
                <tr className='expcar-table-empty-row'></tr>
                <tr>
                    <th>Intermediate</th>
                    <td>
                        <div className='expcar-table-cell'>
                            {skillItem('Node', node_icon)}
                            {skillItem('Unity', unity_icon)}
                        </div>
                    </td>
                </tr>
                <tr className='expcar-table-empty-row'></tr>
                <tr>
                    <th>Beginner</th>
                    <td>
                        <div className='expcar-table-cell'>
                            {skillItem('MySQL', mysql_icon)}
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export {ExperienceCarousel1, ExperienceCarousel2, ExperienceCarousel3, ExperienceCarousel4};