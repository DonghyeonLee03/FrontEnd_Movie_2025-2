import { useState } from "react";
import { profile } from "./style/Profile.css";
import MyMenu from "./MyMenu";

export default function Profile() {
  const [isToggle, setIsToggle] = useState(false);

  const handleBlur = (e) => {
    if (e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
    setIsToggle(false);
  };
  return (
    <div onBlur={handleBlur} tabIndex="-1">
      <button className={profile} onClick={() => setIsToggle((prev) => !prev)}>
        <img src="/src/assets/Vector.png" />
      </button>
      {isToggle ? <MyMenu /> : null}
    </div>
  );
}
