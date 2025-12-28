import { useModal } from "../hooks/useModal";
import { useState } from "react";
import { useMovieList } from "../hooks/useMovieList";
import { myStarRate, button, star } from "./style/ScoreBoard.css";

export default function ScoreBoard() {
  const {updateReviewList} = useMovieList();

  const { movieInfo, myScore, updateMyScore } = useModal();
  const [hover, setHover] = useState(0);

  function handleScoreClick(starIndex){
    updateMyScore(starIndex);
    /*const savedScore = JSON.parse(localStorage.getItem("movieScores")) || {};
    const movieTitle = movieInfo.title;
    savedScore[movieTitle] = starIndex;
    localStorage.setItem("movieScores", JSON.stringify(savedScore));*/
    updateReviewList(movieInfo, starIndex);
  }

  return (
    <div className={myStarRate}>
      {[...Array(5)].map((_, index) =>{
        const starIndex = index + 1;
        return (
          <button
            key={starIndex}
            className={button}
            onClick={()=>handleScoreClick(starIndex)}
            onMouseEnter={()=>setHover(starIndex)}
            onMouseLeave={()=>setHover(0)}
          >
            <img
              className={star}
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
  )
}
