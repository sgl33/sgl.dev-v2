import '../css/general.css';
import '../css/experience.css';
import '../css/experiencecarousel.css';

import { CodeBlock, github } from "react-code-blocks";

function ExperienceCarousel1() {
    const codeBlockProps = {
        language: "json",
        text: `{
        name: "Seung-Gu Lee",
        education: {}\n}`
    };

    return (
        <div className='expcar-background'>
            <CodeBlock {...codeBlockProps} theme={github}/>
        </div>
    );
}

export default ExperienceCarousel1;