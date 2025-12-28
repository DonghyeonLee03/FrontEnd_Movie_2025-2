import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { menu, tail, list, item } from "./style/MyMenu.css";

export default function MyMenu() {
  const navigate = useNavigate();

  const [isLogIn, setIsLogIn] = useState(false);

  const handleLogin = () => {
    setIsLogIn((prev) => !prev);
  }
  const handleGoPage = () => {
    if (isLogIn){
      navigate('/mypage');
    }
  }

  return (
    <div className={menu}>
      <img className={tail} src="/src/assets/Frame 82.png" />
      <ul className={list}>
        <li className={item} onClick={handleLogin}>
          {isLogIn?"로그아웃":"로그인"}
        </li>
        <li className={item} onClick={handleGoPage}>
          {isLogIn?"마이페이지":"회원가입"}
        </li>
      </ul>
    </div>
  );
}
