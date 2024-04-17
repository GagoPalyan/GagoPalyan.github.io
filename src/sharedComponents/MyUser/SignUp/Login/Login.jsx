import { useForm } from "react-hook-form";
import style from "./Login.module.css";
import { login } from "../../../../utils/profile";
import { useDispatch } from "react-redux";
import {
  emailValidation,
  passwordValidation,
} from "../../../../utils/validation";
import { useState } from "react";
import { setProfile } from "../../../../features/profile/profileSlice";

function Login({ setSignUpPage, setPopup }) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState(false);

  const logIn = (data) => {
    const account = login(data);
    account ? dispatch(setProfile(account)) : setMessage(true);
    account && setPopup(false);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  return (
    <div className={style.validation}>
      <form className={style.left} onSubmit={handleSubmit(logIn)}>
        <h1>Existing Customers</h1>
        <input
          style={errors.email?.message && { borderColor: "red" }}
          type="text"
          placeholder="Email"
          {...register("email", emailValidation)}
        />
        <button className={style.link}>Remember Me</button>
        <input
          style={errors.password?.message && { borderColor: "red" }}
          type="password"
          placeholder="Password"
          {...register("password", passwordValidation)}
        />
        <button className={style.link}>Forgot Password?</button>
        <p style={{ color: "red" }}>
          {message ? "Wrong login or password" : null}
        </p>
        <button className={style.submit}>Login</button>
      </form>
      <div className={style.right}>
        <h1>New Customers</h1>
        <button className={style.btn} onClick={() => setSignUpPage(true)}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
