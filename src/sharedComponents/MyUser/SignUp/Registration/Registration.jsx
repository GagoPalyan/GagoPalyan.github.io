import { useForm } from "react-hook-form";
import style from "./Registration.module.css";
import { setProfile } from "../../../../features/profile/profileSlice";
import {
  addreasValidation,
  emailValidation,
  lastNameValidation,
  nameValidation,
  passwordValidation,
} from "../../../../utils/validation";
import { useDispatch } from "react-redux";
import { createUser } from "../../../../utils/profile";

function Registration({ setPopup, setSignUpPage }) {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const singUp = (data) => {
    dispatch(setProfile({ ...data, balance: 100 }));
    createUser(data);
    setPopup(false);
  };

  return (
    <div className={style.validation}>
      <form className={style.left} onSubmit={handleSubmit(singUp)}>
        <h1>New Customers</h1>
        <input
          style={errors.name?.message && { borderColor: "red" }}
          type="text"
          placeholder="Name"
          {...register("name", nameValidation)}
        />
        <p style={{ color: "red" }}>{errors.name?.message}</p>
        <input
          style={errors.lastname?.message && { borderColor: "red" }}
          type="text"
          placeholder="Lastname"
          {...register("lastname", lastNameValidation)}
        />
        <p style={{ color: "red" }}>{errors.lastname?.message}</p>
        <input
          style={errors.addreas?.message && { borderColor: "red" }}
          type="text"
          placeholder="Your addreas"
          {...register("addreas", addreasValidation)}
        />
        <p style={{ color: "red" }}>{errors.addreas?.message}</p>
        <input
          style={errors.email?.message && { borderColor: "red" }}
          type="text"
          placeholder="Email"
          {...register("email", emailValidation)}
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <input
          style={errors.password?.message && { borderColor: "red" }}
          type="password"
          placeholder="Password"
          {...register("password", passwordValidation)}
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <button className={style.submit}>Sign Up</button>
      </form>
      <div className={style.right}>
        <h1>Existing Customers</h1>
        <button className={style.btn} onClick={() => setSignUpPage(false)}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Registration;
