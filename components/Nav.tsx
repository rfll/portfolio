import styles from "@/styles/Nav.module.css";
import portfolio from "@/data";
import { useContext, useState } from "react";
import { portfolioContext } from "@/providers/PortfolioProvider";
import { useInView } from "react-intersection-observer";

export default function Nav() {
  const { selected, setSelected } = useContext(portfolioContext);
  const [ref, inView] = useInView();
  const contactIcons = portfolio.contactIcons;

  return (
    <div className={styles.nav}>
      <div className={styles.leftNav}>
        <div
          className={
            selected === "projects" ? styles.navCatClicked : styles.navCat
          }
          onClick={() => {
            document
              .getElementById("projectAnchor")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Projects
        </div>
        <div
          className={
            selected === "about" ? styles.navCatClicked : styles.navCat
          }
          onClick={() =>
            document
              .getElementById("aboutAnchor")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          About
        </div>
      </div>
      <div
        className={styles.header}
        onClick={() => {
          setSelected("off");
          scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        Ryan Fortin
      </div>
      <div className={styles.rightNav}>
        {contactIcons.map((icons) => {
          return <img className={styles.icons} src={icons} alt="contactIcon" />;
        })}
      </div>
    </div>
  );
}
