import portfolio from "@/data";
import styles from "@/styles/Projects.module.css";
import { Fragment } from "react";

export default function Projects() {
  return (
    <div className={styles.projectList}>
      {portfolio.projects.map((projectKeys) => {
        return (
          <div className={styles.project}>
            <div className={styles.headline}>
              <div className={styles.headlineText}>
                {projectKeys.projectName}
              </div>
            </div>
            <div className={styles.content}>
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
                      <div className={styles.techLogoLanguage}>
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
