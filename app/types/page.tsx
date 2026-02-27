"use client";

import MainContext from "../../contexts/Main";
import { useContext } from "react";

import { Footer, Header } from "../../components/molecules";
import { Loading, PokemonType } from "../../components/atoms";

import styles from "../../styles/Types.module.scss";

export default function Types() {
  const { hasError, isLoading, types } = useContext(MainContext);

  if (hasError) return <p>Une erreur est survenue...</p>;

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Types</h1>

        {isLoading ? (
          <Loading />
        ) : (
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
        )}
      </main>

      <Footer />
    </div>
  );
}
