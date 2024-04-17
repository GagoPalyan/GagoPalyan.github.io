import style from "./BlogArticle.module.css";
import PageLocation from "../../sharedComponents/PageLocation/PageLocation";
import { HOME_PAGE, EXPERT_ADVICE_PAGE } from "../../utils/URL";
import img1 from "../../assets/Desktop/BlogArticle/Group 102.png";
import img2 from "../../assets/Desktop/BlogArticle/Rectangle 215.png";
import OftenBreakfast from "./OftenBreakfast/OftenBreakfast";
import { Link } from "react-router-dom";
import Title from "../../sharedComponents/Title/Title";
import ExpertAdviceImgSection from "../ExpertAdvice/ExpertAdviceImgSection/ExpertAdviceImgSection";
import { ExpertAdviceCartList1 } from "../ExpertAdvice/ExpertAdviceImgSection/ExpertAdviceCartList";
import { emailValidation } from "../../utils/validation";
import { useForm } from "react-hook-form";

function BlogArticle() {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });

  return (
    <main className={style.content}>
      <PageLocation
        prevPages={[
          { name: "HOME", path: HOME_PAGE },
          { name: "EXPERT ADVICE", path: EXPERT_ADVICE_PAGE },
        ]}
        thisPage="BLOG ARTICLE"
      />
      <section className={style.textContent}>
        <img className={style.background} src={img1} />
        <section className={style.textInfo}>
          <div className={style.leftSide}>
            <h6>December 4, 2023</h6>
            <h3>
              Nutritionist and exercise scientist Kathleen Alleaume looks at
              whether having breakfast is better than skipping it.
            </h3>
            <h1>Question:</h1>
            <p>
              Healthy eating advice used to always be that breakfast was the
              most important meal of the day but now, with the rise of
              intermittent fasting, people seem to say skipping breakfast is
              fine. Which is it? I’m confused
            </p>
            <h1>Ask:</h1>
            <p>
              Breakfast is an important meal because it ‘breaks’ the overnight
              ‘fast’ and fuels your body after a long period of sleep. There are
              many reasons why people avoid eating breakfast: because they are
              not hungry or in an attempt to reduce their daily calorie intake
              and lose weight. However, most studies have found no weight-loss
              benefit to skipping breakfast. On the contrary, there’s good
              evidence that eating breakfast can make a positive contribution to
              nutrient intake, including dietary fibre which may help with
              weight contro lattempt to reduce their daily calorie intake and
              lose weight. However, most studies have found no weight-loss
              benefit to skipping breakfast. On the contrary, there’s good
              evidence that eating breakfast can make a positive contribution to
              nutrient intake, including dietary fibre which may help with
              weight control Intermittent fasting is gaining popularity as a
              weight management tool, but it’s not a diet. Unlike most diets
              which dictate what foods you should and shouldn’t eat,
              intermittent fasting (aka time restricted eating) determines the
              times you eat — that is periods of eating alternated with periods
              of not eating (fasting). While research on fasting is still in its
              infancy, there is some evidence to show that time-restricted
              eating is associated with a range of health benefits, including
              promoting weight loss, reducing inflammation and improving
              diabetes management.
            </p>
            <div className={style.imgText}>
              <img src={img2} />
              <p>
                The bottom line is there isn’t a definitive answer to your
                question, as an eating time that suits one person may not suit
                another. There isn’t a specific time that breakfast should be
                eaten, but try not to leave it too long after waking — your body
                has been fasting overnight and not replenishing its energy
                stores can impact concentration and leave you feeling hungry and
                tired.
              </p>
            </div>
            <p>Considerations for Personalized Choices:</p>
            <p>
              1. Individual Variation: What works for one person may not work
              for another. Tailor dietary choices to personal preferences and
              lifestyle.
            </p>
            <p>
              2. Health Goals: Weight management goals may align with
              intermittent fasting, while energy sustainability might favor a
              balanced breakfast.
            </p>
            <p>
              3. Consultation: Before making significant dietary changes,
              especially for those with health conditions, consult with a
              healthcare professional or a registered dietitian.
            </p>
            <p>
              Conclusion:Whether you're a breakfast enthusiast or intrigued by
              intermittent fasting, the key is finding an approach that aligns
              with your lifestyle and health objectives. Both strategies can be
              healthy when done mindfully, emphasizing the importance of
              nutrient-dense foods and overall dietary balance. In the realm of
              breakfast versus intermittent fasting, personalization remains
              paramount.
            </p>
            <Link>
              Share To Frends
              <svg
                width="11.000000"
                height="9.000000"
                viewBox="0 0 11 9"
                fill="none"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M11 4.20001L6.72223 0L6.72223 2.39999C2.44446 3 0.611115 6 0 9C1.52777 6.89999 3.66666 5.94 6.72223 5.94L6.72223 8.39999L11 4.20001Z"
                  fill="#5E5C1E"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
            <h2>Sign Up for the healthy newsletter</h2>
            <form className={style.signUp}>
              <input
                style={errors.email?.message && { borderColor: "red" }}
                type="text"
                placeholder="Enter Your Email To Sign Up"
                {...register("email", emailValidation)}
              />
              <button>Get</button>
            </form>
          </div>
          <div className={style.rigthSide}>
            <OftenBreakfast />
            <OftenBreakfast />
            <OftenBreakfast />
          </div>
        </section>
      </section>
      <section className={style.YouCanRead}>
        <Title caption="You Can Read" text="Related Articles" />
        <div className={style.imgSection}>
          <ExpertAdviceImgSection list={ExpertAdviceCartList1} />
        </div>
      </section>
    </main>
  );
}

export default BlogArticle;
