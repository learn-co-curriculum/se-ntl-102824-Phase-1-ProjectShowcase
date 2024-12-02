import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const ProjectListItem = ({ project, onDeleteProject }) => {
  const { id, image, about, name, link, phase, claps } = project;

  const [clapCount, setClapCount] = useState(claps);

  const handleClap = () => {
    fetch(`http://localhost:4000/projects/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({claps: claps + 1})
    })
    setClapCount(clapCount + 1)
  };

  // const handleEditClick = () => {
  //   onEditProject(project);
  // };

  const handleDeleteClick = () => {
    onDeleteProject(id);
    fetch(`http://localhost:4000/projects/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <li className="card">
      <figure className="image">
        <Link to={`/projects/${id}`}>
          <img
            src={image}
            alt={name}
          />
        </Link>
        <button
          onClick={handleClap}
          className="claps"
        >
          👏{clapCount}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div className="manage">
          <Link
            to={`/projects/${id}/edit`}
            className="button"
          >
            <FaPencilAlt />
          </Link>
          <button onClick={handleDeleteClick}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectListItem;
