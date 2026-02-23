import { notFound } from "next/navigation";

import TypeDetailsClient from "./type-details-client";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const currentType = slug
    .split(" ")
    .map((l) => l.charAt(0).toUpperCase() + l.substr(1))
    .join(" ");

  return {
    title: `Pokémon de type ${currentType} | Next Pokédex`,
    keywords: `Pokedex, pokedex, ${currentType}, nextjs, react, reactjs, pokemon`,
    creator: "Bryan Florestal",
  };
}

export default async function TypeDetails({ params }) {
  const { slug } = await params;

  const response = await fetch(
    `https://pokeapi.co/api/v2/type/${slug}`,
    { cache: "no-store" }
  );

  if (response.status === 404) {
    notFound();
  }

  const data = await response.json();
  const filteredData = data.pokemon.map((el) => el.pokemon);

  return <TypeDetailsClient data={data} filteredData={filteredData} />;
}
