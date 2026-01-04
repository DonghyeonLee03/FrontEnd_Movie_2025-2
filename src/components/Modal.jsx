import { IMAGE_URL, commentList } from "../constants";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import ScoreBoard from "./ScoreBoard";
import {
  overlay,
  modal,
  header,
  title,
  button,
  frame,
  poster,
  info,
  detail,
  genre,
  star,
  heartBtn,
  heart,
  overview,
  scoreBoard,
  score,
  comment,
} from "./style/Modal.css";
import { MyChoiceContext } from "../context/context";
import { useContext } from "react";
import useModal from "../hooks/useModal";

export default function Modal() {
  const { wishList, choice, updateWishList } = useContext(MyChoiceContext);
  const { isModal, closeModal, getGenreNames, getMyScore } = useModal();
  const potalElement = document.getElementById("root");

  const isSelected = wishList.data.some((item) => item.id === choice?.id);

  useEffect(() => {
    if (!isModal) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isModal, closeModal, potalElement]);

  const handleWish = () => {
    updateWishList(choice);
  };
  if (!choice) return null;

  return ReactDOM.createPortal(
    <section className={overlay}>
      <div className={modal}>
        <header className={header}>
          <p className={title}>{choice.title}</p>
          <button className={button} onClick={closeModal}>
            ×
          </button>
        </header>
        <div className={frame}>
          <img className={poster} src={`${IMAGE_URL}${choice.poster_path}`} />
          <div className={info}>
            <div className={detail}>
              <span className={genre}>{getGenreNames(choice.genre_ids)}</span>
              <img className={star} src="/src/assets/star.svg" />
              <span className="modalScore">{`${choice.vote_average.toFixed(
                1
              )}`}</span>
              <button className={heartBtn} onClick={handleWish}>
                <img
                  className={heart}
                  src={
                    isSelected
                      ? "/src/assets/Heart_01.png"
                      : "/src/assets/blank_Heart_01.svg"
                  }
                />
              </button>
            </div>
            <div className={overview}>{`${choice.overview}`}</div>
            <div className={scoreBoard}>
              내 별점
              <ScoreBoard />
              <span className={score}>{`${getMyScore() * 2}`}</span>
              <span className={comment}>{`${commentList[getMyScore()]}`}</span>
            </div>
          </div>
        </div>
      </div>
    </section>,
    potalElement
  );
}
