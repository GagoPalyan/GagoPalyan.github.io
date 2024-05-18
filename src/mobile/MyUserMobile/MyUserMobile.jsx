import { useSelector } from "react-redux";
import style from "./MyUserMobile.module.css";
import { selectUser } from "../../features/profile/profileSlice";
import SignUp from "../../sharedComponents/MyUser/SignUp/SignUp";
import User from "../../sharedComponents/MyUser/User/User";

function MyUserMobile({ setPopup }) {
  const user = useSelector(selectUser);

  return (
    <main className={style.content}>
      {!user ? (
        <SignUp setPopup={setPopup} />
      ) : (
        <User user={user} setPopup={setPopup} />
      )}
    </main>
  );
}

export default MyUserMobile;
