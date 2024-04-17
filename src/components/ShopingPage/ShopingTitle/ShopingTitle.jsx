import { NavLink } from "react-router-dom";
import style from "./ShopingTitle.module.css";
import { useSelector } from "react-redux";
import {
  selectCart,
  selectFavorite,
} from "../../../features/products/productsSlice";
import { GREEN_PRODUCT_PAGE } from "../../../utils/URL";

function ShopingTitle({ type }) {
  const cart = useSelector(selectCart);
  const favorite = useSelector(selectFavorite);

  return (
    <section className={style.content}>
      <div className={style.title}>
        <h1>{type == "cart" ? `YOUR CARD` : `YOUR FAVORITES`}</h1>
        {type == "cart" ? (
          <p>{cart.length ? `It's contains ${cart.length} items` : `Empty`}</p>
        ) : (
          <p>
            {favorite.length
              ? `It's contains ${favorite.length} items`
              : `Empty`}
          </p>
        )}
      </div>
      <NavLink to={GREEN_PRODUCT_PAGE}>
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
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
      </NavLink>
    </section>
  );
}

export default ShopingTitle;
