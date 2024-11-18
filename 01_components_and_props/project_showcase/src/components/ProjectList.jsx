import React from 'react';
import projects from '../projects';
import ProjectCard from './ProjectCard';

const ProjectList = () => {

    return (
        <div>
            <h3>All my projects</h3>
            <ProjectCard project={projects[0]} />
        </div>
    );
}

export default ProjectList;
