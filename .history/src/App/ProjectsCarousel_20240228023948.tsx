import '../css/projectscarousel.css';
import '../css/general.css';
import projectItems from './ProjectItems';

const projectItem = (project: any) => {
    return (
        <div className='projcar-item'>
            <img src={project.thumbnail}/>
            <div className='projcar-item-right'>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <div className='projcar-item-icons'>
                    {project.links.map((link: any) => {
                        return (
                            <a href={link.url} target='_blank'>
                                <img src={link.icon} alt={link.name}/>
                            </a>
                        );
                        }
                    }
                </div>
            </div>
        </div>
    );
}

function ProjectsCarousel1() {
    return (
        <div className='projcar-container'>
            {projectItem(projectItems.hexagon_defense)}
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