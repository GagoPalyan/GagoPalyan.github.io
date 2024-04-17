import { NavLink } from "react-router-dom";
import style from "./PaymentSuccssesful.module.css";
import { GREEN_PRODUCT_PAGE } from "../../utils/URL";

function PaymentSuccssesful({ setPopup }) {
  return (
    <main onMouseDown={() => setPopup(false)} className={style.content}>
      <div onMouseDown={(e) => e.stopPropagation()} className={style.menu}>
        <div className={style.info}>
          <svg width="136" height="135" viewBox="0 0 136 135" fill="none">
            <path
              d="M131.88 47.2188C136.609 62.2281 135.944 78.4178 130.002 92.9891C124.059 107.56 113.212 119.598 99.3363 127.02C85.4602 134.442 69.4269 136.783 54.0079 133.638C38.589 130.492 24.7535 122.059 14.8932 109.795C5.0329 97.5304 -0.232545 82.2065 0.0070947 66.4718C0.246734 50.7372 5.9764 35.5808 16.2056 23.6225C26.4348 11.6643 40.5207 3.65585 56.0283 0.981587C71.5359 -1.69267 87.4905 1.13532 101.134 8.97671L99.2742 12.2128C86.385 4.80503 71.3127 2.13341 56.6626 4.65979C42.0125 7.18618 28.7056 14.7518 19.042 26.0488C9.37838 37.3458 3.96555 51.6641 3.73916 66.5287C3.51277 81.3933 8.48705 95.8698 17.8021 107.456C27.1172 119.042 40.1876 127.009 54.754 129.981C69.3203 132.952 84.467 130.741 97.5758 123.729C110.685 116.717 120.932 105.345 126.545 91.5797C132.159 77.814 132.787 62.5196 128.32 48.3402L131.88 47.2188Z"
              fill="#F49710"
            />
            <path
              d="M35 65L67 97"
              stroke="#5E5C1E"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M132 7L68 97"
              stroke="#5E5C1E"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
          <h1>Payment Succssesful</h1>
          <h2>we are happy that you live healthy</h2>
        </div>
        <NavLink to={GREEN_PRODUCT_PAGE} className={style.goBack}>
          <svg
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.47316 1.00162L1.29472 5.91975"
              stroke="#2E2A2A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M8.52442 10.9061L1.24387 5.91805"
              stroke="#2E2A2A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          Shop More
        </NavLink>
      </div>
    </main>
  );
}

export default PaymentSuccssesful;
