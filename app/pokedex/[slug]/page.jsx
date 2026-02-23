import { notFound } from "next/navigation";

import DetailsClient from "./details-client";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const nameFormat = (name) => {
    if (name === "hp") return "HP";
    return name
      .split("-")
      .map((l) => l.charAt(0).toUpperCase() + l.substr(1))
      .join(" ");
  };

  return {
    title: `Fiche de ${nameFormat(slug)} | Next Pokédex`,
    keywords: `Pokedex, pokedex, ${slug}, nextjs, react, reactjs, pokemon`,
    creator: "Bryan Florestal",
  };
}

export default async function Details({ params }) {
  const { slug } = await params;

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${slug}`,
    { cache: "no-store" }
  );

  if (response.status === 404) {
    notFound();
  }

  const data = await response.json();

  return <DetailsClient data={data} />;
}
