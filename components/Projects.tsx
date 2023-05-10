import portfolio from "@/data";
import styles from "@/styles/Projects.module.css";
import IndividualProject from "./IndividualProject";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import { portfolioContext } from "@/providers/PortfolioProvider";
import Project from "@/models/project";


export default function Projects() {
  const { setSelected } = useContext(portfolioContext);
  const [ref, inView] = useInView({
    threshold: 0.376,
  });
  const projects = portfolio.projects;

  inView && setSelected("projects");

  return (
    <div className={styles.projectList} ref={ref} id="projectList">
      {projects.map((project: Project, index: number) => {
        return (
          <IndividualProject
            project={project}
            key={index}
          />
        );
      })}
    </div>
  );
}
