import { createContext, useEffect, useState } from "react";

const MainContext = createContext({ value: "" });

const Provider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=1118"
      );
      const data = await response.json();

      setData(data);
      setLoading(false);

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
    <MainContext.Provider value={{ data, hasError, isLoading, value }}>
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;
