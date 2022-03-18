import { createContext, useEffect, useState } from "react";

const MainContext = createContext({ value: "" });

const Provider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [data, setData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  // const [value, setValue] = useState(searchParams.get("filter") || "");
  const [value, setValue] = useState("");

  const fetchApi = async () => {
    try {
      // https://pokeapi.co/api/v2/pokemon/?limit=1118 pour la liste complète, mais réduit à cause de la limite d'images de Vercel
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=971"
      );
      const data = await response.json();

      setData(data);
      setLoading(false);

      setFilteredData(
        data.results.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(value.toLowerCase())
        )
      );

      return data;
    } catch (err) {
      setError(true);
      throw err;
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <MainContext.Provider
      value={{ data, filteredData, hasError, isLoading, value }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;
