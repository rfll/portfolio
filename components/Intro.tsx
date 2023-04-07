import portfolio from "@/data";
import styles from "@/styles/Intro.module.css";

export default function Intro() {
  return (
    <main className={styles.main}>
      <div className={styles.profile}>
        <img className={styles.profileImage} src="/profile.jpg" alt="image" />
        <div className={styles.name}>Ryan Fortin</div>
      </div>
      <p className={styles.bio}>{portfolio.bio}</p>
    </main>
  );
}
