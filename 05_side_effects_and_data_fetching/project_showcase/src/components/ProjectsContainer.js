import { useState } from 'react';

import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  const onLoadProjects = () => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projectsData) => setProjects(projectsData));
  }

  const addProject = (project) => {
    setProjects(prevProjects => [...prevProjects, project])
  }

  return (
    <>
      <ProjectForm 
        addProject={addProject}
      />
      <ProjectList
        onLoadProjects={onLoadProjects}
        projects={projects}
      />
    </>
  )
}

export default ProjectsContainer;