import portfolio from "@/data";
import styles from "@/styles/Projects.module.css";
import { useState } from "react";

export default function Projects(props: any) {
  const [activeProject, setActiveProject] = useState(false);
  const [newIndex, setNewIndex] = useState(null);

  const clickProject = function (index: any, projectKeys: any) {
    setNewIndex(index);
    setActiveProject(!activeProject);

    !projectKeys.open ? (projectKeys.open = true) : (projectKeys.open = false);
    console.log(projectKeys.open);
  };

  return (
    <div className={styles.projectList}>
      {portfolio.projects.map((projectKeys, index) => {
        return (
          <div
            className={
              projectKeys.open
                ? styles.projectClicked
                : styles.project
            }
            key={projectKeys.projectName}
            onClick={() => {
              clickProject(index, projectKeys);
            }}
          >
            <div className={styles.headline}>
              <div className={styles.headlineText}>
                {projectKeys.projectName}
              </div>
            </div>
            <div
              className={
                projectKeys.open
                  ? styles.contentClicked
                  : styles.content
              }
            >
              <img
                className={styles.projectImage}
                src={projectKeys.image}
                alt="image"
              />
              <div className={styles.contentRightColumn}>
                <div className={styles.about}>{projectKeys.about}</div>
                <div className={styles.techStack}>
                  {projectKeys.techImages.map((projectTech, index) => {
                    const techWords = projectKeys.tech[index];
                    return (
                      <div className={styles.techLogoLanguage} key={index}>
                        <img
                          className={styles.tech}
                          src={projectTech}
                          alt="tech"
                        />
                        <div className={styles.techName}>{techWords}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
