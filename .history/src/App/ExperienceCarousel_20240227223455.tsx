import '../css/general.css';
import '../css/experience.css';
import '../css/experiencecarousel.css';

import { CodeBlock, tomorrowNight } from "react-code-blocks";

function ExperienceCarousel1() {
    const codeBlockProps = {
        language: "json",
        text: `{
        name: "Seung-Gu Lee",
        education: {}\n}`,
        theme: {tomorrowNight}
    };

    return (
        <div className='expcar-background'>
            <CodeBlock {...codeBlockProps}/>
        </div>
    );
}

export default ExperienceCarousel1;