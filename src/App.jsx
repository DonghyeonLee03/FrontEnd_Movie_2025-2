import { useState, useEffect } from 'react'
import { IMAGE_URL } from './constants/index';
import { getPopular } from './api/getPopular';
import { getSearch } from './api/getSearch';
import { getGenre } from './api/getGenre';
import './App.css'

export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("지금 인기있는 영화");
  const [mode, setMode] = useState("popular");
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(8);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [genre, setGenre] = useState([]);
  const [myScore, setMyScore] = useState(0);
  const [hover, setHover] = useState(0);

  function handleGoHome(){
    setMovies([]);
    setTitle("지금 인기있는 영화");
    setMode("popular");
    setPage(1);
    setCount(8);
  }
  function handleSearch(e){
    e.preventDefault();
    setMovies([]);
    setTitle(`"${e.target.search.value}" 검색 결과`);
    setSearch(e.target.search.value);
    e.target.search.value = '';
    setMode("search");
    setPage(1);
    setCount(8);
  }
  function handleMore(){
    setCount(prev => prev+8);
    if(count > page * 20)
      setPage(prev => prev+1);
  }
  function handleCardClick(movieInfo){
    setSelectedMovie(movieInfo);
    const savedScore = JSON.parse(localStorage.getItem("movieScores")) || {};
    const existingScore = savedScore[movieInfo.title];
    if(existingScore){
      setMyScore(existingScore);
    } else {
      setMyScore(0);
    }
  }
  function handleCloseModal(){
    setSelectedMovie(null);
  }
  function handleScoreClick(starIndex){
    setMyScore(starIndex);
    const savedScore = JSON.parse(localStorage.getItem("movieScores")) || {};
    const movieTitle = selectedMovie.title;
    savedScore[movieTitle] = starIndex;
    localStorage.setItem("movieScores", JSON.stringify(savedScore));
  }
  useEffect(()=>{
    const fetchMovie = async () => {
      let data;
      if (mode === "popular"){
        data = await getPopular(page);
      } else if (mode === "search"){
        data = await getSearch(search, page);
      }
      if(data){
        setMovies(prev => [...prev, ...data.results]);
        setTotalResults(data.total_results);
      }
    }
    fetchMovie();
  }, [mode, search, page]);
  useEffect(()=>{
    const fetchGenre = async () => {
      const data = await getGenre();
      if (data) {
        setGenre(data.genres);
      }
    }
    fetchGenre();
    const handleEsc = (e) => {
      if(e.key === 'Escape'){
        setSelectedMovie(null);
      }
    }
    window.addEventListener('keydown',handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    }
  },[]);
  function Card({movieInfo, onClick}){
    if (!movieInfo) return null;
    return (
      <div className="movie" onClick={onClick}>
        <img className="poster" src={`${IMAGE_URL}${movieInfo.poster_path}`} alt={movieInfo.title} />
        <p className="title">{movieInfo.title}</p>
        <div className="score">
          <img className="star" src="/src/assets/star.svg" />
          <span className="vote">{movieInfo.vote_average.toFixed(1)}</span>
        </div>
      </div>
    )
  }
  const getGenreNames = (genreIds) => {
    if (!genre || genre.length === 0) return "";

    return genreIds.map(id => {
      const selectedGenre = genre.find(g => g.id === id);
      return selectedGenre ? selectedGenre.name : null;
    })
    .join(", ");
  }
  const comment = [
    "",
    "매우 불만족이에요",
    "불만족이에요",
    "보통이에요",
    "만족이에요",
    "매우 만족이에요"
  ];

  return (
    <>
      {selectedMovie && (
        <section className="modal">
          <div id="modalUI">
            <header id="modalHeader">
              <p id="movieTitle">{selectedMovie.title}</p>
              <button id="closeBtn" onClick={handleCloseModal}>×</button>
            </header>
            <div id="infoUI">
              <img
                className="selectedPoster"
                src={`${IMAGE_URL}${selectedMovie.poster_path}`}
              />
              <div className="textArea">
                <div className="selectedInfo">
                  <span className="genre">{getGenreNames(selectedMovie.genre_ids)}</span>
                  <img className="modalStar" src="../src/assets/star.svg"></img>
                  <span className="modalScore">{`${selectedMovie.vote_average.toFixed(1)}`}</span>
                </div>
                <div className="overview">{`${selectedMovie.overview}`}</div>
                <div className="myScore">
                  내 별점
                  <div className="scoreBoard">
                    {[...Array(5)].map((_, index) => {
                      const starIndex = index + 1;
                      return (
                        <button
                          key={starIndex}
                          className="scoreBtn"
                          onClick={()=>handleScoreClick(starIndex)}
                          onMouseEnter={()=>setHover(starIndex)}
                          onMouseLeave={()=>setHover(0)}
                        >
                          <img
                            className="btnImg"
                            src={
                              starIndex <= (hover || myScore)
                              ? "/src/assets/star.svg"
                              : "/src/assets/blank_star.png"
                            }
                            alt="star"
                            />
                        </button>
                      )
                    })}
                  </div>
                  <span className="myScoreNum">{`${myScore*2} ${comment[myScore]}`}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <header>
        <img
          id="homeLogo"
          src="./src/assets/logo.png"
          alt="logo"
          onClick={handleGoHome}
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
            <img id="searchIcon" src="./src/assets/search_button.png" alt="searchIcon" />
          </button>
        </form>
      </header>
      <main>
        <section className="list">
          <h1 id="listInfo">{title}</h1>
          <div id="listArea" style={{color: 'white'}}>
            {
              movies.length > 0 ? (
                movies.slice(0, count).map((item) => (
                  <Card key={item.id} movieInfo={item} onClick={()=>handleCardClick(item)}/>
                ))
              ) : (
                <p style={{color: 'white'}}>영화가 없습니다.</p>
              )
            }
          </div>
          {movies.length > 0 && count <= totalResults && (
            <button id="moreBtn" onClick={handleMore}>더보기</button>
          )}
        </section>
      </main>
    </>
  )
}
