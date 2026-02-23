"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Footer, Header } from "../../../components/molecules";
import { PokemonType, Star } from "../../../components/atoms";

import styles from "../../../styles/Details.module.scss";

export default function DetailsClient({ data }) {
  const { height, moves, name, sprites, stats, types, weight } = data;

  const frontSprite = ({ front_default }) => {
    return front_default;
  };
  const pkmnImg = frontSprite(sprites);

  const nameFormat = (name) => {
    if (name === "hp") return "HP";
    return name
      .split("-")
      .map((l) => l.charAt(0).toUpperCase() + l.substr(1))
      .join(" ");
  };

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

  const favCheck = (pkmnToCheck) => {
    if (localStorage.getItem(pkmnToCheck)) {
      setIsStarred(true);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    favCheck(name);
  }, [name, isStarred]);

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Caractéristiques du Pokémon</h1>

        <div className={styles.details}>
          <div className={styles.details__left}>
            <h2 className={styles.details__name}>{name}</h2>
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
