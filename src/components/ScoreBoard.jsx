import { useState } from "react";
import { myStarRate, button, star } from "./style/ScoreBoard.css";
import useModal from "../hooks/useModal";
import useMyChoiceStore from "../store/MyChoiceStore";

export default function ScoreBoard() {
  const { choice, updateReviewList } = useMyChoiceStore();
  const { getMyScore } = useModal();
  const [hover, setHover] = useState(0);

  return (
    <div className={myStarRate}>
      {[...Array(5)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <button
            key={starIndex}
            className={button}
            onClick={() => updateReviewList(choice, starIndex)}
            onMouseEnter={() => setHover(starIndex)}
            onMouseLeave={() => setHover(0)}
          >
            <img
              className={star}
              src={
                starIndex <= (hover || getMyScore())
                  ? "/src/assets/star.svg"
                  : "/src/assets/blank_star.png"
              }
              alt="star"
            />
          </button>
        );
      })}
    </div>
  );
}
