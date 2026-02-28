import { Suspense } from "react";
import { Loading } from "../../components/atoms";
import PokedexClient from "./pokedex-client";

export default function Pokedex() {
  return (
    <Suspense fallback={<Loading />}>
      <PokedexClient />
    </Suspense>
  );
}
