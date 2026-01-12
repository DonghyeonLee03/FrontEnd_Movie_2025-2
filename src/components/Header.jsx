import { useState } from "react";
import usePage from "../hooks/usePage";
import * as style from "./Header.css";
import Profile from "../features/user/components/Profile";

export default function Header() {
  const { goPopular: handleHomeLogo, goSearch } = usePage();
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    goSearch(input);
    setInput("");
  };

  return (
    <header className={style.header}>
      <img
        className={style.logo}
        src="/src/assets/logo.png"
        alt="logo"
        onClick={handleHomeLogo}
      />
      <form className={style.searchForm} onSubmit={handleSearch}>
        <input
          className={style.searchInput}
          name="search"
          type="text"
          placeholder="검색"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button className={style.searchBtn} type="submit">
          <img
            className={style.searchIcon}
            src="/src/assets/search_button.png"
            alt="searchIcon"
          />
        </button>
      </form>
      <Profile />
    </header>
  );
}
