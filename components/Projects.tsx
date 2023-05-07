import portfolio from "@/data";
import styles from "@/styles/Projects.module.css";
import { useState, useContext } from "react";
import { portfolioContext } from "@/providers/PortfolioProvider";
import IndividualProject from "./IndividualProject";

export default function Projects(props: any) {
  return (
    <div className={styles.projectList}>
      {portfolio.projects.map((projectKeys, index) => {
        return (
          <IndividualProject
            projectKeys={projectKeys}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
}
