import { IMAGE_URL, comment } from "../constants";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ScoreBoard from "./ScoreBoard";

export default function Modal({genre}) {
  const location = useLocation();
  const {movieInfo, score} = location.state || {};

  const [myScore, setMyScore] = useState(score || 0);
  const [hover, setHover] = useState(0);

  const {id} = useParams();
  const navigate = useNavigate();
  
  useEffect(()=>{
    const handleEsc = (e) => {
      if(e.key === 'Escape'){
        navigate(-1);
      }
    }
    window.addEventListener('keydown',handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    }
  },[navigate]);

  function handleCloseModal(){
    navigate(-1);
  }
  const getGenreNames = (genreIds) => {
    if (!genre || genre.length === 0) return "";

    return genreIds.map(id => {
      const selectedGenre = genre.find(g => g.id === id);
      return selectedGenre ? selectedGenre.name : null;
    })
    .join(", ");
  }
  return(
    <section className="modal">
      <div id="modalUI">
        <header id="modalHeader">
          <p id="movieTitle">{id}</p>
          <button id="closeBtn" onClick={handleCloseModal}>×</button>
        </header>
        <div id="infoUI">
          <img
            className="selectedPoster"
            src={`${IMAGE_URL}${movieInfo.poster_path}`}
          />
          <div className="textArea">
            <div className="selectedInfo">
              <span className="genre">{getGenreNames(movieInfo.genre_ids)}</span>
              <img className="modalStar" src="/src/assets/star.svg" />
              <span className="modalScore">{`${movieInfo.vote_average.toFixed(1)}`}</span>
            </div>
            <div className="overview">{`${movieInfo.overview}`}</div>
            <div className="myScore">
              내 별점
              <ScoreBoard
                hover={hover}
                myScore={myScore}
                setHover={setHover}
                setMyScore={setMyScore}
                movieInfo={movieInfo}
              />
              <span className="myScoreNum">{`${myScore*2} ${comment[myScore]}`}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )  
}
