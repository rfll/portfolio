import { useState, useContext } from "react";
import styles from "@/styles/Projects.module.css";
import IndividualButton from "./IndividualButton";
import TechnologyRow from "./TechnologyRow";
import Project from "@/models/project";

type ProjectProps = {
  project: Project;
};

export default function IndividualProject(props: ProjectProps) {
  const [expand, setExpand] = useState(false);

  return (
    <div
      className={expand ? styles.projectClicked : styles.project}
      key={props.project.projectName}
    >
      <div className={styles.headline}>
        <div className={styles.headlineText}>{props.project.projectName}</div>
      </div>
      <div className={expand ? styles.contentClicked : styles.content}>
        <div className={styles.contentTopRow}>
          <img
            className={styles.projectImage}
            src={props.project.image}
            alt="image"
          />
          <div className={styles.contentRightColumn}>
            <div className={styles.about}>{props.project.about}</div>
            <div className={styles.techStack}>
              {props.project.technologies.map((tech) => (
                <TechnologyRow technology={tech} />
              ))}
            </div>
          </div>
        </div>
        {expand && (
          <div className={styles.contentBottomRow}>
            {props.project.video ? (
              <video
                className={styles.videoPlayer}
                src={props.project.video}
                controls={true}
              ></video>
            ) : (
              <div className={styles.screenshotGrid}>
                {props.project.screenshots.map((screenshot: string) => {
                  return (
                    <img
                      className={styles.projectScreenshot}
                      src={screenshot}
                      alt="image"
                    />
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
      <IndividualButton
        onClick={() => {
          setExpand(!expand);
        }}
        expand={expand}
      />
    </div>
  );
}
