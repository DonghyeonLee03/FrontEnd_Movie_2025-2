import { IMAGE_URL, commentList } from "/src/constants";
import ReactDOM from "react-dom";
import ScoreBoard from "./ScoreBoard";
import * as style from "./Modal.css";
import useModal from "../hooks/useModal";
import useUserListStore from "../../user/store/userListStore";
import useProfileStore from "../../user/store/profileStore";
import useModalStore from "../store/modalStore";

export default function Modal() {
  const { wishList, updateWishList } = useUserListStore();
  const { choice } = useModalStore();
  const { closeModal, getGenreNames, getMyScore } = useModal();
  const potalElement = document.getElementById("root");
  const { login } = useProfileStore();

  const isSelected = wishList.data.some((item) => item.id === choice?.id);

  const handleWish = () => {
    updateWishList(choice);
  };
  if (!choice) return null;

  return ReactDOM.createPortal(
    <section className={style.overlay}>
      <div className={style.modal}>
        <header className={style.header}>
          <p className={style.title}>{choice.title}</p>
          <button className={style.button} onClick={closeModal}>
            ×
          </button>
        </header>
        <div className={style.frame}>
          <img
            className={style.poster}
            src={`${IMAGE_URL}${choice.poster_path}`}
          />
          <div className={style.info}>
            <div className={style.detail}>
              <span className={style.genre}>
                {getGenreNames(choice.genre_ids)}
              </span>
              <img className={style.star} src="/src/assets/star.svg" />
              <span className="modalScore">{`${choice.vote_average.toFixed(
                1
              )}`}</span>
              <button
                className={style.heartBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  login ? handleWish() : alert("로그인 후에 가능합니다.");
                }}
              >
                <img
                  className={style.heart}
                  src={
                    isSelected && login
                      ? "/src/assets/Heart_01.png"
                      : "/src/assets/blank_Heart_01.svg"
                  }
                />
              </button>
            </div>
            <div className={style.overview}>{`${choice.overview}`}</div>
            <div className={style.scoreBoard}>
              내 별점
              <ScoreBoard />
              <span className={style.score}>{`${
                login ? getMyScore() * 2 : 0
              }`}</span>
              <span className={style.comment}>{`${
                commentList[login ? getMyScore() : 0]
              }`}</span>
            </div>
          </div>
        </div>
      </div>
    </section>,
    potalElement
  );
}
