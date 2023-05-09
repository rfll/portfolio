import portfolio from "@/data";
import styles from "@/styles/Intro.module.css";
import { useState, useEffect } from "react";

export default function Intro() {
  const [index, setIndex] = useState(0);
  const [activeClass, setActiveClass] = useState({ fade: "fadeIn" });

  const phraseArray = portfolio.descriptions;

  const fadeMilliseconds = 2000;
  const arrayMilliseconds = fadeMilliseconds * 2;

  if (typeof document !== "undefined") {
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        return;
      }

      if (document.visibilityState === "visible") {
        setActiveClass({ fade: "fadeIn" });
        setIndex((index + 1) % phraseArray.length);
        return;
      }
    });
  }

  useEffect(() => {
    if (document.visibilityState === "hidden") {
      return;
    }
    const fadeTimer = setTimeout(() => {
      activeClass.fade === "fadeIn" && setActiveClass({ fade: "fadeOut" });
    }, fadeMilliseconds);
  }, [activeClass]);

  useEffect(() => {
    if (document.visibilityState === "hidden") {
      return;
    }
    const arrayTimer = setTimeout(() => {
      setActiveClass({ fade: "fadeIn" });
      setIndex((index + 1) % phraseArray.length);
    }, arrayMilliseconds);
  }, [index]);

  return (
    <main className={styles.main}>
      <div className={styles.profile}>
        <div className={styles.name}></div>
        <div className={styles[activeClass.fade]}>{phraseArray[index]}</div>
      </div>
    </main>
  );
}
