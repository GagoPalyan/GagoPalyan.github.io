import { useSelector } from "react-redux";
import style from "./Shoping.module.css";
import ShopingCart from "./ShopingCart/ShopingCart";
import ShopingTitle from "./ShopingTitle/ShopingTitle";
import { selectCart } from "../../features/products/productsSlice";
import { NavLink } from "react-router-dom";
import { GREEN_PRODUCT_PAGE } from "../../utils/URL";
import Title from "../../sharedComponents/Title/Title";

function Shoping() {
  const cart = useSelector(selectCart);

  return (
    <>
      {cart.length ? (
        <main className={style.content}>
          <ShopingTitle type="cart" />
          <ShopingCart />
        </main>
      ) : (
        <main className={style.empty}>
          <Title caption="Basket" text="The Cart Is Empty" />
          <NavLink to={GREEN_PRODUCT_PAGE}>Go To Shop</NavLink>
        </main>
      )}
    </>
  );
}

export default Shoping;
