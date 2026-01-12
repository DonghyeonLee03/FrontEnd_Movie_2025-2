import { list, title } from "./MainPage.css";
import { Suspense } from "react";
import usePage from "../hooks/usePage";
import MovieList from "../components/MovieList";

export default function SearchPage() {
  const { query } = usePage();
  return (
    <section className={list}>
      <h1 className={title}>{`"${query}" 검색 결과`}</h1>
      <Suspense fallback={<h1>영화 목록 불러오는 중...</h1>}>
        <MovieList />
      </Suspense>
    </section>
  );
}
