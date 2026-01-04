import { useNavigate } from "react-router-dom";

export default function usePage() {
  const navigate = useNavigate();

  const goPopular = () => {
    navigate("/popular");
  };
  const goSearch = (data) => {
    navigate(`/search?query=${data}`);
  };
  const toggleMode = (mode) => {
    navigate(`/mypage?mode=${mode}`);
  };

  return { handleHomeLogo: goPopular, goSearch, toggleMode };
}
