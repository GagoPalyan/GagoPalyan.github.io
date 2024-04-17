import { useDispatch } from "react-redux";
import { logOut } from "../../../utils/profile";
import style from "./User.module.css";
import { setProfile } from "../../../features/profile/profileSlice";

function User({ user, setPopup }) {
  const dispatch = useDispatch();

  const logout = () => {
    logOut();
    dispatch(setProfile(null));
    setPopup(false);
  };

  return (
    <div onMouseDown={(e) => e.stopPropagation()} className={style.popup}>
      <h1>Your Profile Informations</h1>
      <div className={style.info}>
        <ul>
          <li>User:</li>
          <li>Addreas:</li>
          <li>Email:</li>
          <li>Balance:</li>
        </ul>
        <ul className={style.myInfo}>
          <li>
            {user.name} {user.lastname}
          </li>
          <li>{user.addreas}</li>
          <li>{user.email}</li>
          <li>${user.balance}.00</li>
        </ul>
      </div>
      <button className={style.goBack} onClick={() => setPopup(false)}>
        <svg
          width="10"
          height="12"
          viewBox="0 0 10 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.47316 1.00162L1.29472 5.91975"
            stroke="#2E2A2A"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8.52442 10.9061L1.24387 5.91805"
            stroke="#2E2A2A"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        Shop More
      </button>
      <button className={style.goBack} onClick={logout}>
        Log Out
      </button>
    </div>
  );
}

export default User;
