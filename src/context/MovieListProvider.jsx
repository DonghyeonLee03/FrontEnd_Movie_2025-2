import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MovieListContext } from "./MovieListContext";

export function MovieListProvider({children}){
  const [count, setCount] = useState(8);
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [wishList, setWishList] = useState([]);
  const [reviewList, setReviewList] = useState([]);

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
    setMovieList((prev) => {
      const newItems = data.results.filter(
        (newItem) => !prev.some((oldItem) => oldItem.id === newItem.id)
      );
      return [...prev, ...newItems];
    });
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
  const updateWishList = (data) => {
    setWishList((prev) => {
      const isExisted = prev.some((item) => item.id === data.id);

      if (!isExisted) {
        return [...prev, data];
      }
      else {
        return prev.filter((item) => item.id !== data.id);
      }
    });
  };
  const updateReviewList = (data, score) => {
    setReviewList((prev) => {
      const isExisted = prev.some((item) => item.id === data.id);

      if (isExisted) {
        return prev.map((item) =>
        item.id === data.id?{...item, myScore: score}:item
        );
      }
      else {
        return [...prev, {...data, myScore: score}];
      }
    })
  }
  const resetPage = (mode) => {
    setCount(8);
    setPage(1);
    setTotalResults(() => {
      if (mode === "review"){
        return reviewList.length;
      }
      else {
        return wishList.length;
      }
    })
  }

  return (
    <MovieListContext.Provider value={{ query, count, page, movieList, totalResults, wishList, reviewList, resetMovieList, updateMovieList, handleMore, goSearchPage, goPopularPage, updateWishList, updateReviewList, resetPage }}>
      {children}
    </MovieListContext.Provider>
  );
}
