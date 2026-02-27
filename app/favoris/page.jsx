"use client";

import Image from "next/image";
import Link from "next/link";
import MainContext from "../../contexts/Main";
import { useContext, useEffect, useState } from "react";

import { Footer, Header } from "../../components/molecules";
import { Loading } from "../../components/atoms";

import styles from "../../styles/Favoris.module.scss";

export default function Favoris() {
  const { isLoading } = useContext(MainContext);

  const [favList, setFavList] = useState([]);

  useEffect(() => {
    const allStorage = () => {
      let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

      while (i--) {
        values.push(JSON.parse(localStorage.getItem(keys[i])));
      }

      return values
        .filter((pokemon) => pokemon.name)
        .sort((a, b) => a.id > b.id);
    };

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFavList(allStorage());
  }, []);

  const emptyFav = () => {
    setFavList([]);
    localStorage.clear();
  };

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Favoris</h1>

        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.favContainer}>
            <ul className={styles.list}>
              {favList.map((pokemon) => (
                <li className={styles.item} key={pokemon.name}>
                  <Link href={`/pokedex/${pokemon.name}`}>
                    <div>
                      <Image
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        width={96}
                        height={96}
                        unoptimized
                      />
                      <p>{pokemon.name}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className={styles.clearFav} onClick={() => emptyFav()}>
          Vider la liste des favoris
        </button>
      </main>

      <Footer />
    </div>
  );
}
