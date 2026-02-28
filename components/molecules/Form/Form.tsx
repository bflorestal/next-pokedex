import type { ChangeEvent } from "react";

import styles from "./Form.module.scss";

interface FormProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export default function Form({ handleChange, value }: FormProps) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.search__bar}
        value={value ?? ""}
        onChange={handleChange}
        placeholder="Rechercher..."
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.search__icon}
      >
        <path d="m21 21-4.34-4.34" />
        <circle cx="11" cy="11" r="8" />
      </svg>
    </div>
  );
}
