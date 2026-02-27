"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./Card.module.scss";

export default function Card({ name, url }) {
  // Sprite du Pokémon
  const [pkmnSprite, setPkmnSprite] = useState(url);

  useEffect(() => {
    const getSprite = () => {
      // ID = https://pokeapi.co/api/v2/pokemon/XXX <-
      const pkmnId = url
        .split("/")
        .filter((e) => e)
        .at(-1);
      setPkmnSprite(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmnId}.png`
      );
    };
    getSprite();
  }, [url]);

  return (
    <li className={styles.item}>
      <Link href={`/pokedex/${name}`}>
        <div>
          <Image
            src={pkmnSprite}
            alt={name}
            width={96}
            height={96}
            unoptimized
          />
          <p>{name}</p>
        </div>
      </Link>
    </li>
  );
}
