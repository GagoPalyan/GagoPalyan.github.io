import ImportentYourLifeList from "../../../components/HomePage/ImportentYourLife/ImportentYourLifeList/ImportentYourLifeList";
import Title from "../../../sharedComponents/Title/Title";
import AboutCartMobile from "./AboutCartMobile/AboutCartMobile";
import style from "./AboutHealthyLife.module.css";

function AboutHealthyLifeMobile() {
  return (
    <section className={style.content}>
      <Title caption="Go To Blog" text="About A Healthy Lifestyle" />
      {ImportentYourLifeList.map((item) => {
        return <AboutCartMobile key={item.id} item={item} />;
      })}
    </section>
  );
}

export default AboutHealthyLifeMobile;
