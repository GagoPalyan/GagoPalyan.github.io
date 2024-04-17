import style from "./ExpertAdviceImgSection.module.css";
import ImageAndtext from "./Image&text/Image&text";

function ExpertAdviceImgSection({ list }) {
  return (
    <section className={style.content}>
      {list.map((obj) => {
        return <ImageAndtext key={obj.id} obj={obj} />;
      })}
    </section>
  );
}

export default ExpertAdviceImgSection;
