import { IMAGE_URL } from "../constants";
import { useNavigate } from "react-router-dom";

export default function Card({movieInfo}){
  const navigate = useNavigate();

  function handleCardClick(){
    const title = movieInfo.title;
    const savedScore = JSON.parse(localStorage.getItem("movieScores")) || {};
    const existingScore = savedScore[movieInfo.title];
    if(existingScore)
      navigate(`movie/${title}`, {state: {movieInfo: movieInfo, score: existingScore}});
    else
      navigate(`movie/${title}`, {state: {movieInfo: movieInfo, score: 0}});
  }

  if (!movieInfo) return null;
  return (
    <div className="movie" onClick={handleCardClick}>
      <img className="poster" src={`${IMAGE_URL}${movieInfo.poster_path}`} alt={movieInfo.title} />
      <p className="title">{movieInfo.title}</p>
      <div className="score">
        <img className="star" src="/src/assets/star.svg" />
        <span className="vote">{movieInfo.vote_average.toFixed(1)}</span>
      </div>
    </div>
  )
}