import styles from "@/styles/IndividualButton.module.css";

type ButtonProps = {
  expand: boolean;
  onClick: () => void
}

export default function IndividualButton(props: ButtonProps) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {!props.expand ? (
        <div className={styles.buttonText}>
          See More
          <img
            className={styles.buttonArrow}
            src="chevrons-down.svg"
            alt="arrow"
          />
        </div>
      ) : (
        <div className={styles.buttonText}>
          See Less
          <img
            className={styles.buttonArrow}
            src="chevrons-up.svg"
            alt="arrow"
          />
        </div>
      )}
    </button>
  );
}
