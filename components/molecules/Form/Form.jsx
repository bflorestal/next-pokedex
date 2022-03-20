import styles from "./Form.module.scss";

export default function Form({ handleChange, value }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.search__bar}
        defaultValue={value}
        onChange={handleChange}
        placeholder="Rechercher..."
      />
      <input
        type="submit"
        className={styles.search__btn}
        value="🔎"
        onClick={() => {
          alert("Bravo ! Tu as gagné un iPhone 11 !");
        }}
      ></input>
    </div>
  );
}
