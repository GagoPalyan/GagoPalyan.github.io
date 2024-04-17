import { NavLink } from "react-router-dom";
import style from "./YourCart.module.css";
import Quantity from "../Quantity/Quantity";
import { useDispatch } from "react-redux";
import { removeCart, updateCart } from "../../features/products/productsSlice";
import { useEffect, useState } from "react";

function YourCart({ product }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const [qnt, setQnt] = useState(product.qnt);

  useEffect(() => {
    dispatch(updateCart([product.id, qnt]));
  }, [qnt]);

  return (
    <div className={style.cart}>
      <img src={product.image} alt={product.name} />
      <div className={style.info}>
        <div className={style.category}>
          <h1>{product.category}</h1>
        </div>
        <div className={style.buy}>
          <div className={style.text}>
            <p>{product.name}</p>
            <p>Size: {product.size}</p>
          </div>
          <Quantity qnt={qnt} setQnt={setQnt} />
          <h2>{user ? user.addreas : "No address specified"}</h2>
          <h3>${product.price}</h3>
        </div>
        <div className={style.aboutCart}>
          <NavLink to={`/green-product/${product.id}`}>
            Veiw more detials
          </NavLink>
          <div className={style.whatToDo}>
            <button
              onClick={() => {
                dispatch(removeCart(product.id));
              }}
            >
              Remove Item
            </button>
            <button>Save For Later</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourCart;
