import '../css/general.css';
import '../css/experience.css';
import '../css/experiencecarousel.css';

import { CodeBlock, anOldHope } from "react-code-blocks";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import react_icon from '../icons/react_icon.png';
import swift_icon from '../icons/swift_icon.png';
import cpp_icon from '../icons/cpp_icon.png';
import html_icon from '../icons/html_icon.png';
import js_icon from '../icons/js_icon.png';

import github_icon from '../icons/github_black.png';
import firebase_icon from '../icons/firebase_icon.png';
import python_icon from '../icons/python_icon.png';
import java_icon from '../icons/java_icon.png';
import ts_icon from '../icons/ts_icon.png';
import linux_icon from '../icons/linux_icon.png';

import node_icon from '../icons/node_icon.png';
import unity_icon from '../icons/unity_black.png';
import redis_icon from '../icons/redis_icon.png';

import mysql_icon from '../icons/mysql_icon.png';
import postgresql_icon from '../icons/postgresql_icon.png';
import r_icon from '../icons/r_icon.png';
import popup_icon from '../icons/small_popup_icon.png';

function ExperienceCarousel1() {
    const codeBlockProps = {
        language: "json",
        text: `{
        name: "Seung-Gu Lee",
        pronouns: "he/him",
        education: {
            school: "University of Michigan - Ann Arbor",
            major: "Computer Science",
            gpa: 3.85,
            grad_year: 2025
        },
        work_experience: [
            { employer: "Treetown Tech", position: "Software Engineer Intern" },
            { employer: "DPM Lab", position: "Software Developer" },
            { employer: "DesignOC", position: "Web Developer Intern" }
        ],
        top_skills: ["Python", "HTML/CSS", "JavaScript", "React", "Swift", "C/C++"],
        programming_experience_in_years: 10\n}`
    };

    return (
        <div className='expcar-background'>
            <div className='code-block-container'>
                <CodeBlock {...codeBlockProps} theme={anOldHope}/>
            </div>
            <div className='expcar-resume-link'>
                <a target='_blank'
                    href='https://docs.google.com/document/d/1U_9ITmqJBRbt3zlzex_Q98hSzIIapRI02uc-3h2O_YM/edit' >
                    View / Download Resume
                </a>
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
                <p className='expcar-stack-item-italics'>Software Engineer Intern</p>
                <MobileView>
                    <p className='expcar-item-right-mobile'>
                        Ann Arbor, MI &bull; May 2024 - Present
                    </p>
                </MobileView>
                <ul>
                    <li>
                        Lead development of web frontend and RESTful backend using <b>Python (FastAPI)</b>, <b>Redis</b>, <b>PostgreSQL</b>, and <b>HTML</b> framework for a software provisioning system
                    </li>
                    <li>
                        Implemented web interface and main algorithm with <b>Python</b> for a promotional wall art display built with 2,400 servos controlled by STM32 controllers connected via the CAN bus
                    </li>
                    <li>
                        Built AI-powered "roasting robot" using <b>Python</b> and <b>Arduino</b> integrating GPT and OpenCV; presented at A2 TechTrek (2024)
                    </li>
                    <li>
                        Created automated testing software in <b>Python</b> for a factory automation software using RTLS technology (UWB), anticipated to save the client over $1 million per year
                    </li>
                </ul>
                <BrowserView>
                    <div className='expcar-item-right'>
                        <p>Ann Arbor, MI</p>
                        <p>May 2024 - Present</p>
                    </div>
                </BrowserView>
                
            </div>
            {/* DPM Lab */ }
            <div className='expcar-stack-item'>
                <h1>
                    <a href='https://dpm.engin.umich.edu/' target='_blank'>
                        DPM Lab
                    </a>
                </h1>
                <p className='expcar-stack-item-italics'>Software Developer</p>
                <MobileView>
                    <p className='expcar-item-right-mobile'>
                        Ann Arbor, MI &bull; Apr 2023 - Apr 2024
                    </p>
                </MobileView>
                <ul>
                    <li>
                        Developed iOS application using <b>Swift</b> and <b>Firebase</b> to assist researchers with data collection for walking safety AI model with wearable IMU sensors
                    </li>
                    <li>
                        Improved existing iOS application by adding new features and fixing bugs
                    </li>
                    <li>
                        Created <b>React</b> web apps to visualize data and record survey responses
                    </li>
                    <li>
                        Set up <b>Node.js</b> backend to serve as a REST API endpoint for machine learning algorithms and remote push notifications
                    </li>
                    <li>
                        Wrote <b>Python</b> web scrapers and data processors to collect a dataset of ~120k images and assisted with training computer vision model; placed 1st in national ASCE datathon
                    </li>
                </ul>
                <BrowserView>
                    <div className='expcar-item-right'>
                        <p>Ann Arbor, MI</p>
                        <p>Apr 2023 - Apr 2024</p>
                    </div>
                </BrowserView>
            </div>
            {/* DesignOC */ }
            <div className='expcar-stack-item'>
                <h1>DesignOC</h1>
                <p className='expcar-stack-item-italics'>Web Developer Intern</p>
                <MobileView>
                    <p className='expcar-item-right-mobile'>
                        Remote &bull; Jun 2020 - Jul 2020
                    </p>
                </MobileView>
                <ul>
                    <li>
                       Maintained and upgraded company website with HTML, CSS, and JavaScript and increased search engine visibility
                    </li>
                    <li>
                        Collaborated with staff and engineers to assist with automation and provided general tech support
                    </li>
                </ul>
                <BrowserView>
                    <div className='expcar-item-right'>
                        <p>Remote</p>
                        <p>Jun 2020 - Jul 2020</p>
                    </div>
                </BrowserView>
                
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
                <MobileView>
                    <p className='expcar-item-right-mobile'>
                        Ann Arbor, MI &bull; May 2025
                    </p>
                </MobileView>
                <ul>
                    <li>GPA: 3.85 / 4.0</li>
                    <li>Minor: Mobility Systems Engineering</li>
                    <li>Relevant Courses: Operating Systems (Advanced version), Web Systems, Computer Security, Computer Organization, CS Pragmatics, Sensors and Circuits</li>
                </ul>
                <BrowserView>
                    <div className='expcar-item-right'>
                        <p>Ann Arbor, MI</p>
                        <p>May 2025</p>
                    </div>
                </BrowserView>
            </div>
            {/* KAMS */}
            <div className='expcar-stack-item'>
                <h1>
                    <a href='https://fhsu.edu/kams' target='_blank'>
                        Kansas Academy of Math and Science
                    </a>
                </h1>
                <p  className='expcar-stack-item-italics'>High School Diploma</p>
                <MobileView>
                    <p className='expcar-item-right-mobile'>
                        Hays, KS &bull; May 2022
                    </p>
                </MobileView>
                <ul>
                    <li>GPA: 4.0 / 4.0</li>
                </ul>
                <BrowserView>
                    <div className='expcar-item-right'>
                        <p>Hays, KS</p>
                        <p>May 2022</p>
                    </div>
                </BrowserView>
                
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
                    <th>Excellent</th>
                    <td>
                        <div className='expcar-table-cell'>
                            {skillItem('Python', python_icon)}
                            {skillItem('C++', cpp_icon)}
                            {skillItem('React', react_icon)}
                            {skillItem('HTML/CSS', html_icon)}
                        </div>
                    </td>
                </tr>
                <tr className='expcar-table-empty-row'></tr>
                <tr>
                    <th>Very Good</th>
                    <td>
                        <div className='expcar-table-cell'>
                            {skillItem('Java', java_icon)}
                            {skillItem('TypeScript', ts_icon)}
                            {skillItem('Swift', swift_icon)}
                            {skillItem('Git', github_icon)}
                            {skillItem('Firebase', firebase_icon)}
                            {skillItem('Linux', linux_icon)}
                            {skillItem('SQL', postgresql_icon)}
                        </div>
                    </td>
                </tr>
                <tr className='expcar-table-empty-row'></tr>
                <tr>
                    <th>Good</th>
                    <td>
                        <div className='expcar-table-cell'>
                            
                            {skillItem('Redis', redis_icon)}
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
                            {skillItem('React Native', react_icon)}
                            {skillItem('R', r_icon)}
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export {ExperienceCarousel1, ExperienceCarousel2, ExperienceCarousel3, ExperienceCarousel4};