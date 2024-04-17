import { NavLink } from "react-router-dom";
import style from "./EatingBreakfast.module.css";
import img1 from "../../../assets/Desktop/ExpertAdvicea/Rectangle 301.png";
import { BLOG_PAGE } from "../../../utils/URL";

function EatingBreakfast() {
  return (
    <section className={style.content}>
      <img src={img1} />
      <div className={style.textContent}>
        <h1>Eating Breakfast vs Intermittent Fasting</h1>
        <p>
          Breakfast is an important meal because it ‘breaks’ the overnight
          ‘fast’ and fuels your body after a long period of sleep. There are
          many reasons why people avoid eating breakfast: because they are not
          hungry or in an attempt to reduce their daily calorie intake and lose
          weight.
        </p>
        <div className={style.button}>
          <NavLink to={BLOG_PAGE}>Read More</NavLink>
        </div>
      </div>
    </section>
  );
}

export default EatingBreakfast;
