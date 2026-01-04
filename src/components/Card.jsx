import { IMAGE_URL } from "../constants";
import { card, poster, title, score, star } from "./style/Card.css";
import useModal from "../hooks/useModal";

export default function Card({ movieInfo }) {
  const { handleModal } = useModal();

  if (!movieInfo) return null;
  return (
    <div className={card} onClick={() => handleModal(movieInfo)}>
      <img
        className={poster}
        src={`${IMAGE_URL}${movieInfo.poster_path}`}
        alt={movieInfo.title}
      />
      <p className={title}>{movieInfo.title}</p>
      <div className={score}>
        <img className={star} src="/src/assets/star.svg" />
        <span className="vote">{movieInfo.vote_average.toFixed(1)}</span>
      </div>
    </div>
  );
}
