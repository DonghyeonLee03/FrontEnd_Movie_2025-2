import { useNavigate, useSearchParams } from "react-router-dom";

export default function usePage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const mode = searchParams.get("mode") || "";
  const pageMode = query ? "SEARCH" : mode ? "MYPAGE" : "POPULAR";

  const navigate = useNavigate();

  const goPopular = () => {
    navigate("/");
  };
  const goSearch = (data) => {
    navigate(`/search?query=${data}`);
  };
  const toggleMode = (mode) => {
    navigate(`/mypage?mode=${mode}`);
  };

  return { query, mode, pageMode, goPopular, goSearch, toggleMode };
}
