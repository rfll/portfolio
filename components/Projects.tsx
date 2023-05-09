import portfolio from "@/data";
import styles from "@/styles/Projects.module.css";
import { useState, useContext } from "react";
import { portfolioContext } from "@/providers/PortfolioProvider";
import IndividualProject from "./IndividualProject";

export default function Projects() {
  const projects = portfolio.projects;

  return (
    <div className={styles.projectList}>
      {projects.map((projectKeys, index) => {
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
