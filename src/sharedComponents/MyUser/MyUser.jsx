import style from "./MyUser.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/profile/profileSlice";
import SignUp from "./SignUp/SignUp";
import User from "./User/User";
import Media from "react-media";
import MyUserMobile from "../../mobile/MyUserMobile/MyUserMobile";

function SingUp({ setPopup }) {
  const user = useSelector(selectUser);

  return (
    <Media query={"(max-width: 992px)"}>
      {(matchers) => {
        return !matchers ? (
          <div onMouseDown={() => setPopup(false)} className={style.background}>
            {!user ? (
              <SignUp setPopup={setPopup} />
            ) : (
              <User user={user} setPopup={setPopup} />
            )}
          </div>
        ) : (
          <MyUserMobile setPopup={setPopup} />
        );
      }}
    </Media>
  );
}

export default SingUp;
