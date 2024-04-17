import { NavLink } from "react-router-dom";
import style from "./AboutHealthyLife.module.css";
import { ABOUT_US_PAGE } from "../../../utils/URL";

function AboutHealthyLife() {
  return (
    <section className={style.content}>
      <h1>learn useful information about a healthy life</h1>
      <p>
        This is blog corner, here you can find the way how to be and become a
        carrier of a healthy lifestyle. When it comes to living a positive
        lifestyle, our habits can either make or break us. Habits decide our
        physical health, emotional well-being and even our outlook on life.
      </p>
      <NavLink to={ABOUT_US_PAGE}>Read More</NavLink>
    </section>
  );
}

export default AboutHealthyLife;
