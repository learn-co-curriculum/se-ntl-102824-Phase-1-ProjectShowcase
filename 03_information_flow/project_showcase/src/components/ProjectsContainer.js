import React, { useState } from 'react';
import ProjectForm from "./ProjectForm";
import ProjectList from './ProjectList';

const ProjectsContainer = () => {
    const [projects, setProjects] = useState([])

    const loadProjects = () => {
        fetch("http://localhost:4000/projects")
        .then(res => res.json())
        .then(projects => setProjects(projects))
    }

    return (
        <>
            <ProjectForm />
            <ProjectList projects={projects} loadProjects={loadProjects} />
        </>
    );
}

export default ProjectsContainer;

// add component to App, refactor ProjectList/Form to be in ProjectsContainer :check:
