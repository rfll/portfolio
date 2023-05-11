import { portfolioContext } from "@/providers/PortfolioProvider";
import styles from "@/styles/About.module.css";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { setSelected } = useContext(portfolioContext);
  const [ref, inView] = useInView({
    threshold: 0.6
  });

  inView && setSelected("about");

  return <div className={styles.about} ref={ref}></div>;
}
