// Renvoi vers la liste par types
import Link from "next/link";

import styles from "./PokemonType.module.scss";

export default function PokemonType({ type }) {
  return (
    <Link href={`/types/${type}`}>
      <a className={`${styles.types__type} ${styles[type]}`}>{type}</a>
    </Link>
  );
}
