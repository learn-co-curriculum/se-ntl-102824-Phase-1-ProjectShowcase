import { useState, useEffect } from 'react';

import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    let url = `http://localhost:4000/projects`
    if (searchQuery && selectedPhase) {
        url += `?phase=${selectedPhase}&q=${searchQuery}`
    } else if (searchQuery) {
        url += `?q=${searchQuery}`
    } else if (selectedPhase) {
        url += `?phase=${selectedPhase}`
    }

    console.log(url)

    fetch(url)
    .then(res => res.json())
    .then(projectData => setProjects(projectData))
  }, [selectedPhase, searchQuery])

  const addProject = (project) => {
    setProjects(prevProjects => [...prevProjects, project])
  }

  return (
    <>
      <ProjectForm 
        addProject={addProject}
      />
      <ProjectList
        projects={projects}
        setSelectedPhase={setSelectedPhase}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  )
}

export default ProjectsContainer;