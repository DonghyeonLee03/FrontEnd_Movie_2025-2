import { Routes, Route, Navigate } from "react-router-dom";
import PopularPage from "./pages/PopularPage";
import SearchPage from "./pages/SearchPage";
import MyPage from "./pages/MyPage";
import Header from "./components/Header";
import Modal from "./features/movie-detail/components/Modal";
import "./styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/popular" replace />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Modal />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
