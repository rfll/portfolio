import styles from "@/styles/Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projectList}>
      <div className={styles.project}>
        <div className={styles.headline}>Project header</div>
        <div className={styles.content}>Project content with dropdown</div>
      </div>
    </div>
  );
}
