import '../css/general.css';
import '../css/experience.css';
import '../css/experiencecarousel.css';

import { CopyBlock } from "react-code-blocks";

function ExperienceCarousel1() {
    const copyBlockProps = {
        language: "json",
        text: `
        
        `
    };

    return (
        <div className='expcar-background'>
            <CopyBlock {...copyBlockProps}/>
        </div>
    );
}

export default ExperienceCarousel1;