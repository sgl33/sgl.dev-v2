import '../css/general.css';
import '../css/experience.css';
import '../css/experiencecarousel.css';

import { CodeBlock, a11yDark } from "react-code-blocks";

function ExperienceCarousel1() {
    const codeBlockProps = {
        language: "json",
        text: `{
        name: "Seung-Gu Lee",
        education: {
            school: "University of Michigan - Ann Arbor",
            major: "Computer Science",
            gpa: 3.9
        },
        top_skills: ["React", "Swift", "Python"],
        programming_experience_in_years: 9
        \n}`
    };

    return (
        <div className='expcar-background'>
            <CodeBlock {...codeBlockProps} theme={a11yDark}/>
        </div>
    );
}

export default ExperienceCarousel1;