import '../css/general.css';
import '../css/experience.css';
import '../css/experiencecarousel.css';

import { CodeBlock, a11yDark } from "react-code-blocks";

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
            grad_date: "May 2025"
        },
        top_skills: ["React", "Swift", "Python", "Node", "C++"],
        programming_experience_in_years: 9
        \n}`
    };

    return (
        <div className='expcar-background'>
            <CodeBlock {...codeBlockProps} theme={a11yDark}/>
        </div>
    );
}

function ExperienceCarousel2() {
    const codeBlockProps = {
        language: "json",
        text: `{
        college: {
            name: "University of Michigan",
            location: "Ann Arbor, MI",
            grad_year: 2025,
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
            <CodeBlock {...codeBlockProps} theme={a11yDark}/>
        </div>
    );
}

export {ExperienceCarousel1, ExperienceCarousel2};