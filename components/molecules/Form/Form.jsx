import styles from "./Form.module.scss";

export default function Form({ value }) {
  return (
    <input
      type="text"
      className={styles.search}
      defaultValue={value}
      placeholder="Rechercher..."
    />
  );
}
