import useMovieList from "../hooks/useMovieList";
import Card from "../components/Card";
import { list, title, frame, button } from "./style/MainPage.css";

export default function SearchPage() {
  const { movieList, count, query, totalResults, handleMore } =
    useMovieList("SEARCH");

  return (
    <main>
      <section className={list}>
        <h1 className={title}>{`"${query}" 검색 결과`}</h1>
        <div className={frame}>
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
      </section>
    </main>
  );
}
