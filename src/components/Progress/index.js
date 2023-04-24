import React from "react";
import styles from "./progress.module.scss";

export default function ProgressBar(props) {
  return (
    <div className={styles.progress}>
      <span style={{ width: `${props.progress}%` }}></span>
    </div>
  );
}
