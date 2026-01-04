import { useReducer, useEffect, useState } from "react";
import getPopular from "../api/getPopular";
import getSearch from "../api/getSearch";
import getGenre from "../api/getGenre";

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return action.page === 1 ? action.results : [...state, ...action.results];
    case "RESET":
      return [];
    default:
      return state;
  }
}

export default function useFetch(type, params = {}) {
  const [data, dispatch] = useReducer(reducer, []);
  const [totalResults, setTotalResults] = useState(0);
  const { page = 1, query = "" } = params;

  useEffect(() => {
    dispatch({ type: "RESET" });
  }, [type, query]);

  useEffect(() => {
    if (type === "GENRE" && data.length > 0) return;

    const fetchData = async () => {
      let res;
      if (type === "POPULAR") {
        res = await getPopular(page);
      } else if (type === "SEARCH") {
        res = await getSearch(query, page);
      } else if (type === "GENRE") {
        res = await getGenre();
      }

      if (res) {
        const results = res.results || res.genres || [];
        setTotalResults(res.total_results || 0);
        dispatch({ type: "UPDATE", results, page });
      }
    };
    fetchData();
  }, [type, page, query]);

  if (type === "GENRE") {
    return data;
  } else {
    return { movieList: data, totalResults };
  }
}
