import style from "./MyUser.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/profile/profileSlice";
import SignUp from "./SignUp/SignUp";
import User from "./User/User";

function SingUp({ setPopup }) {
  const user = useSelector(selectUser);

  return (
    <div onMouseDown={() => setPopup(false)} className={style.background}>
      {!user ? (
        <SignUp setPopup={setPopup} />
      ) : (
        <User user={user} setPopup={setPopup} />
      )}
    </div>
  );
}

export default SingUp;
