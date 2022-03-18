import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Footer, Header } from "../../components/molecules";
import { Loading } from "../../components/atoms"; // le type sera également à importer

import styles from "../../styles/Details.module.scss";

export default function Details() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fiche de name | Next Pokédex</title>
        <meta
          name="description"
          content="Toutes les caractéristiques importantes de name sont présentes sur cette fiche."
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
        <h1 className={styles.title}>Hello name !</h1>

        <div className="details">
          <div className="details--left">
            <h2>name</h2>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
              alt="name"
            />
            <div className="types">
              <div className="types--name">type1</div>
              <div className="types--name">type2</div>
            </div>
          </div>
          <div className="details--center"></div>
          <div className="details--right">
            <div>
              <p>Poids : 100 kg</p>
              <p>Taille : 100 m</p>
            </div>
            <div>
              <p>Premières capacités :</p>
              <ul className="first-moves">
                <li>move1</li>
                <li>move2</li>
                <li>move3</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pkmn-favorites">
          {/*Événement onClick qui ajoute le Pokémon dans le localStorage*/}
          <button className="addFav">Ajouter aux favoris</button>
          {/*Bouton retirer des favoris (?)*/}
        </div>
      </main>

      <Footer />
    </div>
  );
}
