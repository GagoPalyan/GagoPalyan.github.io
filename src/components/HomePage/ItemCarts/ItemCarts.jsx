import React from "react";
import style from "./ItemCarts.module.css";

function ItemCarts({ item, cartStyle, imgHeight = false }) {
  switch (cartStyle.type) {
    case 1:
      return (
        <div
          className={style.cartType1}
          style={{ width: cartStyle.width, height: cartStyle.height }}
        >
          <img
            style={imgHeight ? { height: imgHeight } : null}
            src={item.image}
            alt={item.text}
          />
          <h3>{item.text}</h3>
          {cartStyle.button ? (
            <a target="_blank" href={cartStyle.button}>
              Read more
            </a>
          ) : null}
        </div>
      );
    case 2:
      return (
        <div
          className={style.cartType2}
          style={{ width: cartStyle.width, height: cartStyle.height }}
        >
          <img src={item.image} alt={item.text[0]} />
          <h3>{item.text[0]}</h3>
          <p>{item.text[1]}</p>
        </div>
      );
  }
}

export default ItemCarts;
