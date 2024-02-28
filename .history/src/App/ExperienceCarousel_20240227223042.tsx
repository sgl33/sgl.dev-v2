import '../css/general.css';
import '../css/experience.css';
import '../css/experiencecarousel.css';

import { CodeBlock, dracula } from "react-code-blocks";

function ExperienceCarousel1() {
    const codeBlockProps = {
        language: "json",
        text: `
        {
            name: "Seung-Gu Lee"
        }
        `,
        theme: {dracula}
    };

    return (
        <div className='expcar-background'>
            <CodeBlock {...codeBlockProps}/>
        </div>
    );
}

export default ExperienceCarousel1;