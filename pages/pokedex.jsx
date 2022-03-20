import Head from "next/head";
import MainContext from "../contexts/Main";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Footer, Form, Header, PokemonList } from "../components/molecules";
import { Loading } from "../components/atoms";

import styles from "../styles/Pokedex.module.scss";

export default function Pokedex() {
  const { handleChange, filteredData, hasError, isLoading } =
    useContext(MainContext);
  const router = useRouter();

  if (hasError) return <p>Une erreur est survenue...</p>;

  useEffect(() => {
    // router.push("/pokedex?test=1", undefined, { shallow: true });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Liste des Pokémon | Next Pokédex</title>
        <meta
          name="description"
          content="Pokédex en Next.js avec la liste des Pokémon, leurs caractéristiques ainsi que la liste des types."
        />
        <meta
          name="keywords"
          content="Pokedex, pokedex, nextjs, react, reactjs, pokemon"
        />
        <meta name="creator" content="Bryan Florestal" />
        <meta property="og:site_name" content="Next Pokédex"></meta>
        <meta name="theme-color" content="#483d8b" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Pokédex</h1>

        <Form handleChange={handleChange} />

        {isLoading ? <Loading /> : <PokemonList data={filteredData} />}
      </main>

      <Footer />
    </div>
  );
}
