import { useEffect, useState } from "react";
import Quantity from "../../../sharedComponents/Quantity/Quantity";
import style from "./ShopingCartMobile.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCart,
  updateCart,
} from "../../../features/products/productsSlice";
import { NavLink } from "react-router-dom";

function ShopingCartMobile({ item }) {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCart);

  const [qnt, setQnt] = useState(1);
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    let currentPrd = cartList.find((obj) => obj.id == item.id);
    if (currentPrd) {
      setCurrentProduct(currentPrd);
      setQnt(currentPrd.qnt);
    } else {
      setCurrentProduct({});
      setQnt(1);
    }
  }, [item, cartList]);

  useEffect(() => {
    if (Object.keys(currentProduct).length > 0) {
      dispatch(updateCart([currentProduct.id, qnt]));
    }
  }, [qnt]);

  return (
    <div className={style.cart}>
      <NavLink to={`/green-product/${item.id}`}>
        <img src={item.image} alt={item.name} />
      </NavLink>
      <div className={style.itemInfo}>
        <p>
          {item.category} - {item.name}
        </p>
        <p>{item.size}</p>
        <h2>${item.price}</h2>
        <Quantity qnt={qnt} setQnt={setQnt} />
      </div>
    </div>
  );
}

export default ShopingCartMobile;
