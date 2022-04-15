import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./Header.module.scss";

export default function Header() {
  const [navToggled, setNavToggled] = useState(false);

  const handleClick = () => {
    setNavToggled(!navToggled);
  };

  useEffect(() => {}, [navToggled]);

  return (
    <header
      className={`${styles.header} ${navToggled ? styles.header__open : ""}`}
    >
      <section className={styles.header__content}>
        <div className={styles.brand}>
          <Link href="/">
            <a className={styles.brand__link}>Next Pokédex</a>
          </Link>
        </div>

        <nav className={styles.menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link href="/pokedex">
                <a className={styles.menu__link}>Pokédex</a>
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link href="/types">
                <a className={styles.menu__link}>Types</a>
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link href="/favoris">
                <a className={styles.menu__link}>Favoris</a>
              </Link>
            </li>
          </ul>
        </nav>

        <button className={styles.header__icon} onClick={() => handleClick()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </section>
    </header>
  );
}
