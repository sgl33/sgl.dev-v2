import '../css/projectscarousel.css';
import '../css/general.css';
import projectItems from './ProjectItems';

const projectItem = (project: any) => {
    return (
        <div className='projcar-item'>
            <p>{project.name}</p>
        </div>
    );
}

function ProjectsCarousel1() {
    return (
        <div className='projcar-container'>
            {projectItem(projectItems.hexagon_defense)}
        </div>
    );
}

function ProjectsCarousel2() {
    return (
        <div className='projcar-container'>
            
        </div>
    );
}

function ProjectsCarousel3() {
    return (
        <div className='projcar-container'>
            
        </div>
    );
}

function ProjectsCarousel4() {
    return (
        <div className='projcar-container'>
            
        </div>
    );
}

export {ProjectsCarousel1, ProjectsCarousel2, ProjectsCarousel3, ProjectsCarousel4};