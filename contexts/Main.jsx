import { createContext, useEffect, useState } from "react";

const MainContext = createContext({ value: "" });

const Provider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [data, setData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  // const [value, setValue] = useState(searchParams.get("filter") || "");
  const [value, setValue] = useState("");

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=1118"
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
  }, [value]);

  return (
    <MainContext.Provider
      value={{ data, filteredData, handleChange, hasError, isLoading, value }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;
