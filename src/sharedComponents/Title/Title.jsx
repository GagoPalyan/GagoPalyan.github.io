import style from "./Title.module.css";

function Title({ caption, text, color = false }) {
  const txtColor = color ? color : null;
  return (
    <section className={style.title}>
      <h1 style={{ color: txtColor }} className={style.caption}>
        {caption}
      </h1>
      <h2 style={{ color: txtColor }} className={style.text}>
        {text}
      </h2>
    </section>
  );
}

export default Title;
