import Media from "react-media";
import Title from "../../../sharedComponents/Title/Title";
import style from "./ImgContent.module.css";

function ImgContent({
  children,
  titlePosition = "left",
  reverse = false,
  ...props
}) {
  return (
    <Media query={"(max-width: 1860px)"}>
      {(matchers) => {
        return !matchers ? (
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
        ) : (
          <section
            style={{ backgroundImage: `url("${props.image}")` }}
            className={style.background}
          >
            <Title caption={props.caption} text={props.text} />
            {children}
          </section>
        );
      }}
    </Media>
  );
}

export default ImgContent;
