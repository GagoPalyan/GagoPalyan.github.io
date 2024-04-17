import Title from "../../../sharedComponents/Title/Title";
import style from "./FeedbackMobile.module.css";
import FeedbackMobileCart from "./FeedbackMobileCart/FeedbackMobileCart";

function FeedbackMobile() {
  return (
    <section className={style.content}>
      <Title caption="reviwe" text="Customer feedback " />
      <FeedbackMobileCart />
    </section>
  );
}

export default FeedbackMobile;
