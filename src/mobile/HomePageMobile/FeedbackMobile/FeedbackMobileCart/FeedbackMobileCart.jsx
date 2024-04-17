import { useState } from "react";
import style from "./FeedbackMobileCart.module.css";
import FeedbackProductList from "../../../../components/HomePage/FeedbackProduct/FeedbackProductList/FeedbackProductList";
import Star from "../../../../sharedComponents/Star/Star";

function FeedbackMobileCart() {
  const [active, setActive] = useState(FeedbackProductList[1]);
  const [activeBtn, setActiveBtn] = useState(2);

  return (
    <section className={style.content}>
      <div className={style.cart}>
        <div className={style.stars}>
          {active.stars.map((el, index) => {
            return el ? (
              <Star
                key={index}
                starFill={true}
                star={{ width: "17", height: "14" }}
              />
            ) : (
              <Star
                key={index}
                starFill={false}
                star={{ width: "17", height: "14" }}
              />
            );
          })}
        </div>
        <h1>{active.name}</h1>
        <p>{active.text}</p>
      </div>
      <div className={style.buttons}>
        <button
          style={activeBtn == 1 ? { background: "rgb(175, 179, 147)" } : null}
          onClick={(e) => {
            setActive(FeedbackProductList[0]);
            setActiveBtn(1);
          }}
        ></button>
        <button
          style={activeBtn == 2 ? { background: "rgb(175, 179, 147)" } : null}
          onClick={(e) => {
            setActive(FeedbackProductList[1]);
            setActiveBtn(2);
          }}
        ></button>
        <button
          style={activeBtn == 3 ? { background: "rgb(175, 179, 147)" } : null}
          onClick={(e) => {
            setActive(FeedbackProductList[2]);
            setActiveBtn(3);
          }}
        ></button>
      </div>
    </section>
  );
}

export default FeedbackMobileCart;
