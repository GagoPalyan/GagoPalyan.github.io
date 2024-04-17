import style from "./DetoxSmoothiesImg.module.css";
import image from "../../../assets/Desktop/Green Product/Group 94.png";

function DetoxSmoothiesImg() {
  return (
    <section className={style.content}>
      <div className={style.txtDiv}>
        <h1>Detox Smoothies</h1>
        <p>
          In Olive green products you can find tow type of juices` cold infusion
          and pressed detox juices.
        </p>
      </div>
      <img src={image} />
    </section>
  );
}

export default DetoxSmoothiesImg;
