import { useState } from "react";
import { myStarRate, button, star } from "./ScoreBoard.css";
import useModal from "../hooks/useModal";
import useUserListStore from "../../user/store/userListStore";
import useProfileStore from "../../user/store/profileStore";
import useModalStore from "../store/modalStore";

export default function ScoreBoard() {
  const { updateReviewList } = useUserListStore();
  const { choice } = useModalStore();
  const { login } = useProfileStore();
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
            onClick={() =>
              login
                ? updateReviewList(choice, starIndex)
                : alert("로그인 후에 가능합니다.")
            }
            onMouseEnter={() => (login ? setHover(starIndex) : 0)}
            onMouseLeave={() => (login ? setHover(0) : 0)}
          >
            <img
              className={star}
              src={
                login && starIndex <= (hover || getMyScore())
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
