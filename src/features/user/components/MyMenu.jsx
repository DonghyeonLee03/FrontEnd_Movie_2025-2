import { menu, tail, list, item } from "./MyMenu.css";
import useProfileStore from "../store/profileStore";
import usePage from "../../../hooks/usePage";

export default function MyMenu() {
  const { login, setLogin, setIsToggle } = useProfileStore();
  const { goPopular, toggleMode: goMyPage } = usePage();

  const handleLogin = () => {
    if (login) {
      setLogin(false);
      setIsToggle(false);
      goPopular();
    } else {
      setLogin(true);
      setIsToggle(false);
    }
  };
  const handleGoPage = () => {
    if (login) {
      goMyPage("review");
      setIsToggle(false);
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
