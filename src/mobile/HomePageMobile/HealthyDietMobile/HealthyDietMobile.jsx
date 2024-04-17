import HealthyDietList from "../../../components/HomePage/HealthyDiet/HealthyDietList/HealthyDietList";
import Title from "../../../sharedComponents/Title/Title";
import style from "./HealthyDietMobile.module.css";
import HealthyDietMobileCart from "./HealthyDietMobileCart/HealthyDietMobileCart";

function HealthyDietMobile() {
  return (
    <section className={style.content}>
      <Title caption="Category" text="Choose Your Healthy Diet" />
      <div className={style.cartList}>
        {HealthyDietList.map((item) => {
          return <HealthyDietMobileCart key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}

export default HealthyDietMobile;
