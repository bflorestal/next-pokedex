import type { Metadata } from "next";
import { TypeListResponseSchema } from "../../lib/schemas";

import { Footer, Header } from "../../components/molecules";
import { PokemonType } from "../../components/atoms";

import styles from "../../styles/Types.module.scss";

export const metadata: Metadata = {
  title: "Types | Next Pokédex",
};

export default async function Types() {
  const response = await fetch("https://pokeapi.co/api/v2/type", {
    cache: "no-store",
  });

  if (!response.ok) return <p>Une erreur est survenue...</p>;

  const json: unknown = await response.json();
  const result = TypeListResponseSchema.safeParse(json);

  if (!result.success) return <p>Une erreur est survenue...</p>;

  const types = result.data.results.filter(
    (type) => type.name !== "unknown" && type.name !== "shadow"
  );

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Types</h1>

        <div className={styles.typesContainer}>
          <ul className={styles.typeList}>
            {types.map((e, index) => (
              <li key={index}>
                <div className={styles.types}>
                  <PokemonType type={e.name} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
