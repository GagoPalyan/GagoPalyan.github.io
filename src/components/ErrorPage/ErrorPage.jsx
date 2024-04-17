import { NavLink } from "react-router-dom";
import style from "./ErrorPage.module.css";
import { HOME_PAGE } from "../../utils/URL";
import error404 from "../../assets/Desktop/404/404.png";

function ErrorPage() {
  return (
    <main className={style.content}>
      <img src={error404} alt="Error 404" />
      <h1>Sorry!</h1>
      <h2>We Have A Problem</h2>
      <h3>The Pear Tries To Escape</h3>
      <NavLink to={HOME_PAGE}>Back To Home</NavLink>
    </main>
  );
}

export default ErrorPage;
