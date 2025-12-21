export default function ScoreBoard({hover, myScore, setHover, setMyScore, movieInfo}) {
  function handleScoreClick(starIndex){
    setMyScore(starIndex);
    const savedScore = JSON.parse(localStorage.getItem("movieScores")) || {};
    const movieTitle = movieInfo.title;
    savedScore[movieTitle] = starIndex;
    localStorage.setItem("movieScores", JSON.stringify(savedScore));
  }

  return (
    <div className="scoreBoard">
      {[...Array(5)].map((_, index) =>{
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
  )
}