import { NavLink } from "react-router-dom";
import style from "./DetoxJuiceMobile.module.css";
import { HOME_PAGE } from "../../../utils/URL";
import Title from "../../../sharedComponents/Title/Title";
import detoxSoomthies from "../../../assets/Desktop/Green Product/Group 94.png";

function DetoxJuiceMobile() {
  return (
    <section className={style.content}>
      <div className={style.back}>
        <NavLink to={HOME_PAGE}>
          <svg
            width="12.000000"
            height="20.000000"
            viewBox="0 0 12 20"
            fill="none"
          >
            <path
              d="M10 1L1 9.55"
              stroke="#716F23"
              strokeOpacity="1.000000"
              strokeWidth="2.000000"
              strokeLinecap="round"
            />
            <path
              d="M10 18.11L1 9.55"
              stroke="#716F23"
              strokeOpacity="1.000000"
              strokeWidth="2.000000"
              strokeLinecap="round"
            />
          </svg>
        </NavLink>
      </div>
      <Title
        caption="Detox Smoothies"
        text="Cold Infusion And Pressed Detox Juice"
      />
      <img src={detoxSoomthies} />
    </section>
  );
}

export default DetoxJuiceMobile;
