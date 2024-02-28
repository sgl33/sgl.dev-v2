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
            {/* <CodeBlock {...codeBlockProps} theme={a11yDark}/> */}
            <div className='expcar-item'>
                <h1>University of Michigan</h1>
                <p>B.S.E. in Computer Science</p>
                <ul>
                    <li>Major: Computer Science</li>
                    <li>Minor: Mobility Systems Engineering</li>
                    <li>GPA: 3.88 / 4.0</li>
                </ul>
            </div>
        </div>
    );
}

export {ExperienceCarousel1, ExperienceCarousel3};