import Link from "next/link";

import styles from "../styles/ErrorPage.module.scss";

export const metadata = {
  title: "Page non trouvée | Next Pokédex",
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Oups !</h1>
        <h2>La page que vous recherchez semble introuvable.</h2>
        <h6>Code d&apos;erreur : 404</h6>

        <Link href="/">Revenir à la page d&apos;accueil</Link>
      </main>
    </div>
  );
}
