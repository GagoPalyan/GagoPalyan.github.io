import style from "./WelcomExpertAdvice.module.css";
import img1 from "../../../assets/Desktop/ExpertAdvicea/Rectangle 217.png";

function WelcomExpertAdvice() {
  return (
    <section className={style.content}>
      <img src={img1} />
      <div className={style.textContent}>
        <h1>Welcome To Olive Experts Advice!</h1>
        <h2>Learn Useful Information About A Healthy Life</h2>
        <p>
          This is blog corner, here you can find the way how to be and become a
          carrier of a healthy lifestyle. When it comes to living a positive
          lifestyle, our habits can either make or break us. Habits decide our
          physical health, emotional well-being and even our outlook on life.
        </p>
        <div className={style.search}>
          <svg
            width="13.503052"
            height="13.503052"
            viewBox="0 0 13.5031 13.5031"
            fill="none"
          >
            <path
              id="Vector"
              d="M12.75 12.75L9.28552 9.28552M10.75 5.75C10.75 4.42395 10.2231 3.1521 9.28552 2.21448C8.34778 1.27673 7.07605 0.75 5.75 0.75C4.42395 0.75 3.1521 1.27673 2.21448 2.21448C1.27673 3.1521 0.75 4.42395 0.75 5.75C0.75 7.07605 1.27673 8.34778 2.21448 9.28552C3.1521 10.2231 4.42395 10.75 5.75 10.75C7.07605 10.75 8.34778 10.2231 9.28552 9.28552C10.2231 8.34778 10.75 7.07605 10.75 5.75Z"
              stroke="#2E2F25"
              strokeOpacity="1.000000"
              strokeWidth="1.500000"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search For The Answer To Your Desired Question"
          />
        </div>
      </div>
    </section>
  );
}

export default WelcomExpertAdvice;
