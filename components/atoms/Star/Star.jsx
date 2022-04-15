import styles from "./Star.module.scss";

export default function Star({ children, data, handleClick }) {
  return (
    <svg
      height="25"
      width="23"
      className={styles.star}
      onClick={() => handleClick(data)}
    >
      <polygon
        className={children ? styles.gold : styles.simple}
        points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
      />
    </svg>
  );
}
