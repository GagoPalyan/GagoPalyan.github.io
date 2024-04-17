import style from "./HealthyDietMobileCart.module.css";

function HealthyDietMobileCart({ item }) {
  return (
    <div
      style={{ background: `url(${item.image}) center/cover no-repeat` }}
      className={style.cart}
    >
      <h2>{item.text}</h2>
    </div>
  );
}

export default HealthyDietMobileCart;
