import { Card } from "../../atoms";

import styles from "./PokemonList.module.scss";

export default function PokemonList({ data = [] }) {
  if (data && data.length === 0) return <>Not found</>;

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {data.map((element, index) => (
          <Card key={element.name} {...element}></Card>
        ))}
      </ul>
    </div>
  );
}
