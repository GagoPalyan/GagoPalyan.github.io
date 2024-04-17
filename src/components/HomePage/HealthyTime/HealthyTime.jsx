import { NavLink } from "react-router-dom";
import style from "./HealthyTime.module.css";
import { GREEN_PRODUCT_PAGE } from "../../../utils/URL";

function HealthyTime() {
  return (
    <section className={style.content}>
      <div className={style.image}></div>
      <div className={style.text}>
        <h1>it’s time to be healthy!</h1>
        <p>
          Let’s see our green products corner, where we blend health and flavor
          into every sip. Our detox smoothie shop is a haven for those seeking a
          refreshing and revitalizing experience. Immerse yourself in a world of
          vibrant colors and wholesome goodness as you explore our menu of
          handcrafted detox smoothies.
        </p>
        <NavLink to={GREEN_PRODUCT_PAGE}>Go To Shop</NavLink>
      </div>
    </section>
  );
}

export default HealthyTime;
