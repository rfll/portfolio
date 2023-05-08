import { useState, useContext } from "react";
import styles from "@/styles/Projects.module.css";
import { portfolioContext } from "@/providers/PortfolioProvider";
import IndividualButton from "./IndividualButton";

export default function IndividualProject(props: any) {
  // const { clickProject } = useContext(portfolioContext);
  const [expand, setExpand] = useState(false);

  return (
    <div
      className={expand ? styles.projectClicked : styles.project}
      key={props.projectKeys.projectName}
    >
      <div className={styles.headline}>
        <div className={styles.headlineText}>
          {props.projectKeys.projectName}
        </div>
      </div>
      <div className={expand ? styles.contentClicked : styles.content}>
        <div className={styles.contentTopRow}>
          <img
            className={styles.projectImage}
            src={props.projectKeys.image}
            alt="image"
          />
          <div className={styles.contentRightColumn}>
            <div className={styles.about}>{props.projectKeys.about}</div>
            <div className={styles.techStack}>
              {props.projectKeys.techImages.map(
                (projectTech: any, index: number) => {
                  const techWords = props.projectKeys.tech[index];
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
            {props.projectKeys.video ? (
              <video
                className={styles.videoPlayer}
                src={props.projectKeys.video}
                controls={true}
              ></video>
            ) : (
              <div className={styles.screenshotGrid}>
                {props.projectKeys.screenshots.map((screenshots: string) => {
                  return (
                    <img
                      className={styles.projectScreenshot}
                      src={screenshots}
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
