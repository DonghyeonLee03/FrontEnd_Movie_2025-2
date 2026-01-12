import { list, title } from "./MainPage.css";
import { Suspense } from "react";
import MovieList from "../components/MovieList";

export default function PopularPage() {
  return (
    <section className={list}>
      <h1 className={title}>지금 인기있는 영화</h1>
      <Suspense fallback={<h1>영화 목록 불러오는 중...</h1>}>
        <MovieList />
      </Suspense>
    </section>
  );
}
