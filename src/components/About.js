import React from "react";
import "../styles/About.css";
const skills = [
  "Javascript(ES6+)/Typescript",
  "React.js",
  "Node.js",
  "MongoDB/MySQL",
  "HTML5/CSS3",
  "C++",
];

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <h1 className="about__title">About Me</h1>
        <p className="about__text">
          Hello, I am Albenis. I am Frontend Developer, located near Kosovo. My
          interest in frontend/full stack development started back in 2020 when
          I started to built a full stack application using React and Node.js
          that taught me a lot about JavaScript, HTML & CSS!
        </p>
        <h2 className="about__subtext">
          Some technologies I have been recently working with:
        </h2>
        <div className="about__skills">
          {skills.map((skill) => (
            <h4 className="about__skills__title">{skill}</h4>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
