import { useState } from "react";
import React from "react";
import styles from "./selection.module.scss";

export function HorizontalSelection(props) {
  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <div className={styles.horizontal_container}>
      {React.Children.map(props.children, (child, index) => {
        return (
          <div
            className={styles.horizontal_item}
            key={index}
            onClick={() => {
              handleClick(index);
            }}
            style={{
              background: index === selected ? "var(--accent_base)" : "none",
              color:
                index === selected
                  ? "var(--text_primary)"
                  : "var(--transparent)",
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

export function VerticalSelection(props) {
  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <div className={styles.vertical_container}>
      {React.Children.map(props.children, (child, index) => {
        return (
          <div
            className={styles.vertical_item}
            key={index}
            onClick={() => {
              handleClick(index);
            }}
            style={{
              background: index === selected ? "var(--accent_base)" : "none",
              color:
                index === selected
                  ? "var(--text_primary)"
                  : "var(--transparent)",
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
