import { useEffect, useState } from "react";
import Project from "./UI/Project";
import "../styles/Projects.css";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://api.npoint.io/02b275f9eee861099e0b", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);
  return (
    <section className="projects">
      <div className="projects__container">
        <h1 className="projects__title">Projects</h1>
        <div className="projects__grid">
          {projects.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
