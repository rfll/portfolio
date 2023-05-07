import styles from "@/styles/IndividualButton.module.css"

export default function IndividualButton(props: any) {
  return (
    <button className={styles.button} onClick={props.onClick}>{!props.expand ? <div className={styles.buttonText}>See More</div> : <div className={styles.buttonText}>See Less</div>}</button>
  )
} 