import styles from "@/styles/Intro.module.css";
import { useContext } from "react";
import { portfolioContext } from "@/providers/PortfolioProvider";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const { activeClass, index, phraseArray, setSelected } = useContext(
    portfolioContext
  );
  const [ref, inView] = useInView({
    threshold: 0.6
  });

  inView && setSelected("off");

  return (
    <main className={styles.main} ref={ref}>
      <div className={styles.profile}>
        <div className={styles.name}></div>
        <div className={styles[activeClass.fade]}>{phraseArray[index]}</div>
      </div>
    </main>
  );
}
