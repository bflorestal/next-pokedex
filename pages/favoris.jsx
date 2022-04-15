import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MainContext from "../contexts/Main";
import { useContext, useEffect, useState } from "react";

import { Footer, Header } from "../components/molecules";
import { Loading } from "../components/atoms";

import styles from "../styles/Favoris.module.scss";

export default function Favoris() {
  const { filteredData, hasError, isLoading } = useContext(MainContext);

  const [favList, setFavList] = useState([]);

  useEffect(() => {
    /* es2015 most compact way
    const items = { ...localStorage };
    console.log(items); */

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

    setFavList(allStorage());
  }, []);

  const removeFav = (pokemon) => {
    // ?
    // if (localStorage.pokemon) {}
    localStorage.removeItem("pokemon");
  };

  const emptyFav = () => {
    setFavList([]);
    localStorage.clear();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Vos favoris | Next Pokédex</title>
        <meta
          name="description"
          content="Consultez la liste de vos Pokémon favoris !"
        />
        <meta
          name="keywords"
          content="Pokedex, pokedex, nextjs, react, reactjs, pokemon"
        />
        <meta name="creator" content="Bryan Florestal" />
        <meta property="og:site_name" content="Next Pokédex"></meta>
        <meta name="theme-color" content="#483d8b" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
                  <Link
                    href={{
                      pathname: "/pokedex/[slug]",
                      query: { slug: pokemon.name },
                    }}
                  >
                    <a>
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
                    </a>
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
