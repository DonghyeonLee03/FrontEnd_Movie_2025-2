import { IMAGE_URL, commentList } from "../constants";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { useModal } from "../hooks/useModal";
import ScoreBoard from "./ScoreBoard";
import { overlay, modal, header, title, button, frame, poster, info, detail, genre, star, overview, scoreBoard, score, comment } from "./style/Modal.css";

export default function Modal({genreList}) {
  const { isModal, movieInfo, myScore, closeModal } = useModal();
  const potalElement = document.getElementById("modal");
  
  useEffect(()=>{
    if (!isModal) return;
    if (!potalElement) return;

    const handleEsc = (e) => {
      if(e.key === 'Escape')
        closeModal();
    }
    window.addEventListener('keydown',handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    }
  },[isModal, closeModal, potalElement]);

  const getGenreNames = (genreIds) => {
    if (!genreList || genreList.length === 0) return "";

    return genreIds.map(id => {
      const selectedGenre = genreList.find(g => g.id === id);
      return selectedGenre ? selectedGenre.name : null;
    })
    .join(", ");
  }
  if (!movieInfo) return null;

  return ReactDOM.createPortal(
    <section className={overlay}>
      <div className={modal}>
        <header className={header}>
          <p className={title}>{movieInfo.title}</p>
          <button className={button} onClick={closeModal}>×</button>
        </header>
        <div className={frame}>
          <img
            className={poster}
            src={`${IMAGE_URL}${movieInfo.poster_path}`}
          />
          <div className={info}>
            <div className={detail}>
              <span className={genre}>{getGenreNames(movieInfo.genre_ids)}</span>
              <img className={star} src="/src/assets/star.svg" />
              <span className="modalScore">{`${movieInfo.vote_average.toFixed(1)}`}</span>
            </div>
            <div className={overview}>{`${movieInfo.overview}`}</div>
            <div className={scoreBoard}>
              내 별점
              <ScoreBoard />
              <span className={score}>{`${Number(myScore)*2}`}</span>
              <span className={comment}>{`${commentList[Number(myScore)]}`}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    , potalElement
  );
}
