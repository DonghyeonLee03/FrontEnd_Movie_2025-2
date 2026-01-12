import useMovieList from "../hooks/useMovieList";
import Card from "../features/movie-list/components/Card";
import { frame, button } from "./MovieList.css";
import usePage from "../hooks/usePage";

export default function MovieList() {
  const { pageMode, query } = usePage();
  const { movieList, count, totalResults, handleMore } = useMovieList(pageMode);

  return (
    <>
      <div className={frame} key={`${pageMode} ${query}`}>
        {movieList?.length > 0 ? (
          movieList
            .slice(0, count)
            .map((item) => <Card key={item.id} movieInfo={item} />)
        ) : (
          <p>영화가 없습니다.</p>
        )}
      </div>
      {movieList?.length > 0 && count <= totalResults && (
        <button className={button} onClick={handleMore}>
          더보기
        </button>
      )}
    </>
  );
}
