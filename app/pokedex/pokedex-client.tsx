"use client";

import { useQuery } from "@tanstack/react-query";
import { useQueryState, parseAsString } from "nuqs";
import { useMemo, useState, useEffect, type ChangeEvent } from "react";
import { PokemonListResponseSchema } from "../../lib/schemas";

import { Footer, Form, Header, PokemonList } from "../../components/molecules";
import { Loading } from "../../components/atoms";

import styles from "../../styles/Pokedex.module.scss";

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export default function PokedexClient() {
  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("")
  );
  const [inputValue, setInputValue] = useState(search);
  const debouncedValue = useDebounce(inputValue, 300);

  useEffect(() => {
    setSearch(debouncedValue || null);
  }, [debouncedValue, setSearch]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon-list"],
    queryFn: async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=3000"
      );
      const json: unknown = await response.json();
      const result = PokemonListResponseSchema.safeParse(json);
      if (!result.success) throw new Error("Invalid response");
      return result.data;
    },
  });

  const filteredData = useMemo(() => {
    if (!data) return [];
    if (!inputValue) return data.results;
    return data.results.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [data, inputValue]);

  if (isError) return <p>Une erreur est survenue...</p>;

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Pokédex</h1>

        <Form handleChange={handleChange} value={inputValue} />

        {isLoading ? <Loading /> : <PokemonList data={filteredData} />}
      </main>

      <Footer />
    </div>
  );
}
