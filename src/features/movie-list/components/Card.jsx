import { IMAGE_URL } from "/src/constants/index";
import {
  card,
  posterWrapper,
  poster,
  skeletonUI,
  title,
  score,
  star,
} from "./Card.css";
import useModal from "../../movie-detail/hooks/useModal";
import { useState } from "react";

export default function Card({ movieInfo }) {
  const { handleModal } = useModal();
  const [isLoaded, setIsLoaded] = useState(false);

  if (!movieInfo) return null;
  return (
    <div className={card} onClick={() => handleModal(movieInfo)}>
      <div className={posterWrapper}>
        {!isLoaded && <div className={skeletonUI} />}
        <img
          className={poster}
          src={`${IMAGE_URL}${movieInfo.poster_path}`}
          alt={movieInfo.title}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <p className={title}>{movieInfo.title}</p>
      <div className={score}>
        <img className={star} src="/src/assets/star.svg" />
        <span className="vote">{movieInfo.vote_average?.toFixed(1)}</span>
      </div>
    </div>
  );
}
