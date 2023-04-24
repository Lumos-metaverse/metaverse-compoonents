import React from "react";
import styles from "./fields.module.scss";

function SearchIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 45 45"
      fill="var(--text_primary)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M40.1388 37.0362L31.8691 28.7666C33.8601 26.1161 34.9349 22.89 34.9313 19.575C34.9313 11.1076 28.0424 4.21875 19.575 4.21875C11.1076 4.21875 4.21875 11.1076 4.21875 19.575C4.21875 28.0424 11.1076 34.9313 19.575 34.9313C22.89 34.9349 26.1161 33.8601 28.7666 31.8691L37.0362 40.1388C37.4548 40.513 38.0008 40.7127 38.5621 40.697C39.1233 40.6813 39.6573 40.4513 40.0543 40.0543C40.4513 39.6573 40.6813 39.1233 40.697 38.5621C40.7127 38.0008 40.513 37.4548 40.1388 37.0362ZM8.60625 19.575C8.60625 17.4056 9.24956 15.2849 10.4548 13.4811C11.6601 11.6773 13.3732 10.2714 15.3774 9.4412C17.3817 8.611 19.5872 8.39378 21.7149 8.81701C23.8426 9.24024 25.7971 10.2849 27.3311 11.8189C28.8651 13.3529 29.9098 15.3074 30.333 17.4351C30.7562 19.5628 30.539 21.7683 29.7088 23.7726C28.8786 25.7768 27.4727 27.4899 25.6689 28.6952C23.8651 29.9004 21.7444 30.5437 19.575 30.5437C16.667 30.5403 13.8791 29.3835 11.8228 27.3272C9.76649 25.2709 8.60974 22.483 8.60625 19.575Z" />
    </svg>
  );
}

export function SearchField(props) {
  return (
    <div className={styles.search_field_container}>
      <button onClick={props.onClick} type="button">
        <SearchIcon />
      </button>
      <input onInput={props.onInput} type="text" placeholder="Search..." />
    </div>
  );
}

export function InputField(props) {
  return (
    <div className={styles.input_field_container}>
      <input
        onClick={props.onClick}
        onInput={props.onInput}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export function TextAreaField(props) {
  return (
    <div className={styles.text_area_field_container}>
      <textarea
        onInput={props.onInput}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export function SelectField(props) {
  return (
    <div className={styles.select_field_container}>
      <select onChange={props.onChange}>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function DisplayField(props) {
  return (
    <div className={styles.display_field_container}>
      <span>{props.value}</span>
    </div>
  );
}

export function CheckboxField(props) {
  return (
    <div className={styles.checkbox_field_container}>
      <input
        onChange={props.onChange}
        type="checkbox"
        id={props.id}
        name={props.name}
        value={props.value}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export function RadioField(props) {
  return (
    <div className={styles.radio_field_container}>
      <input
        onChange={props.onChange}
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export function SwitchField(props) {
  return (
    <div className={styles.switch_field_container}>
      <input
        onChange={props.onChange}
        type="checkbox"
        id={props.id}
        name={props.name}
        value={props.value}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export function ColorSelectorField(props) {
  return (
    <div className={styles.color_selector_field_container}>
      <input
        onChange={props.onChange}
        type="color"
        id={props.id}
        name={props.name}
        value={props.value}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export function DateField(props) {
  return (
    <div className={styles.date_field_container}>
      <input
        onChange={props.onChange}
        type="date"
        id={props.id}
        name={props.name}
        value={props.value}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export function TimeField(props) {
  return (
    <div className={styles.time_field_container}>
      <input
        onChange={props.onChange}
        type="time"
        id={props.id}
        name={props.name}
        value={props.value}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export function RangeField(props) {
  return (
    <div className={styles.range_field_container}>
      <input
        onChange={props.onChange}
        type="range"
        id={props.id}
        name={props.name}
        value={props.value}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export function FileField(props) {
  return (
    <div className={styles.file_field_container}>
      <input
        onChange={props.onChange}
        type="file"
        id={props.id}
        name={props.name}
        value={props.value}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}
