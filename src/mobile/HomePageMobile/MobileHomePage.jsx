import AboutHealthyLifeMobile from "./AboutHealthyLife/AboutHealthyLifeMobile";
import FeedbackMobile from "./FeedbackMobile/FeedbackMobile";
import GoToShop from "./GoToShop/GoToShop";
import HealthyDietMobile from "./HealthyDietMobile/HealthyDietMobile";
import style from "./MobileHomePage.module.css";
import SwipeUpToHealyLife from "./SwipeUpToHealyLife/SwipeUpToHealyLife";
import VeryTastyMobile from "./VeryTasty/VeryTastyMobile";

function MobileHomePage() {
  return (
    <main className={style.content}>
      <SwipeUpToHealyLife />
      <VeryTastyMobile />
      <AboutHealthyLifeMobile />
      <GoToShop />
      <HealthyDietMobile />
      <FeedbackMobile />
    </main>
  );
}

export default MobileHomePage;
