import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../projects";

const ProjectList = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = searchQuery ? projects.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())) : projects

  const projectCards = filteredProjects.map(project => {
    return <ProjectCard key={project.id} project={project} />
  })

  const handleSearch = e => {
    console.log(searchQuery)
    setSearchQuery(e.target.value)
  }

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input 
        type="text" 
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />

      <ul className="cards">{projectCards}</ul>
    </section>
  );
};

export default ProjectList;
