import { useState, useEffect } from 'react'
import { getGenre } from './api/getGenre';
import { Routes, Route, Navigate } from 'react-router-dom';
import PopularPage from './pages/PopularPage';
import SearchPage from './pages/SearchPage';
import MyPage from './pages/MyPage';
import Header from './components/Header';
import Modal from './components/Modal';
import { ModalProvider } from './context/ModalProvider';
import { MovieListProvider } from './context/MovieListProvider';
import './global.css';

export default function App() {
  const [genre, setGenre] = useState([]);
  
  useEffect(()=>{
    const fetchGenre = async () => {
      const data = await getGenre();
      if (data) {
        setGenre(data.genres);
      }
    }
    fetchGenre();
  },[]);

  return (
    <MovieListProvider>
      <ModalProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/popular" replace />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        <Modal genreList={genre} />
      </ModalProvider>
    </MovieListProvider>
  )
}
