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
            school: "University of Michigan",
            major: "Computer Science",
            minor: "Mathematics",
            graduation: "May 2023"
        },
        \n}`
    };

    return (
        <div className='expcar-background'>
            <CodeBlock {...codeBlockProps} theme={a11yDark}/>
        </div>
    );
}

export default ExperienceCarousel1;