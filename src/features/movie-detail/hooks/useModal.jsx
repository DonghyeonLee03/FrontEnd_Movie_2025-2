import { useEffect, useCallback } from "react";
import useUserListStore from "../../user/store/userListStore";
import useModalStore from "../store/modalStore";
import { useGenreList } from "./useGenreQuery";

export default function useModal() {
  const { data: genreData } = useGenreList();
  const { reviewList } = useUserListStore();
  const { isModal, choice, setIsModal, setChoice } = useModalStore();

  const handleModal = (data) => {
    setChoice(data);
    setIsModal(true);
  };

  const closeModal = useCallback(() => {
    setChoice(null);
    setIsModal(false);
  }, [setChoice, setIsModal]);

  const getGenreNames = (genreIds) => {
    if (!genreData || genreData.length === 0) return "";

    return genreIds
      .map((id) => {
        const selectedGenre = genreData.find((g) => g.id === id);
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
  }, [isModal, closeModal]);

  return { isModal, handleModal, closeModal, getGenreNames, getMyScore };
}
