import { PokemonList } from "../../../components/molecules";

import type {
  NamedAPIResource,
  TypeDetailResponse,
} from "../../../lib/schemas";

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
    <>
      <h1 className={styles.title}>Pokédex</h1>

      <PokemonList data={filteredData} />
    </>
  );
}
