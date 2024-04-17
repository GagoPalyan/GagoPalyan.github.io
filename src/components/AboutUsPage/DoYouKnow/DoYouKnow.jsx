import style from "./DoYouKnow.module.css";
import ImgContent from "../ImgContent/ImgContent";
import ImgContent2 from "../../../assets/Desktop/About Us/imgContent2.png";

function DoYouKnow() {
  return (
    <section className={style.DoYouKnow}>
      <ImgContent
        image={ImgContent2}
        caption="Do you know?"
        text="what we do"
        titlePosition="center"
        reverse={true}
        type={2}
      >
        <p style={{ marginBottom: "20px" }}>
          Our company helps people who are struggling with their eating habits
          to feel good and eat well for the REST OF THEIR LIFE. We do this by
          teaching one nutrition principle at a time and showing how to
          establish this knowledge as a habit in everyday life. This is unlike
          other online programs that simply give you a meal plan, a list of
          ‘good’ and ‘bad’ foods or expect to you change everything all at once.
        </p>
        <p>
          We do this through ‘flip-learning’ based education, expert meal
          planning, individualised application, delicious recipes and ongoing
          support from qualified nutritionists and dietitians.
        </p>
      </ImgContent>
    </section>
  );
}

export default DoYouKnow;
