import { NavLink } from "react-router-dom";
import style from "./AboutCartMobile.module.css";
import { FAQ_PAGE } from "../../../../utils/URL";

function AboutCartMobile({ item }) {
  return (
    <div className={style.cart}>
      <img src={item.image} alt={item.caption} />
      <h3>{item.text[0]}</h3>
      <p>{item.text[1]}</p>
      <NavLink to={FAQ_PAGE}>Read More</NavLink>
    </div>
  );
}

export default AboutCartMobile;
