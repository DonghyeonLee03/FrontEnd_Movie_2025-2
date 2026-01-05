import { useEffect } from "react";
import useGenreStore from "../store/genre";
import useMyChoiceStore from "../store/MyChoiceStore";
import useGlobalStore from "../store/GlobalStore";

export default function useModal() {
  const { genreList } = useGenreStore();
  const { reviewList, choice, updateChoice } = useMyChoiceStore();
  const { isModal, setIsModal } = useGlobalStore();

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

  useEffect(() => {
    if (!isModal) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isModal]);

  return { isModal, handleModal, closeModal, getGenreNames, getMyScore };
}
