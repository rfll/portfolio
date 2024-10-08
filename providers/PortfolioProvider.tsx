import { createContext, useState, useEffect } from "react";
import portfolio from "@/data";

export type CustomProps = {
  index: number;
  activeClass: { fade: string };
  phraseArray: string[];
  selected: string;
  setSelected: (selected: string) => void;
};

const initialState: CustomProps = {
  index: 0,
  activeClass: { fade: "fadeIn" },
  phraseArray: portfolio.descriptions,
  selected: "off",
  setSelected: () => {},
};

export const portfolioContext = createContext(initialState);

type Props = {
  children: React.ReactNode;
};

export default function PortfolioProvider({ children }: Props) {
  const [index, setIndex] = useState(0);
  const [activeClass, setActiveClass] = useState({ fade: "fadeIn" });
  const [selected, setSelected] = useState("off");

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
    const fadeTimer = setTimeout(() => {
      activeClass.fade === "fadeIn" && setActiveClass({ fade: "fadeOut" });
    }, fadeMilliseconds);

    if (document.visibilityState === "hidden") {
      clearTimeout(fadeTimer);
      return;
    }

    return () => clearTimeout(fadeTimer);
  }, [activeClass]);

  useEffect(() => {
    const arrayTimer = setTimeout(() => {
      setActiveClass({ fade: "fadeIn" });
      setIndex((index + 1) % phraseArray.length);
    }, arrayMilliseconds);

    if (document.visibilityState === "hidden") {
      clearTimeout(arrayTimer);
      return;
    }

    return () => clearTimeout(arrayTimer);
  }, [index]);

  const portfolioProps = {
    index,
    activeClass,
    phraseArray,
    selected,
    setSelected,
  };

  return (
    <portfolioContext.Provider value={portfolioProps}>
      {children}
    </portfolioContext.Provider>
  );
}
