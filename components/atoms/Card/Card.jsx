import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./Card.module.scss";

export default function Card({ name, url }) {
  // Récupère le nom du Pokémon et met la première lettre en majuscule
  const [pkmnName, setPkmnName] = useState(name);
  const formatName = () => {
    setPkmnName(name.charAt(0).toUpperCase() + name.slice(1));
  };

  // const keepHyphen = ["ho-oh", "porygon-z", "jangmo-o", "hakamo-o", "kommo-o"];

  // Sprite du Pokémon
  const [pkmnSprite, setPkmnSprite] = useState(url);
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

  useEffect(() => {
    formatName();
    getSprite();
  }, []);

  return (
    <li className={styles.item}>
      <Link href={`/liste/${name}`}>
        <a>
          <div>
            <Image src={pkmnSprite} alt={pkmnName} width={96} height={96} />
            <p>{pkmnName}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
