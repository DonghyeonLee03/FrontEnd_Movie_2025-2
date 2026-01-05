import { Routes, Route, Navigate } from "react-router-dom";
import PopularPage from "./pages/PopularPage";
import SearchPage from "./pages/SearchPage";
import MyPage from "./pages/MyPage";
import Header from "./components/Header";
import Modal from "./components/Modal";
import "./global.css";
import useGenreStore from "./store/genre";
import { useEffect } from "react";

export default function App() {
  const { fetchGenre } = useGenreStore();

  useEffect(() => {
    fetchGenre();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/popular" replace />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Modal />
    </>
  );
}
