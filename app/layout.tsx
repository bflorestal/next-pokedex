import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import QueryProvider from "../lib/query-provider";

import { Footer, Header } from "../components/molecules";

import "../styles/globals.scss";
import styles from "../styles/Layout.module.scss";

export const metadata: Metadata = {
  title: "Next Pokédex",
  description:
    "Pokédex en Next.js avec la liste des Pokémon, leurs caractéristiques ainsi que la liste des types.",
  keywords: "Pokedex, pokedex, nextjs, react, reactjs, pokemon",
  creator: "Bryan Florestal",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "theme-color": "#483d8b",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <QueryProvider>
          <NuqsAdapter>
            <div className={styles.container}>
              <Header />
              <main className={styles.main}>{children}</main>
              <Footer />
            </div>
          </NuqsAdapter>
        </QueryProvider>
      </body>
    </html>
  );
}
