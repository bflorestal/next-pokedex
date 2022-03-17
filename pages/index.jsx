import Head from "next/head";
import Link from "next/link";

import { Header } from "../components/molecules";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Pokédex</title>
        <meta
          name="description"
          content="Pokédex en Next.js avec la liste des Pokémon, leurs caractéristiques ainsi que la liste des types."
        />
        <meta
          name="keywords"
          content="Pokedex, pokedex, nextjs, react, reactjs, pokemon"
        />
        <meta name="creator" content="Bryan Florestal" />
        <meta property="og:site_name" content="Accueil | Next Pokédex"></meta>
        <meta name="theme-color" content="#483d8b" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenue sur mon Pokédex en Next.js !</h1>

        <p className={styles.description}>
          Commencez par{" "}
          <Link href="/pokedex">
            <a>chercher un Pokémon</a>
          </Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <p>© Bryan Florestal 2022 - Tous droits réservés</p>
      </footer>
    </div>
  );
}
