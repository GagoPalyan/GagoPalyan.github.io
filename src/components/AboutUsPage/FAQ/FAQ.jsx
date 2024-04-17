import style from "./FAQ.module.css";
import Title from "../../../sharedComponents/Title/Title";
import Questions from "./Questions/Questions";

function FAQ() {
  return (
    <section className={style.content}>
      <Title caption="FAQ" text="Friquently Asked Questions" />
      <h3>
        Hare You Can Find Friquently Asked Questions. We Help You To Find The
        Answer!
      </h3>
      <Questions
        question="How many meals should I eat per day?"
        text="So how often should you be eating? The Theory: Nutrition experts tend to recommend eating 3 balanced meals (350 to 600 calories each) and 1 to 3 snacks per day (between 150 and 200 calories each)."
      />
      <Questions
        question="How can I maintain a healthy diet on a busy schedule?"
        text="Healthy eating is challenging when you’re busy. It requires preparation and planning, but maintaining healthy eating habits is easier than you may think—and the rewards are well worth it. Eating a nutritious diet can help improve your health, boost your energy and immune system, reduce stress, and protect your overall well-being. If work and other responsibilities keep you busy, following nine simple tips can help you create a healthy eating plan that fits your hectic schedule."
      />
      <Questions
        question="Are there specific diets that guarantee a healthy lifestyle?"
        text="A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet. A healthy diet comprises a combination of different foods. These include:"
      />
      <Questions
        question="What constitutes a healthy lifestyle?"
        text="A healthy lifestyle involves a combination of balanced nutrition, regular physical activity, sufficient sleep, stress management, and avoiding harmful habits like smoking or excessive alcohol consumption. Nutrition is crucial for overall health. A healthy diet should include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. It provides essential nutrients and supports optimal body function."
      />
      <Questions
        question="How can I make healthier food choices at the grocery store?"
        text="Use the Nutrition Facts label to compare foods and find what's right for you. Choose items higher in dietary fiber, vitamins, and minerals, and lower in saturated fat, trans fat, sodium, and added sugars. Check the serving size when comparing calories and nutrients in different food products."
      />
      <Questions
        question="What are some healthy alternatives to sugary snacks?"
        text={`You know you want to take care of your teeth but you just can't help it — you have a sweet tooth! So you're asking, "What should I eat when I crave sweets?" Luckily, there are lots of easy options to choose from. Here are ten healthy (and tasty!) alternatives to sweets:`}
      />
      <Questions
        question="Are all fats bad for you?"
        text="No, not all fats are bad. Healthy fats, such as those found in avocados, nuts, and olive oil, are essential for bodily functions. It's important to limit saturated and trans fats."
      />
    </section>
  );
}

export default FAQ;
