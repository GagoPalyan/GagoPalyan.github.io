import Title from "../../../sharedComponents/Title/Title";
import ItemCarts from "../ItemCarts/ItemCarts";
import style from "./HealthyDiet.module.css";
import HealthyDietList from "./HealthyDietList/HealthyDietList";

function HealthyDiet() {
  return (
    <section className={style.content}>
      <Title caption="category" text="choose your healthy diet" />
      <div className={style.cartDiv}>
        {HealthyDietList.map((item) => {
          return (
            <ItemCarts
              key={item.id}
              item={item}
              cartStyle={{
                type: 1,
                width: "278px",
                height: "340px",
                button: false,
              }}
              imgHeight="296px"
            />
          );
        })}
      </div>
    </section>
  );
}

export default HealthyDiet;
