import Head from "next/head";
import MainContext from "../../contexts/Main";
import { useContext } from "react";

import { Footer, Form, Header, PokemonList } from "../../components/molecules";
import { Loading } from "../../components/atoms";

import styles from "../../styles/Pokedex.module.scss";

export default function Details({ data, filteredData, typeNotFound }) {
  const { handleChange, hasError, isLoading } = useContext(MainContext);

  const currentType = data.name
    .split(" ")
    .map((l) => l.charAt(0).toUpperCase() + l.substr(1))
    .join(" ");

  if (hasError) return <p>Une erreur est survenue...</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokémon de type {currentType} | Next Pokédex</title>
        <meta
          name="keywords"
          content={`Pokedex, pokedex, ${currentType}, nextjs, react, reactjs, pokemon`}
        />
        <meta name="creator" content="Bryan Florestal" />
        <meta name="theme-color" content="#483d8b" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Pokédex</h1>

        {/* <Form handleChange={handleChange} /> */}

        {isLoading ? <Loading /> : <PokemonList data={filteredData} />}
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const typeName = query.slug;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`);
    if (response.status === 404) {
      const typeNotFound = true;
      return { props: { typeNotFound } };
    }
    const data = await response.json();
    const filteredData = data.pokemon.map((el) => el.pokemon);

    return {
      props: { data, filteredData },
    };
  } catch (err) {
    throw err;
  }
}
