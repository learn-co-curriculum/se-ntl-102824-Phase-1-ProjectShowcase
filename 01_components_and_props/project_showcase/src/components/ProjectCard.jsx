import React from 'react';

const ProjectCard = ({image, name, about, link, phase}) => {
    return (
        <li className='card'>
            <figure className="image">
                <img src={image} alt={"Image of" + name} />
                <button className="claps">👏{0}</button>
            </figure>        

            <section className="details">
                <h4>{name}</h4>
                <p>{about}</p>
                <a href={link}>LINK</a>
            </section>    

            <footer className="extra">
                <span className="badge blue">Phase {phase}</span>
            </footer>
        </li>
    );
}

export default ProjectCard;
