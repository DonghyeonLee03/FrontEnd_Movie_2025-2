import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MovieListContext } from "./MovieListContext";

export function MovieListProvider({children}){
  const [count, setCount] = useState(8);
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const navigate = useNavigate(); 
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const resetMovieList = () => {
    setCount(8);
    setPage(1);
    setMovieList([]);
    setTotalResults(0);
  }
  const updateMovieList = (data) => {
    setMovieList(prev => [...prev, ...data.results]);
    setTotalResults(data.total_results);
  }
  const handleMore = () => {
    setCount(prev => prev+8);
    if(count > page * 20)
      setPage(prev => prev+1);
  }
  const goSearchPage = (data) => {
    navigate(`/search?query=${data}`);
  }
  const goPopularPage = () => {
    navigate('/');
  }

  return (
    <MovieListContext.Provider value={{ query, count, page, movieList, totalResults, resetMovieList, updateMovieList, handleMore, goSearchPage, goPopularPage }}>
      {children}
    </MovieListContext.Provider>
  );
}
