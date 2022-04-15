import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.header__content}>
        <div className={styles.brand}>
          <Link href="/">
            <a className={styles.brand__link}>Next Pokédex</a>
          </Link>
        </div>
        <nav className={styles.menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link href="/types">
                <a className={styles.menu__link}>Types</a>
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link href="/pokedex">
                <a className={styles.menu__link}>Pokédex</a>
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link href="/favoris">
                <a className={styles.menu__link}>Favoris</a>
              </Link>
            </li>
          </ul>
        </nav>
        <button className={styles.header__icon}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </section>
    </header>
  );
}
