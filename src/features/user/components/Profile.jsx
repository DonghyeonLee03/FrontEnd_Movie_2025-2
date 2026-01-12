import { profile } from "./Profile.css";
import MyMenu from "./MyMenu";
import useProfileStore from "../store/profileStore";

export default function Profile() {
  const { isToggle, setIsToggle } = useProfileStore();

  const handleBlur = (e) => {
    if (e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
    setIsToggle(false);
  };
  return (
    <div onBlur={handleBlur} tabIndex="-1">
      <button className={profile} onClick={() => setIsToggle(!isToggle)}>
        <img src="/src/assets/Vector.png" />
      </button>
      {isToggle ? <MyMenu /> : null}
    </div>
  );
}
