"use client";

import Link from "next/link";
import { useState } from "react";

import styles from "./Header.module.scss";

export default function Header() {
  const [navToggled, setNavToggled] = useState(false);

  const handleClick = () => {
    setNavToggled(!navToggled);
  };

  return (
    <header
      className={`${styles.header} ${navToggled ? styles.header__open : ""}`}
    >
      <section className={styles.header__content}>
        <div className={styles.brand}>
          <Link href="/" className={styles.brand__link}>
            Next Pokédex
          </Link>
        </div>

        <nav className={styles.menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link href="/pokedex" className={styles.menu__link}>
                Pokédex
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link href="/types" className={styles.menu__link}>
                Types
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link href="/favoris" className={styles.menu__link}>
                Favoris
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
