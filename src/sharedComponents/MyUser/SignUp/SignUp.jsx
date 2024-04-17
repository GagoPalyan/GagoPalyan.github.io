import { useState } from "react";
import style from "./SignUp.module.css";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";

function SignUp({ setPopup }) {
  const [signUpPage, setSignUpPage] = useState(false);

  return (
    <div onMouseDown={(e) => e.stopPropagation()} className={style.popup}>
      <h1>It’s Time To Sign In</h1>
      {!signUpPage ? (
        <Login setPopup={setPopup} setSignUpPage={setSignUpPage} />
      ) : (
        <Registration setPopup={setPopup} setSignUpPage={setSignUpPage} />
      )}
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
    </div>
  );
}

export default SignUp;
