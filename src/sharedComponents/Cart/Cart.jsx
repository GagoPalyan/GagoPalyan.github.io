import { Link } from "react-router-dom";
import style from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  removeCart,
  selectCart,
} from "../../features/products/productsSlice";

function Cart({ item }) {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCart);

  return (
    <div className={style.cart}>
      <Link to={`/green-product/${item.id}`} key={item.id}>
        <img src={item.image} />
      </Link>
      <div className={style.categoryPrice}>
        <h3>{item.category}</h3>
        <p>${item.price}</p>
      </div>
      <div className={style.nameBtn}>
        <h2>{item.name}</h2>
        {cartList.find((obj) => obj.id == item.id) ? (
          <button
            className={style.remove}
            onClick={() => {
              dispatch(removeCart(item.id));
            }}
          >
            Added
          </button>
        ) : (
          <button
            className={style.add}
            onClick={() => {
              dispatch(addCart({ ...item, qnt: 1 }));
            }}
          >
            Add To Card
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
