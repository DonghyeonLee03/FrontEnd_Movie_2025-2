import { useState } from "react";
import { useContext } from "react";
import { GenreContext, MyChoiceContext } from "../context/context";

export default function useModal() {
  const genreList = useContext(GenreContext);
  const { reviewList, choice, updateChoice } = useContext(MyChoiceContext);
  const [isModal, setIsModal] = useState(false);

  const handleModal = (data) => {
    updateChoice(data);
    setIsModal(true);
  };
  const closeModal = () => {
    updateChoice(null);
    setIsModal(false);
  };
  const getGenreNames = (genreIds) => {
    if (!genreList || genreList.length === 0) return "";

    return genreIds
      .map((id) => {
        const selectedGenre = genreList.find((g) => g.id === id);
        return selectedGenre ? selectedGenre.name : null;
      })
      .join(", ");
  };
  const getMyScore = () => {
    if (!choice || !reviewList.data) return 0;
    const review = reviewList.data.find((item) => item.id === choice.id);
    return review?.score || 0;
  };

  return { isModal, handleModal, closeModal, getGenreNames, getMyScore };
}
