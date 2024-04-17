import { NavLink } from "react-router-dom";
import { selectFavorite } from "../../features/products/productsSlice";
import Cart from "../../sharedComponents/Cart/Cart";
import Title from "../../sharedComponents/Title/Title";
import { GREEN_PRODUCT_PAGE } from "../../utils/URL";
import ShopingTitle from "../ShopingPage/ShopingTitle/ShopingTitle";
import style from "./FavoritePage.module.css";
import { useSelector } from "react-redux";

function FavoritePage() {
  const favoriteList = useSelector(selectFavorite);

  return (
    <>
      {favoriteList.length ? (
        <main className={style.content}>
          <ShopingTitle type="favorite" />

          <div className={style.list}>
            {favoriteList.length > 0 ? (
              favoriteList.map((item) => <Cart key={item.id} item={item} />)
            ) : (
              <h1>There are currently no products available</h1>
            )}
          </div>
        </main>
      ) : (
        <main className={style.empty}>
          <Title caption="Favorites" text="The Favorite List Is Empty" />
          <NavLink to={GREEN_PRODUCT_PAGE}>Go To Shop</NavLink>
        </main>
      )}
    </>
  );
}

export default FavoritePage;
