import { useContext } from "react";
import { MovieListContext } from "../context/MovieListContext";

export const useMovieList = () => useContext(MovieListContext);
