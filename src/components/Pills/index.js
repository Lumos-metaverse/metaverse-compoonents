import React from "react";
import styles from "./pills.module.scss";

export function PrimaryPill({ children }) {
  return <div className={styles.primary}>{children}</div>;
}

export function SecondaryPill({ children }) {
  return <div className={styles.Secondary}>{children}</div>;
}

export function TertiaryPill({ children }) {
  return <div className={styles.Tertiary}>{children}</div>;
}
