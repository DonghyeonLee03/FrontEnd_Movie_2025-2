import { useNavigate } from "react-router-dom";
import { menu, tail, list, item } from "./style/MyMenu.css";
import { useContext } from "react";
import { GlobalContext } from "../context/context";

export default function MyMenu() {
  const navigate = useNavigate();
  const { login, setLogin } = useContext(GlobalContext);

  const handleLogin = () => {
    setLogin((prev) => !prev);
  };
  const handleGoPage = () => {
    if (login) {
      navigate("/mypage?mode=review");
    }
  };

  return (
    <div className={menu}>
      <img className={tail} src="/src/assets/Frame 82.png" />
      <ul className={list}>
        <li className={item} onClick={handleLogin}>
          {login ? "로그아웃" : "로그인"}
        </li>
        <li className={item} onClick={handleGoPage}>
          {login ? "마이페이지" : "회원가입"}
        </li>
      </ul>
    </div>
  );
}
