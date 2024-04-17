import { useState } from "react";
import style from "./Quantity.module.css";

function Quantity({ qnt, setQnt }) {
  return (
    <div className={style.qnt}>
      <button disabled={qnt <= 1} onClick={() => setQnt((prev) => prev - 1)}>
        -
      </button>
      <h1>{qnt}</h1>
      <button disabled={qnt >= 100} onClick={() => setQnt((prev) => prev + 1)}>
        +
      </button>
    </div>
  );
}

export default Quantity;
