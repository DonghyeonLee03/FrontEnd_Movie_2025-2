import { GenreContext } from "../context/context";
import useFetch from "../hooks/useFetch";

export default function GenreProvider({ children }) {
  const genre = useFetch("GENRE");

  return (
    <GenreContext.Provider value={genre}>{children}</GenreContext.Provider>
  );
}
