import styles from "@/styles/Intro.module.css";
import { useContext, useEffect } from "react";
import { portfolioContext } from "@/providers/PortfolioProvider";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const { activeClass, index, phraseArray, setSelected, selected } = useContext(
    portfolioContext
  );
  const [ref, inView] = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    inView && setSelected("off");
  }, [inView, setSelected]);

  return (
    <main className={styles.main} ref={ref}>
      <div className={styles.profile}>
        <div className={styles.name}></div>
        <div className={styles[activeClass.fade]}>{phraseArray[index]}</div>
      </div>
    </main>
  );
}
