import '../css/general.css';
import '../css/experience.css';
import '../css/experiencecarousel.css';

import { CodeBlock, codepen } from "react-code-blocks";

function ExperienceCarousel1() {
    const codeBlockProps = {
        language: "json",
        text: `{
        name: "Seung-Gu Lee",
        education: {
            school: "University of Michigan",
            major: "Computer Science",
            minor: "Mobility Systems Engineering",
            graduation: "May 2025"
        },
        skills: {

        }
        \n}`
    };

    return (
        <div className='expcar-background'>
            <CodeBlock {...codeBlockProps} theme={codepen}/>
        </div>
    );
}

export default ExperienceCarousel1;