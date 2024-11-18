import React from 'react';

const ProjectCard = (props) => {
    console.log(props.project.name)
    return (
        <li className='card'>
            <figure className="image">
                <img src={props.project.image} alt={"Image of" + props.project.name} />
                <button className="claps">👏{0}</button>
            </figure>        

            <section className="details">
                <h4>{props.project.name}</h4>
                <p>{props.project.about}</p>
                <a href={props.project.link}>LINK</a>
            </section>    

            <footer className="extra">
                <span className="badge blue">Phase {props.project.phase}</span>
            </footer>
        </li>
    );
}

export default ProjectCard;
