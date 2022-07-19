import React from "react";
import "../../styles/Project.css";
const Project = ({ project }) => {
  return (
    <article className="project">
      <img loading="lazy" src={project.image} alt={project.name} />
      <h1 className="project__title">{project.name}</h1>
      <p className="project__desc">{project.description}</p>
      <div className="project__buttons">
        <a className="project__cta" href={project.url}>
          Live Demo
        </a>
        <a className="project__cta" href={project.github}>
          Source Code
        </a>
      </div>
    </article>
  );
};

export default Project;
