import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function handleSearch(e){
    e.preventDefault();
    const query = e.target.search.value;
    navigate(`/search/${query}`);
    navigate(0);
    e.target.search.value = '';
  }
  return (
    <header>
      <img
        id="homeLogo"
        src="/src/assets/logo.png"
        alt="logo"
        onClick={()=>{navigate("/")}}
      />
      <form id="searchUI" onSubmit={handleSearch}>
        <input
          id="searchInput"
          name="search"
          type="text"
          placeholder="검색"
          autoComplete="off"
          required
        />
        <button id="searchBtn" type="submit">
          <img id="searchIcon" src="/src/assets/search_button.png" alt="searchIcon" />
        </button>
      </form>
    </header>
  );
}