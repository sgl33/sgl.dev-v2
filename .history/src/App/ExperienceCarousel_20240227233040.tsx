import '../css/general.css';
import '../css/experience.css';
import '../css/experiencecarousel.css';

import { CodeBlock, anOldHope } from "react-code-blocks";

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
            <CodeBlock {...codeBlockProps} theme={anOldHope}/>
        </div>
    );
}

function ExperienceCarousel2() {
    return (
        <div>

        </div>
    );
}

function ExperienceCarousel3() {
    const codeBlockProps = {
        language: "json",
        text: `{
        college: {
            name: "University of Michigan",
            location: "Ann Arbor, MI",
            graduation_year: 2025,
            major: "Computer Science",
            minor: "Mobility Systems Engineering",
            gpa: 3.9,
            relevant_courses: [
                "Operating Systems", "Computer Security",
                "Data Structures & Algorithms", "CS Pragmatics"
            ]
        },
        high_school: "Kansas Academy of Mathematics and Science"\n}`
    };

    return (
        <div className='expcar-background'>
            {/* UMich */ }
            <div className='expcar-stack-item'>
                <h1>University of Michigan</h1>
                <p><i>B.S.E. in Computer Science</i></p>
                <ul>
                    <li>GPA: 3.88 / 4.0</li>
                    <li>Minor: Mobility Systems Engineering</li>
                    <li>Relevant Courses: Operating Systems, Computer Security, Computer Organization, Data Structures & Algorithms, CS Pragmatics</li>
                </ul>
                <div className='expcar-item-right'>
                    <p>Ann Arbor, MI</p>
                    <p>May 2025</p>
                </div>
            </div>
            {/* KAMS */}
            <div className='expcar-stack-item'>
                <h1>Kansas Academy of Math and Science</h1>
                <p><i>High School Diploma</i></p>
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
    return (
        <div>

        </div>
    );
}

export {ExperienceCarousel1, ExperienceCarousel2, ExperienceCarousel3, ExperienceCarousel4};