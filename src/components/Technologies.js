import React from "react";
import styles from "../styles/Technologies.module.css";
import reduxImg from "../assets/images/redux.png";
import graphqlImg from "../assets/images/graphql.png";
import expressjsImg from "../assets/images/expressjs.png";
import firebaseImg from "../assets/images/firebase.png";
import restApi from "../assets/images/restapi.png";
import tailwindImg from "../assets/images/tailwindcss.png";
import styledcomponentsImg from "../assets/images/styledcomponents.png";
import gitImg from "../assets/images/git.png";
const technologies = [
  {
    name: "Redux",
    path: reduxImg,
  },
  {
    name: "GraphQL",
    path: graphqlImg,
  },
  {
    name: "ExpressJS",
    path: expressjsImg,
  },
  {
    name: "Firebase",
    path: firebaseImg,
  },
  {
    name: "API",
    path: restApi,
  },
  {
    name: "TailwindCSS",
    path: tailwindImg,
  },
  {
    name: "Styled Components",
    path: styledcomponentsImg,
  },
  {
    name: "Git",
    path: gitImg,
  },
];
const Technologies = () => {
  return (
    <section className={styles.technologies}>
      <div className={styles.technologies__container}>
        <h1 className={styles.technologies__title}>Technologies</h1>
        <h2 className={styles.technologies__subtitle}>
          Some other technologies I have been using recently:
        </h2>
        <div className={styles.technologies__skills}>
          {technologies.map((tech, i) => (
            <div key={i} className={styles.technologies__skills__item}>
              <img loading="lazy" src={tech.path} alt={tech.name} />
              <h4>{tech.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
