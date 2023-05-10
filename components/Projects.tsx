import portfolio from "@/data";
import styles from "@/styles/Projects.module.css";
import IndividualProject from "./IndividualProject";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import { portfolioContext } from "@/providers/PortfolioProvider";

type ProjectProps = {
  projectName: string;
  url: string;
  techImages: string[];
  tech: string[];
  about: string;
  image: string;
  video: string | null;
  screenshots: string[];
};

export default function Projects() {
  const { setSelected } = useContext(portfolioContext);
  const [ref, inView] = useInView({
    threshold: 0.376
  })
  const projects = portfolio.projects;

  inView ? setSelected("projects") : setSelected("off")

  return (
    <div className={styles.projectList} ref={ref} id="projectList">
      {projects.map((projectKeys: ProjectProps, index: number) => {
        return (
          <IndividualProject
            projectName={projectKeys.projectName}
            url={projectKeys.url}
            techImages={projectKeys.techImages}
            tech={projectKeys.tech}
            about={projectKeys.about}
            image={projectKeys.image}
            video={projectKeys.video}
            screenshots={projectKeys.screenshots}
            key={index}
          />
        );
      })}
    </div>
  );
}
