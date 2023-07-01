import React from "react";
import  styles from "../styles/About.module.css";
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
    <section id="about" className={styles.about}>
      <div className={styles.about__container}>
        <h1 className={styles.about__title}>About Me</h1>
        <p className={styles.about__text}>
          Hello, I am Albenis. I am Frontend Developer, living near
          Gjilan,Kosovo. My interest in frontend/full stack development started
          back in 2020 when I started to built a full stack application using
          React and Node.js that taught me a lot about JavaScript, HTML & CSS!
        </p>
        <h2 className={styles.about__subtext}>
          Some technologies I have been recently working with:
        </h2>
        <div className={styles.about__skills}>
          {skills.map((skill, i) => (
            <h4 key={i} className={styles.about__skills__title}>
              {skill}
            </h4>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
