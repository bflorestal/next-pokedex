import Link from "next/link";
import type { Metadata } from "next";

import styles from "../styles/ErrorPage.module.scss";

export const metadata: Metadata = {
  title: "Page non trouvée | Next Pokédex",
};

export default function NotFound() {
  return (
    <div className={styles.content}>
      <h1>Oups !</h1>
      <h2>La page que vous recherchez semble introuvable.</h2>
      <h6>Code d&apos;erreur : 404</h6>

      <Link href="/">Revenir à la page d&apos;accueil</Link>
    </div>
  );
}
