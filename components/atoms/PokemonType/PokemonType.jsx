// Renvoi vers la liste par types
// import Link from "next/link";

import styles from "./PokemonType.module.scss";

export default function PokemonType({ type }) {
  return (
    // Ajouter <Link href={type} /> pour renvoyer vers la liste par types (?)
    <a className={styles[type]} href="#">
      {type}
    </a>
  );
}
