import { useState, useMemo } from "react";
import {
  usePopularList,
  useSearchList,
} from "../features/movie-list/hooks/useMovieQueries";
import usePage from "./usePage";

export default function useMovieList(type) {
  const { query } = usePage();
  const [count, setCount] = useState(8);
  const popular = usePopularList();
  const search = useSearchList(query);

  const currentQuery =
    type === "POPULAR" ? popular : type === "SEARCH" ? search : {};

  const movieList = useMemo(() => {
    const pages = currentQuery?.data?.pages;
    const allResults = pages?.flatMap((p) => p.results) || [];

    return Array.from(
      new Map(allResults.map((movie) => [movie.id, movie])).values()
    );
  }, [currentQuery?.data?.pages]);

  const handleMore = () => {
    if (count + 8 > movieList.length && currentQuery.hasNextPage) {
      currentQuery.fetchNextPage();
    }
    setCount((prev) => prev + 8);
  };

  return {
    movieList,
    handleMore,
    query,
    count,
    totalResults: currentQuery.data?.pages[0]?.total_results || 0,
  };
}
