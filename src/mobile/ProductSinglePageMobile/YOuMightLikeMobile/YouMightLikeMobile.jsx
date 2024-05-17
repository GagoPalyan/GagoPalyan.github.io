import Cart from "../../../sharedComponents/Cart/Cart";
import Title from "../../../sharedComponents/Title/Title";
import ProductList from "../../../utils/ProductList";
import style from "./YouMightLikeMobile.module.css";

function YouMightLikeMobile({ id }) {
  const newId = id < ProductList.length ? id : id - 2;

  return (
    <section className={style.content}>
      <Title caption="For Healthy Life" text="You Might Like" />
      <Cart key={newId} item={ProductList[newId]} />
    </section>
  );
}

export default YouMightLikeMobile;
