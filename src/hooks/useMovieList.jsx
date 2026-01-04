import { useSearchParams } from "react-router-dom";
import { useReducer, useEffect } from "react";
import useFetch from "./useFetch";
import { useContext } from "react";
import { MyChoiceContext } from "../context/context";

function reducer(state, action) {
  switch (action.type) {
    case "RESET":
      return { count: 8, page: 1 };
    case "MORE":
      return { ...state, count: state.count + 8 };
    case "PAGEUP":
      return { ...state, count: state.count + 8, page: state.page + 1 };
    default:
      return state;
  }
}

export default function useMovieList(type) {
  const { wishList, reviewList } = useContext(MyChoiceContext);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const mode = searchParams.get("mode") || "";
  const [state, dispatch] = useReducer(reducer, {
    count: 8,
    page: 1,
  });

  const { movieList, totalResults } = useFetch(type, {
    page: state.page,
    query,
  });

  useEffect(() => {
    dispatch({ type: "RESET" });
  }, [type, query, mode]);

  const handleMore = () => {
    if (state.count + 8 > 20 * state.page) dispatch({ type: "PAGEUP" });
    else dispatch({ type: "MORE" });
  };

  if (type === "MYPAGE") {
    if (mode === "wish") {
      return {
        movieList: wishList.data,
        totalResults: wishList.totalResults,
        handleMore,
        count: state.count,
        mode,
      };
    } else if (mode === "review") {
      return {
        movieList: reviewList.data,
        totalResults: reviewList.totalResults,
        handleMore,
        count: state.count,
        mode,
      };
    } else {
      return {
        movieList: [],
        totalResults: 0,
        handleMore,
        count: state.count,
        mode,
      };
    }
  } else {
    return { movieList, handleMore, query, count: state.count, totalResults };
  }
}
