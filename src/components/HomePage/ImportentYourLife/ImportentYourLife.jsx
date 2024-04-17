import Title from "../../../sharedComponents/Title/Title";
import ItemCarts from "../ItemCarts/ItemCarts";
import style from "./ImportentYourLife.module.css";
import ImportentYourLifeList from "./ImportentYourLifeList/ImportentYourLifeList";

function ImportentYourLife() {
  return (
    <section className={style.content}>
      <Title
        caption="Do you know?"
        text="sustainable diet is importent for your life"
      />
      <div className={style.cartDiv}>
        {ImportentYourLifeList.map((item) => {
          return (
            <ItemCarts
              key={item.id}
              item={item}
              cartStyle={{
                type: 2,
                width: "418px",
                height: "407px",
                button: false,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ImportentYourLife;
