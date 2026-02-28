"use client";

import { Footer, Header, PokemonList } from "../../../components/molecules";

import type { NamedAPIResource, TypeDetailResponse } from "../../../lib/schemas";

import styles from "../../../styles/Pokedex.module.scss";

interface TypeDetailsClientProps {
  data: TypeDetailResponse;
  filteredData: NamedAPIResource[];
}

export default function TypeDetailsClient({
  data,
  filteredData,
}: TypeDetailsClientProps) {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Pokédex</h1>

        <PokemonList data={filteredData} />
      </main>

      <Footer />
    </div>
  );
}
