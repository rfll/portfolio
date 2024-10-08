import { useState, useContext, useRef } from "react";
import styles from "@/styles/Projects.module.css";
import IndividualButton from "./IndividualButton";
import TechnologyRow from "./TechnologyRow";
import Project from "@/models/project";
import { useInView } from "react-intersection-observer";

type ProjectProps = {
  project: Project;
};

export default function IndividualProject(props: ProjectProps) {
  const [expand, setExpand] = useState(false);
  const {ref, inView} = useInView({
    threshold: 0,
    rootMargin: "-30% 0% -70% 0%",
  });

  if (!props.project) {
    return null;
  }

  return (
    <div
      className={expand ? styles.projectClicked : styles.project}
      id={inView ? styles.projectInView : styles.project}
      key={props.project.projectName}
      ref={ref}
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
                <TechnologyRow technology={tech} key={tech} />
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
                      key={screenshot}
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
