import Link from "next/link";

import styles from "./PokemonType.module.scss";

interface PokemonTypeProps {
  type: string;
}

export default function PokemonType({ type }: PokemonTypeProps) {
  return (
    <Link
      href={`/types/${type}`}
      className={`${styles.types__type} ${styles[type]}`}
    >
      {type}
    </Link>
  );
}
