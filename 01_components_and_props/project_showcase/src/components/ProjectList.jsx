import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = (props) => {

    const allProjects = props.projects.map(p => 
        <ProjectCard {...p} key={p.id} />
    )

    return (
        <section>
            <h2>Projects</h2>
            {/* ADD FILTER BUTTONS */}
            <ul className='cards'>{allProjects}</ul>
        </section>
    );
}

export default ProjectList;
