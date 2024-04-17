import { useState } from "react";
import Star from "../../../sharedComponents/Star/Star";
import Title from "../../../sharedComponents/Title/Title";
import style from "./FeedbackProduct.module.css";
import FeedbackProductList from "./FeedbackProductList/FeedbackProductList";

function FeedbackProduct() {
  const [active, setActive] = useState(2);
  const [data, setData] = useState(FeedbackProductList);

  const change = (item) => {
    setActive(item.id);
    let dataLocal = [data.find((el) => el.id == item.id)];
    let itemindex = data.findIndex((el) => el.id == item.id);
    dataLocal.push(data[itemindex + 1 > data.length - 1 ? 0 : itemindex + 1]);
    dataLocal.unshift(
      data[itemindex - 1 < 0 ? data.length - 1 : itemindex - 1]
    );
    setData(dataLocal);
  };
  return (
    <section className={style.content}>
      <Title caption="reviwe" text="Customer feedback on the product" />
      <div className={style.carusel}>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={active == item.id ? style.active : style.cart}
            >
              <div className={style.stars}>
                {item.stars.map((el, index) => {
                  return el ? (
                    <Star
                      key={index}
                      starFill={true}
                      star={
                        active == item.id
                          ? { width: "17", height: "14" }
                          : { width: "11", height: "10" }
                      }
                    />
                  ) : (
                    <Star
                      key={index}
                      starFill={false}
                      star={
                        item.active
                          ? { width: "17", height: "14" }
                          : { width: "11", height: "10" }
                      }
                    />
                  );
                })}
              </div>
              <h1>{item.name}</h1>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
      <div className={style.buttons}>
        {data.map((item, index) => {
          return (
            <button
              key={index}
              style={active == item.id ? { backgroundColor: "#afb293" } : null}
              className={style.Btn}
              onClick={() => change(item)}
            ></button>
          );
        })}
      </div>
    </section>
  );
}

export default FeedbackProduct;
