import { IMAGE_URL } from "../constants";
import { useModal } from "../hooks/useModal";
import { useMovieList } from "../hooks/useMovieList";
import { card, poster, title, score, star } from "./style/Card.css";

export default function Card({movieInfo}){
  const { reviewList } = useMovieList();
  const { openModal, updateMyScore } = useModal();

  function handleCardClick(){
    /*const savedScore = JSON.parse(localStorage.getItem("movieScores")) || {};
    const existingScore = savedScore[movieInfo.title];
    if(existingScore){
      updateMyScore(existingScore);
      openModal(movieInfo);
    }
    else{
      updateMyScore(0);
      openModal(movieInfo);
    }*/
    const existingReview = reviewList.find(item => item.id === movieInfo.id);
    if (existingReview){
      updateMyScore(existingReview.myScore)
      openModal(movieInfo);
    }
    else{
      updateMyScore(0);
      openModal(movieInfo);
    }
  }

  if (!movieInfo) return null;
  return (
    <div className={card} onClick={handleCardClick}>
      <img className={poster} src={`${IMAGE_URL}${movieInfo.poster_path}`} alt={movieInfo.title} />
      <p className={title}>{movieInfo.title}</p>
      <div className={score}>
        <img className={star} src="/src/assets/star.svg" />
        <span className="vote">{movieInfo.vote_average.toFixed(1)}</span>
      </div>
    </div>
  )
}
