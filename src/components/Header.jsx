import { useState } from "react";
import usePage from "../hooks/usePage";
import {
  header,
  searchForm,
  logo,
  searchInput,
  searchBtn,
  searchIcon,
} from "./style/Header.css";
import Profile from "./Profile";

export default function Header() {
  const { handleHomeLogo, goSearch } = usePage();
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    goSearch(input);
    setInput("");
  };

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
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button className={searchBtn} type="submit">
          <img
            className={searchIcon}
            src="/src/assets/search_button.png"
            alt="searchIcon"
          />
        </button>
      </form>
      <Profile />
    </header>
  );
}
