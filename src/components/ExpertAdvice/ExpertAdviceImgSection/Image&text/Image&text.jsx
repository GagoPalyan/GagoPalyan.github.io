import style from "./Image&text.module.css";

function ImageAndtext({ obj }) {
  return (
    <div className={style.content}>
      <img src={obj.image} alt={obj.title} />
      <h1>{obj.title}</h1>
      <p>{obj.text}</p>
    </div>
  );
}

export default ImageAndtext;
