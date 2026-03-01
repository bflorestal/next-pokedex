"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { FavoritePokemonSchema, type FavoritePokemon } from "../../lib/schemas";

import styles from "../../styles/Favoris.module.scss";

export default function Favoris() {
  const [favList, setFavList] = useState<FavoritePokemon[]>([]);

  useEffect(() => {
    const allStorage = (): FavoritePokemon[] => {
      const values: FavoritePokemon[] = [];
      const keys = Object.keys(localStorage);
      let i = keys.length;

      while (i--) {
        try {
          const raw: unknown = JSON.parse(localStorage.getItem(keys[i]) ?? "");
          const result = FavoritePokemonSchema.safeParse(raw);
          if (result.success) {
            values.push(result.data);
          }
        } catch {
          // skip invalid entries
        }
      }

      return values.sort((a, b) => a.id - b.id);
    };

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFavList(allStorage());
  }, []);

  const emptyFav = () => {
    setFavList([]);
    localStorage.clear();
  };

  return (
    <>
      <h1 className={styles.title}>Favoris</h1>

      <div className={styles.favContainer}>
        <ul className={styles.list}>
          {favList.length === 0 ? (
            <p className={styles.emptyMessage}>Aucun favori pour le moment.</p>
          ) : (
            favList.map((pokemon) => (
              <li className={styles.item} key={pokemon.name}>
                <Link href={`/pokedex/${pokemon.name}`}>
                  <div>
                    <Image
                      src={pokemon.sprites.front_default ?? ""}
                      alt={pokemon.name}
                      width={96}
                      height={96}
                      unoptimized
                    />
                    <p>{pokemon.name}</p>
                  </div>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>

      <button className={styles.clearFav} onClick={() => emptyFav()}>
        Vider la liste des favoris
      </button>
    </>
  );
}
