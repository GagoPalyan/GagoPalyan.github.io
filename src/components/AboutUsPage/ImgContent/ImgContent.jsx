import Title from "../../../sharedComponents/Title/Title";
import style from "./ImgContent.module.css";

function ImgContent({
  children,
  titlePosition = "left",
  reverse = false,
  ...props
}) {
  return (
    <section
      style={reverse ? { flexDirection: "row-reverse" } : null}
      className={style.content}
    >
      <img src={props.image} />
      <div className={style.textContent}>
        <div
          className={
            titlePosition == "left" ? style.titleLeft : style.titleCenter
          }
        >
          <Title caption={props.caption} text={props.text} />
        </div>
        {children}
      </div>
    </section>
  );
}

export default ImgContent;
