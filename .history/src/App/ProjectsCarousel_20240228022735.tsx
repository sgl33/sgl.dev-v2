import '../css/projectscarousel.css';
import '../css/general.css';
import projectItems from './ProjectItems';

const projectItem = (project: {}) => {
    return (
        <div>
            
        </div>
    );
}

function ProjectsCarousel1() {
    return (
        <div>
            {projectItem(projectItems.hexagon_defense)}
        </div>
    );
}

function ProjectsCarousel2() {
    return (
        <div>
            
        </div>
    );
}

function ProjectsCarousel3() {
    return (
        <div>
            
        </div>
    );
}

function ProjectsCarousel4() {
    return (
        <div>
            
        </div>
    );
}

export {ProjectsCarousel1, ProjectsCarousel2, ProjectsCarousel3, ProjectsCarousel4};