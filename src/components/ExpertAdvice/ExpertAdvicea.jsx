import style from "./ExpertAdvicea.module.css";
import PageLocation from "../../sharedComponents/PageLocation/PageLocation";
import { HOME_PAGE } from "../../utils/URL";
import WelcomExpertAdvice from "./WelcomExpertAdvice/WelcomExpertAdvice";
import ExpertAdviceImgSection from "./ExpertAdviceImgSection/ExpertAdviceImgSection";
import EatingBreakfast from "./EatingBreakfast/EatingBreakfast";
import {
  ExpertAdviceCartList1,
  ExpertAdviceCartList2,
} from "./ExpertAdviceImgSection/ExpertAdviceCartList";

function ExpertAdvicea() {
  return (
    <main className={style.content}>
      <PageLocation
        prevPages={[{ name: "HOME", path: HOME_PAGE }]}
        thisPage="EXPERT ADVICE"
      />
      <WelcomExpertAdvice />
      <ExpertAdviceImgSection list={ExpertAdviceCartList1} />
      <EatingBreakfast />
      <ExpertAdviceImgSection list={ExpertAdviceCartList2} />
    </main>
  );
}

export default ExpertAdvicea;
