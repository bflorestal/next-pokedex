"use client";

import MainContext from "../../../contexts/Main";
import { useContext } from "react";

import { Footer, Header, PokemonList } from "../../../components/molecules";
import { Loading } from "../../../components/atoms";

import styles from "../../../styles/Pokedex.module.scss";

export default function TypeDetailsClient({ data, filteredData }) {
  const { hasError, isLoading } = useContext(MainContext);

  if (hasError) return <p>Une erreur est survenue...</p>;

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Pokédex</h1>

        {isLoading ? <Loading /> : <PokemonList data={filteredData} />}
      </main>

      <Footer />
    </div>
  );
}
