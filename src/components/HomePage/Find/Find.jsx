import Title from "../../../sharedComponents/Title/Title";
import style from "./Find.module.css";

function Find() {
  return (
    <section className={style.content}>
      <Title caption={"hi dear"} text={"You Deserve This"} color={"white"} />
      <div className={style.search}>
        <input id="search" type="text" placeholder="find your weekly plan" />
        <label htmlFor="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className={style.searchSvg}
          >
            <path
              d="M13 13L9.53548 9.53548M9.53548 9.53548C10.4732 8.59781 10.9999 7.32604 10.9999 5.99997C10.9999 4.6739 10.4732 3.40213 9.53548 2.46446C8.59781 1.52678 7.32604 1 5.99997 1C4.6739 1 3.40213 1.52678 2.46446 2.46446C1.52678 3.40213 1 4.6739 1 5.99997C1 7.32604 1.52678 8.59781 2.46446 9.53548C3.40213 10.4732 4.6739 10.9999 5.99997 10.9999C7.32604 10.9999 8.59781 10.4732 9.53548 9.53548Z"
              stroke="white"
              strokeOpacity="0.82"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label>
      </div>
    </section>
  );
}

export default Find;
