import Link from "next/link";
import type { Metadata } from "next";

import styles from "../styles/Home.module.scss";

export const metadata: Metadata = {
  title: "Accueil | Next Pokédex",
  openGraph: {
    siteName: "Next Pokédex",
  },
};

export default function Home() {
  return (
    <div className={styles.heroWrapper}>
      <h1 className={styles.title}>Bienvenue sur mon Pokédex en Next.js !</h1>

      <p className={styles.description}>
        Commencez par <Link href="/pokedex">chercher un Pokémon</Link>
      </p>
    </div>
  );
}
