import { Card } from "../../atoms";
import type { NamedAPIResource } from "../../../lib/schemas";

import styles from "./PokemonList.module.scss";

interface PokemonListProps {
  data?: NamedAPIResource[];
}

export default function PokemonList({ data = [] }: PokemonListProps) {
  if (data && data.length === 0) return <>Not found</>;

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {data.map((element) => (
          <Card key={element.name} {...element} />
        ))}
      </ul>
    </div>
  );
}
