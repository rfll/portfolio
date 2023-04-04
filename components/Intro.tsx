import styles from "@/styles/Intro.module.css";

export default function Intro() {
  return (
    <main className={styles.main}>
      <div>
        <img className={styles.profile} src="/profile.jpg" alt="image" />
        <div className={styles.name}>Ryan Fortin</div>
      </div>
      <p className={styles.bio}>blah blah blah blah blah</p>
    </main>
  );
}
