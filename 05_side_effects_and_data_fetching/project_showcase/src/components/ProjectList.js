import { useEffect, useState } from 'react';
import ProjectListItem from "./ProjectCard";

const ProjectList = ({projects, setSelectedPhase, setSearchQuery}) => {
  const [tempSearch, setTempSearch] = useState("")

  const handleSearch = (e) => {
    setTempSearch(e.target.value)
  }

  useEffect(() => {
    const scheduledUpdate = setTimeout(() => {
      setSearchQuery(tempSearch)
    }, 500)

    return () => {
      clearTimeout(scheduledUpdate)
    }
  }, [tempSearch])

  const renderProjects = (projects) => {
    return projects.map(project => (
      <ProjectListItem
        key={project.id}
        {...project}
      />
    ))
  }

  return (
    <section>
      <h2>Projects</h2>
      <div className="filter">
        <button onClick={() => setSelectedPhase("")}>All</button>
        <button onClick={() => setSelectedPhase("5")}>Phase 5</button>
        <button onClick={() => setSelectedPhase("4")}>Phase 4</button>
        <button onClick={() => setSelectedPhase("3")}>Phase 3</button>
        <button onClick={() => setSelectedPhase("2")}>Phase 2</button>
        <button onClick={() => setSelectedPhase("1")}>Phase 1</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        value={tempSearch}
      />

      <ul className="cards">{renderProjects(projects)}</ul>
    </section>
  );
};

export default ProjectList;