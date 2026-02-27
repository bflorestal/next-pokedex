"use client";

import {
  createContext,
  useEffect,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";
import {
  PokemonListResponseSchema,
  TypeListResponseSchema,
  type NamedAPIResource,
  type PokemonListResponse,
} from "../lib/schemas";

interface MainContextType {
  data: PokemonListResponse | null;
  filteredData: NamedAPIResource[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
  isLoading: boolean;
  types: NamedAPIResource[];
  value: string;
}

const MainContext = createContext<MainContextType>({
  data: null,
  filteredData: [],
  handleChange: () => {},
  hasError: false,
  isLoading: true,
  types: [],
  value: "",
});

const Provider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [data, setData] = useState<PokemonListResponse | null>(null);
  const [filteredData, setFilteredData] = useState<NamedAPIResource[]>([]);
  const [types, setTypes] = useState<NamedAPIResource[]>([]);
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=1118"
      );
      const json: unknown = await response.json();
      const result = PokemonListResponseSchema.safeParse(json);
      if (!result.success) {
        setError(true);
        return;
      }
      const parsed = result.data;
      setData(parsed);
      setLoading(false);

      setFilteredData(
        parsed.results.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } catch {
      setError(true);
    }
  };

  const fetchTypes = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/type");
      const json: unknown = await response.json();
      const result = TypeListResponseSchema.safeParse(json);
      if (!result.success) {
        setError(true);
        return;
      }
      const parsed = result.data;
      setTypes(
        parsed.results.filter(
          (type) => type.name !== "unknown" && type.name !== "shadow"
        )
      );
      setLoading(false);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    fetchApi();
    fetchTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <MainContext.Provider
      value={{
        data,
        filteredData,
        handleChange,
        hasError,
        isLoading,
        types,
        value,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;
