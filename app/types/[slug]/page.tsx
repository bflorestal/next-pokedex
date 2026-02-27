import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TypeDetailResponseSchema } from "../../../lib/schemas";
import TypeDetailsClient from "./type-details-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
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

export default async function TypeDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await fetch(`https://pokeapi.co/api/v2/type/${slug}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    notFound();
  }

  const json: unknown = await response.json();
  const result = TypeDetailResponseSchema.safeParse(json);

  if (!result.success) {
    notFound();
  }

  const filteredData = result.data.pokemon.map((el) => el.pokemon);
  return <TypeDetailsClient data={result.data} filteredData={filteredData} />;
}
