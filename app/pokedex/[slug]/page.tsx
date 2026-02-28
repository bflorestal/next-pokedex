import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { REVALIDATE_SECONDS } from "../../../lib/constants";
import { PokemonDetailSchema } from "../../../lib/schemas";
import DetailsClient from "./details-client";

const nameFormat = (name: string): string => {
  if (name === "hp") return "HP";
  return name
    .split("-")
    .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
    .join(" ");
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `Fiche de ${nameFormat(slug)} | Next Pokédex`,
    keywords: `Pokedex, pokedex, ${slug}, nextjs, react, reactjs, pokemon`,
    creator: "Bryan Florestal",
  };
}

export default async function Details({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (response.status === 404) {
    notFound();
  }

  const json: unknown = await response.json();
  const result = PokemonDetailSchema.safeParse(json);

  if (!result.success) {
    notFound();
  }

  return <DetailsClient data={result.data} />;
}
