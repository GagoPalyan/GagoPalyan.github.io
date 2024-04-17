import { NavLink } from "react-router-dom";
import style from "./GoToShop.module.css";
import { GREEN_PRODUCT_PAGE } from "../../../utils/URL";

function GoToShop() {
  return (
    <section className={style.content}>
      <div className={style.goToShop}>
        <h2>Do You Need To Live Haealthy?</h2>
        <h2>So You Need Detox Juice</h2>
        <NavLink to={GREEN_PRODUCT_PAGE}>Go To Shop</NavLink>
      </div>
    </section>
  );
}

export default GoToShop;
