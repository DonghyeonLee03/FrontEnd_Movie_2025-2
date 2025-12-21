import { useState, useEffect } from 'react'
import { getGenre } from './api/getGenre';
import { Routes, Route, Navigate } from 'react-router-dom';
import PopularPage from './pages/PopularPage';
import SearchPage from './pages/SearchPage';
import Header from './components/Header';
import Modal from './components/Modal';
import './App.css'


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
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/popular" replace />} />
        <Route path="/popular" element={<PopularPage/>}>
          <Route path="movie/:id" element={<Modal genre={genre} />} />
        </Route>
        <Route path="/search/:query" element={<SearchPage />}>
          <Route path="movie/:id" element={<Modal genre={genre} />} />
        </Route>
      </Routes>
    </>
  )
}
