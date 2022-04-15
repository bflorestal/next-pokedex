import Head from "next/head";
import MainContext from "/contexts/Main";
import { useContext } from "react";

import { Footer, Header } from "/components/molecules";
import { Loading, PokemonType } from "/components/atoms";

import styles from "/styles/Types.module.scss";

export default function Types() {
  const { hasError, isLoading, types } = useContext(MainContext);

  if (hasError) return <p>Une erreur est survenue...</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Liste des types | Next Pokédex</title>
        <meta
          name="description"
          content="Liste des types que peuvent avoir les Pokémon"
        />
        <meta
          name="keywords"
          content="Types, pokedex, nextjs, react, reactjs, pokemon"
        />
        <meta name="creator" content="Bryan Florestal" />
        <meta property="og:site_name" content="Next Pokédex"></meta>
        <meta name="theme-color" content="#483d8b" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Types</h1>

        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.typesContainer}>
            <ul className={styles.typeList}>
              {types.map((e, index) => (
                <li key={index}>
                  <div className={styles.types}>
                    <PokemonType type={e.name} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
