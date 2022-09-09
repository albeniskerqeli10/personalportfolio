import React from "react";
import styles from "../../styles/Project.module.css";
const Project = ({ project }) => {
  return (
    <article className={styles.project}>
      <img loading="lazy" src={project.image} alt={project.name} />
      <h1 className={styles.project__title}>{project.name}</h1>
      <p className={styles.project__desc}>{project.description}</p>
      <div className={styles.project__buttons}>
        <a className={styles.project__cta} href={project.url}>
          Live Demo
        </a>
        <a className={styles.project__cta} href={project.github}>
          Source Code
        </a>
      </div>
    </article>
  );
};

export default Project;
