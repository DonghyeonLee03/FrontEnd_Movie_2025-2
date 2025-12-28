import { useRef } from "react";
import { useMovieList } from "../hooks/useMovieList";
import { header, searchForm, logo, searchInput, searchBtn, searchIcon } from "./style/Header.css";

export default function Header() {
  const { query, resetMovieList, goSearchPage, goPopularPage } = useMovieList();
  const searchRef = useRef(null);

  function handleHomeLogo(){
    resetMovieList();
    goPopularPage();
  }
  function handleSearch(e){
    e.preventDefault();
    if (searchRef.current.value !== query)
      resetMovieList();
    goSearchPage(searchRef.current.value);
    searchRef.current.value = '';
  }
  return (
    <header className={header}>
      <img
        className={logo}
        src="/src/assets/logo.png"
        alt="logo"
        onClick={handleHomeLogo}
      />
      <form className={searchForm} onSubmit={handleSearch}>
        <input
          className={searchInput}
          name="search"
          type="text"
          placeholder="검색"
          autoComplete="off"
          ref={searchRef}
          required
        />
        <button className={searchBtn} type="submit">
          <img className={searchIcon} src="/src/assets/search_button.png" alt="searchIcon" />
        </button>
      </form>
    </header>
  );
}
