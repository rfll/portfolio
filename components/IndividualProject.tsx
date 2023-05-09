import { useState, useContext } from "react";
import styles from "@/styles/Projects.module.css";
import IndividualButton from "./IndividualButton";

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

export default function IndividualProject(props: ProjectProps) {
  const [expand, setExpand] = useState(false);

  return (
    <div
      className={expand ? styles.projectClicked : styles.project}
      key={props.projectName}
    >
      <div className={styles.headline}>
        <div className={styles.headlineText}>
          {props.projectName}
        </div>
      </div>
      <div className={expand ? styles.contentClicked : styles.content}>
        <div className={styles.contentTopRow}>
          <img
            className={styles.projectImage}
            src={props.image}
            alt="image"
          />
          <div className={styles.contentRightColumn}>
            <div className={styles.about}>{props.about}</div>
            <div className={styles.techStack}>
              {props.techImages.map(
                (projectTech: string, index: number) => {
                  const techWords = props.tech[index];
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
                }
              )}
            </div>
          </div>
        </div>
        {expand && (
          <div className={styles.contentBottomRow}>
            {props.video ? (
              <video
                className={styles.videoPlayer}
                src={props.video}
                controls={true}
              ></video>
            ) : (
              <div className={styles.screenshotGrid}>
                {props.screenshots.map((screenshot: string) => {
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
