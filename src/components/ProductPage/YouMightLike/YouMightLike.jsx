import style from "./YouMightLike.module.css";
import Title from "../../../sharedComponents/Title/Title";
import Cart from "../../../sharedComponents/Cart/Cart";
import ProductList from "../../../utils/ProductList";

function YouMightLike({ caption, text, id }) {
  const list = () => (id < 6 ? [id, id + 1, id + 2] : [id - 2, id - 3, id - 4]);
  const idList = list();

  return (
    <section className={style.content}>
      <Title caption={caption} text={text} />
      <div className={style.carts}>
        {idList.map((item) => {
          return <Cart key={item} item={ProductList[item]} />;
        })}
      </div>
    </section>
  );
}

export default YouMightLike;
