import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© Bryan Florestal {new Date().getFullYear()} - Tous droits réservés</p>
    </footer>
  );
}
