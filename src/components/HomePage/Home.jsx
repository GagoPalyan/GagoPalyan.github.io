import style from "./Home.module.css";
import Find from "./Find/Find";
import VeryTasty from "./VeryTasty/VeryTasty";
import AboutHealthyLife from "./AboutHealthyLife/AboutHealthyLife";
import ImportentYourLife from "./ImportentYourLife/ImportentYourLife";
import HealthyTime from "./HealthyTime/HealthyTime";
import HealthyDiet from "./HealthyDiet/HealthyDiet";
import FeedbackProduct from "./FeedbackProduct/FeedbackProduct";
import Media from "react-media";
import MobileHomePage from "../../mobile/HomePageMobile/MobileHomePage";

function Home() {
  return (
    <Media query={"(max-width: 992px)"}>
      {(matchers) => {
        return !matchers ? (
          <main className={style.main}>
            <Find />
            <VeryTasty />
            <AboutHealthyLife />
            <ImportentYourLife />
            <HealthyTime />
            <HealthyDiet />
            <FeedbackProduct />
          </main>
        ) : (
          <MobileHomePage />
        );
      }}
    </Media>
  );
}

export default Home;
