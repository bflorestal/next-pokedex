import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import { Footer, Header } from "../../components/molecules";
import { PokemonType, Star } from "../../components/atoms";

import styles from "../../styles/Details.module.scss";

export default function Details({ data, pkmnNotFound }) {
  if (pkmnNotFound)
    return (
      <>
        <p>Une erreur est survenue...</p>
        <Link href="/pokedex">
          <a>Retourner au Pokédex</a>
        </Link>
      </>
    );

  // Récupère les données voulues pour les afficher
  const { height, id, moves, name, sprites, stats, types, weight } = data;

  // Récupère le sprite de face du Pokémon
  const frontSprite = ({ front_default }) => {
    return front_default;
  };
  const pkmnImg = frontSprite(sprites);

  // Réécrit correctement le nom du Pokémon, les statistiques, les attaques...
  // HP, Attack, Defense, Special Attack, Special Defense, Speed
  const nameFormat = (name) => {
    if (name === "hp") return "HP";
    return name
      .split("-")
      .map((l) => l.charAt(0).toUpperCase() + l.substr(1))
      .join(" ");
  };

  // Favoris
  const [isStarred, setIsStarred] = useState(false);

  const handleClick = (pkmnData) => {
    const { name } = pkmnData;

    if (localStorage.getItem(name)) {
      localStorage.removeItem(name);
      setIsStarred(false);
    } else {
      localStorage.setItem(name, JSON.stringify(pkmnData));
      setIsStarred(true);
    }
  };

  const favCheck = (elem) => {
    if (!localStorage.getItem(name)) return;

    setIsStarred(true);
  };

  useEffect(() => {
    favCheck(name);
  }, [isStarred]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Fiche de {nameFormat(name)} | Next Pokédex</title>
        <meta
          name="keywords"
          content={`Pokedex, pokedex, ${name}, nextjs, react, reactjs, pokemon`}
        />
        <meta name="creator" content="Bryan Florestal" />
        <meta name="theme-color" content="#483d8b" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Caractéristiques du Pokémon</h1>

        <div className={styles.details}>
          <div className={styles.details__left}>
            <h2 className={styles.details__name}>{name}</h2>
            {/* Bouton Ajouter aux favoris et Retirer des favoris */}
            <Star data={data} handleClick={handleClick}>
              {isStarred}
            </Star>
            <Image
              src={pkmnImg}
              alt={nameFormat(name)}
              width={96}
              height={96}
              unoptimized
            />
            <div className={styles.types}>
              {types.map((e, index) => (
                <PokemonType type={e.type.name} key={index} />
              ))}
            </div>
          </div>
          <div className={styles.details__center}>
            <ul>
              {stats.map((pkmnStat, index) => (
                <li key={index}>
                  {nameFormat(pkmnStat.stat.name)} : {pkmnStat.base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.details__right}>
            <div styles={styles.details__wh}>
              <p>Poids : {weight / 10} kg</p>
              <p>Taille : {height / 10} m</p>
            </div>
            <div styles={styles.moves}>
              <p>Premières capacités :</p>
              <ul>
                {moves.slice(0, 3).map((pkmnMove, index) => (
                  <li key={index}>{nameFormat(pkmnMove.move.name)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const pkmnName = query.slug;

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pkmnName}`
    );
    if (response.status === 404) {
      const pkmnNotFound = true;
      return { props: { pkmnNotFound } };
    }
    const data = await response.json();

    return {
      props: { data },
    };
  } catch (err) {
    throw err;
  }
}
