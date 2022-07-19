import React from "react";
import "../styles/Technologies.css";
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
    <section className="technologies">
      <div className="technologies__container">
        <h1 className="technologies__title">Technologies</h1>
        <h2 className="technologies__subtitle">
          Some other technologies I have been using recently:
        </h2>
        <div className="technologies__skills">
          {technologies.map((tech, i) => (
            <div key={i} className="technologies__skills__item">
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
