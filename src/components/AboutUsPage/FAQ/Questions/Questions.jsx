import { useState } from "react";
import style from "./Questions.module.css";

function Questions({ question, text }) {
  const [show, setShow] = useState(false);

  return (
    <div onClick={() => setShow(!show)} className={style.questions}>
      <h2>{question}</h2>
      {show ? <p>{text}</p> : null}
    </div>
  );
}

export default Questions;
