import '../css/projectscarousel.css';
import '../css/general.css';
import projectItems from './ProjectItems';

import divider_icon from '../icons/divider.png';

const projectItem = (project: any) => {
    return (
        <div className='projcar-item'>
            <div  className='projcar-item-thumbnail-container' >
                <img className='projcar-item-thumbnail' src={project.thumbnail}/>
            </div>
            
            <div className='projcar-item-right'>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <div className='projcar-item-icons-container'>
                    {
                        project.platform_icons.map((icon: any) => {
                            return <img src={icon}/>
                        })
                    }
                    <img src={}/>
                    {
                        project.tool_icons.map((icon: any) => {
                            return <img src={icon}/>
                        })
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