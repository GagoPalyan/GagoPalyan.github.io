import Title from "../../../sharedComponents/Title/Title";
import ItemCarts from "../ItemCarts/ItemCarts";
import style from "./VeryTasty.module.css";
import VeryTastyList from "./VeryTastyList/VeryTastyList";

function VeryTasty() {
  return (
    <section className={style.content}>
      <Title caption="you don’t believe" text="healthy eating is very tasty" />
      <div className={style.cartDiv}>
        {VeryTastyList.map((item) => {
          return (
            <ItemCarts
              key={item.id}
              item={item}
              cartStyle={{
                type: 1,
                width: "418px",
                height: "396px",
                button: item.link,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

export default VeryTasty;
