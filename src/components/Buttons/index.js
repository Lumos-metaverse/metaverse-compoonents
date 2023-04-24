import React from "react";
import styles from "./buttons.module.scss";

export function PrimaryButton(props) {
  return (
    <button onClick={props.onClick} type="button" className={styles.primary}>
      {props.children}
    </button>
  );
}

export function SecondaryButton(props) {
  return (
    <button onClick={props.onClick} className={styles.Secondary}>
      {props.children}
    </button>
  );
}

export function TertiaryButton(props) {
  return (
    <button onClick={props.onClick} className={styles.Tertiary}>
      {props.children}
    </button>
  );
}

export function DangerButton(props) {
  return (
    <button onClick={props.onClick} className={styles.Danger}>
      {props.children}
    </button>
  );
}

export function TextButton(props) {
  return (
    <button onClick={props.onClick} className={styles.Text}>
      {props.children}
    </button>
  );
}
