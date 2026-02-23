import { Provider as MainProvider } from "../contexts/Main";

import "../styles/globals.scss";

export const metadata = {
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

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
