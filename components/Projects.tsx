import portfolio from "@/data";
import styles from "@/styles/Projects.module.css";
import IndividualProject from "./IndividualProject";

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
  const projects = portfolio.projects;

  return (
    <div className={styles.projectList}>
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
