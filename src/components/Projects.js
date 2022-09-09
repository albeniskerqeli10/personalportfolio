import { lazy, Suspense, useEffect, useState } from "react";
import styles from "../styles/Projects.module.css";
const Project = lazy(() => import("./UI/Project"))

const Projects = () => {
  const [projects, setProjects] = useState([]);
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
    <section id="projects" className={styles.projects}>
      <div className={styles.projects__container}>
        <h1 className={styles.projects__title}>Projects</h1>
        <div className={styles.projects__grid}>
         <Suspense fallback={<h1>Loading...</h1>}>
         {projects.map((project, i) => (
            <Project key={i} project={project} />
          ))}
         </Suspense>
        </div>
      </div>
    </section>
  );
};
export default Projects;
