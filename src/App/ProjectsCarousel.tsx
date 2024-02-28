import '../css/projectscarousel.css';
import '../css/general.css';
import projectItems from './ProjectItems';

import divider_icon from '../icons/separator_black.png';

const projectItem = (project: any) => {
    return (
        <div className='projcar-item'>
            <div  className='projcar-item-thumbnail-container' >
                <img className='projcar-item-thumbnail' src={project.thumbnail}/>
            </div>
            
            <div className='projcar-item-right'>
                <h1>{project.name}</h1>
                <p className='projcar-item-subtitle'>
                    {
                        project.project_types.map((type: string) => {
                            return <span>{type}&nbsp;&bull;&nbsp;</span>
                        })
                    }
                    {project.finished_date}
                </p>
                <p>{project.description}</p>
                <div className='projcar-item-right-links'>
                    &bull; Links:
                    {
                        project.links.map((data: { name: string, url: string }) => {
                            return <a href={data.url} target='_blank'>{data.name}</a>
                        })
                    }
                </div>
                <div className='projcar-item-icons-container'>
                    <div className='projcar-item-icons-container-icons'>
                        {
                            project.platform_icons.map((icon: any) => {
                                return <img src={icon}/>
                            })
                        }
                        <img className='projcar-item-icon-separator' src={divider_icon}/>
                        {
                            project.tool_icons.map((icon: any) => {
                                return <img src={icon}/>
                            })
                        }
                    </div>
                    <div className='projcar-item-icons-container-text'>
                        {project.platform_tools_text}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectsCarousel1() {
    return (
        <div className='projcar-container'>
            {projectItem(projectItems.dpm_safesteps)}
            {projectItem(projectItems.custom_dashboard_v2)}
            {projectItem(projectItems.hexagon_defense)}
        </div>
    );
}

function ProjectsCarousel2() {
    return (
        <div className='projcar-container'>
            {projectItem(projectItems.dpm_safesteps)}
            {projectItem(projectItems.custom_dashboard_v2)}
            {projectItem(projectItems.kams_hub)}
            {projectItem(projectItems.classchat)}
        </div>
    );
}

function ProjectsCarousel3() {
    return (
        <div className='projcar-container'>
            {projectItem(projectItems.sam)}
            {projectItem(projectItems.vex_robot)}
            {projectItem(projectItems.hexagon_defense)}
        </div>
    );
}

function ProjectsCarousel4() {
    return (
        <div className='projcar-container'>
            {projectItem(projectItems.route_recommendation)}
            {projectItem(projectItems.dpm_safeconnect)}
        </div>
    );
}

export {ProjectsCarousel1, ProjectsCarousel2, ProjectsCarousel3, ProjectsCarousel4};