import { portfolioContext } from "@/providers/PortfolioProvider";
import styles from "@/styles/About.module.css";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import portfolio from "@/data";

export default function About() {
  const { setSelected } = useContext(portfolioContext);
  const [ref, inView] = useInView({
    threshold: 0.6,
  });

  const bioTitle = portfolio.bioTitle;
  const bio = portfolio.bio;
  const photo = portfolio.photo;

  inView && setSelected("about");

  return (
    <div className={styles.about} ref={ref}>
      <div className={styles.photoBioContainer}>
        <h1 className={styles.bioTitle}>{bioTitle}</h1>
        <div className={styles.allPhotos}>
          {photo.map((photos: any, index: number) => {
            return (
              <img
                className={styles.photo}
                id={styles[index]}
                src={photos}
                alt="photo"
                key={index}
              />
            );
          })}
        </div>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
}
