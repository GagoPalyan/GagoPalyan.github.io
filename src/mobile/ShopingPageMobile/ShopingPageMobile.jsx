import { NavLink } from "react-router-dom";
import style from "./ShopingPageMobile.module.css";
import { GREEN_PRODUCT_PAGE, PAYMENT_INFO } from "../../utils/URL";
import { useSelector } from "react-redux";
import { selectCart } from "../../features/products/productsSlice";
import { selectUser } from "../../features/profile/profileSlice";
import ShopingCartMobile from "./ShopingCartMobile/ShopingCartMobile";
import MyUserMobile from "../MyUserMobile/MyUserMobile";
import { useState } from "react";

function ShopingPageMobile() {
  const cartList = useSelector(selectCart);
  const user = useSelector(selectUser);
  const [popup, setPopup] = useState(false);

  return (
    <>
      {popup && <MyUserMobile setPopup={setPopup} />}
      <main className={style.content}>
        <NavLink to={GREEN_PRODUCT_PAGE}>
          <svg
            width="12.000000"
            height="19.000000"
            viewBox="0 0 12 19"
            fill="none"
          >
            <path
              id="Line 86"
              d="M10 0.44L1 9"
              stroke="#716F23"
              strokeOpacity="1.000000"
              strokeWidth="2.000000"
              strokeLinecap="round"
            />
            <path
              id="Line 87"
              d="M10 17.55L1 9"
              stroke="#716F23"
              strokeOpacity="1.000000"
              strokeWidth="2.000000"
              strokeLinecap="round"
            />
          </svg>
        </NavLink>
        <h3>Your Card</h3>
        <h2>It's contains {cartList.length} items</h2>
        {cartList.map((item) => {
          return <ShopingCartMobile key={item.id} item={item} />;
        })}
        {user ? (
          <NavLink to={PAYMENT_INFO} className={style.buyNow}>
            Buy Now
          </NavLink>
        ) : (
          <button
            onClick={() => {
              setPopup(true);
            }}
            className={style.buyNow}
          >
            Buy Now
          </button>
        )}
      </main>
    </>
  );
}

export default ShopingPageMobile;
