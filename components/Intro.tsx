import styles from "@/styles/Intro.module.css";
import { useContext } from "react";
import { portfolioContext } from "@/providers/PortfolioProvider";

export default function Intro() {
  const { activeClass, index, phraseArray } = useContext(portfolioContext);

  return (
    <main className={styles.main}>
      <div className={styles.profile}>
        <div className={styles.name}></div>
        <div className={styles[activeClass.fade]}>{phraseArray[index]}</div>
      </div>
    </main>
  );
}
