import { useState } from "react";
import { ModalContext } from "./ModalContext";

export function ModalProvider({children}) {
  const [isModal, setIsModal] = useState(false);
  const [movieInfo, setMovieInfo] = useState(null);
  const [myScore, setMyScore] = useState(0);

  const openModal = (data) => {
    setMovieInfo(data);
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
    setMyScore(0);
    setMovieInfo(null);
  };
  const updateMyScore = (data) => {
    setMyScore(data);
  }

  return (
    <ModalContext.Provider value={{ isModal, movieInfo, myScore, openModal, closeModal, updateMyScore }}>
      {children}
    </ModalContext.Provider>
  );
}
