import style from "./CardMenu.module.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import {
  cardCVCValidation,
  cardExpirationValidation,
  cardNameValidation,
  cardNumberValidation,
} from "../../../utils/validation";
import { NavLink } from "react-router-dom";
import { SHOPING_PAGE } from "../../../utils/URL";
import currentData from "../../../utils/date";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../features/profile/profileSlice";
import {
  selectCart,
  cleanCart,
} from "../../../features/products/productsSlice";
import PaymentSuccssesful from "../../../sharedComponents/PaymentSuccssesful/PaymentSuccssesful";

function CardMenu() {
  const [saveData, setSaveData] = useState(false);
  const [popup, setPopup] = useState(false);

  const user = useSelector(selectUser);
  const cart = useSelector(selectCart);
  const date = currentData();

  const dispatch = useDispatch();

  const [subtotal, setSubtotal] = useState(0);
  const shipping = localStorage.getItem("PromoCode") ? 0 : 5;
  const estimatedTax = subtotal > 10 ? "1.50" : "0.00";

  const cardInfo = JSON.parse(localStorage.getItem("cardInfo"));

  useEffect(() => {
    let total = 0;
    cart.forEach((elem) => {
      total += +elem.price * elem.qnt;
    });
    setSubtotal(+total);
  }, [cart]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({
    mode: "all",
  });

  const buyNow = (data) => {
    saveData && localStorage.setItem("cardInfo", JSON.stringify(data));
    setPopup(true);
    dispatch(cleanCart([]));
  };

  return (
    <>
      {popup && <PaymentSuccssesful setPopup={setPopup} />}
      <main className={style.content}>
        <h1>Payment Information</h1>
        <section className={style.cardMenu}>
          <div className={style.options}>
            <h2>Your saved cards</h2>
            <div className={style.cardInfo}>
              <div className={style.card1}>
                <p>{getValues.cardNumberValidation}</p>
              </div>
              <div className={style.card2}></div>
            </div>
            <h2>Payment Method</h2>
            <div className={style.paymentMethod}>
              <svg
                width="35.000000"
                height="13.000000"
                viewBox="0 0 35 13"
                fill="none"
              >
                <path
                  id="Vector"
                  d="M18.1011 4.15601C18.0811 5.96692 19.5044 6.97742 20.5762 7.57825C21.6777 8.1947 22.0479 8.59009 22.0435 9.14148C22.0352 9.98511 21.1646 10.3574 20.3501 10.3719C18.9292 10.3972 18.103 9.93066 17.4463 9.57776L16.9346 12.3328C17.5938 12.682 18.814 12.9866 20.0791 13C23.0493 13 24.9927 11.3136 25.0029 8.69885C25.0146 5.38049 21.0122 5.19678 21.0396 3.71362C21.0493 3.26379 21.4224 2.78394 22.2397 2.66187C22.6445 2.60022 23.7617 2.5531 25.0283 3.22388L25.5254 0.558472C24.8442 0.273193 23.9688 0 22.8789 0C20.0835 0 18.1172 1.70935 18.1011 4.15601ZM30.3022 0.229614C29.7598 0.229614 29.3027 0.593506 29.0986 1.15186L24.856 12.8042L27.8237 12.8042L28.4146 10.9268L32.0415 10.9268L32.3838 12.8042L35 12.8042L32.7173 0.229614L30.3022 0.229614ZM30.7173 3.62646L31.5737 8.34839L29.228 8.34839L30.7173 3.62646ZM14.5024 0.229736L12.1631 12.8041L14.9912 12.8041L17.3296 0.229492L14.5024 0.229736ZM10.3184 0.229492L7.37451 8.78833L6.18408 1.51111C6.04443 0.69873 5.49219 0.229614 4.87939 0.229614L0.0673828 0.229614L0 0.594727C0.987793 0.841309 2.11035 1.23901 2.79053 1.66455C3.20654 1.92444 3.3252 2.15173 3.46191 2.76941L5.71729 12.8042L8.70605 12.8042L13.2886 0.229614L10.3184 0.229492Z"
                  fill="#434537"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </svg>
              <svg
                width="23.175293"
                height="15.769653"
                viewBox="0 0 23.1753 15.7697"
                fill="none"
              >
                <path
                  id="Vector"
                  d="M7.99219 1.74585L14.3857 1.74585L14.3857 14.0111L7.99219 14.0111L7.99219 1.74585Z"
                  fill="#434537"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M8.55469 7.88477C8.55469 5.36609 9.59277 3.13196 11.1885 1.6864C10.0161 0.635132 8.53564 0 6.9209 0C3.09521 0 0 3.52625 0 7.88477C0 12.2433 3.09521 15.7697 6.9209 15.7697C8.53564 15.7697 10.0156 15.1345 11.1885 14.0831C9.59277 12.6594 8.55469 10.4036 8.55469 7.88477Z"
                  fill="#6E724D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M23.1753 7.88477C23.1753 12.2433 19.8589 15.7697 15.7603 15.7697C14.0298 15.7697 12.4438 15.1345 11.1875 14.0831C12.9175 12.6376 14.0093 10.4036 14.0093 7.88477C14.0093 5.36609 12.897 3.13196 11.1875 1.6864C12.4438 0.635132 14.0298 0 15.7603 0C19.8589 0 23.1753 3.54822 23.1753 7.88477Z"
                  fill="#757B42"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </svg>
              <svg
                width="11.858887"
                height="14.595459"
                viewBox="0 0 11.8589 14.5955"
                fill="none"
              >
                <rect
                  id="logos:paypal"
                  width="11.858763"
                  height="14.595401"
                  fill="#FFFFFF"
                  fillOpacity="0"
                />
                <path
                  id="Vector"
                  d="M10.0581 1.13574C9.41309 0.368164 8.24609 0.0390625 6.75342 0.0390625L2.42139 0.0390625C2.27344 0.0390625 2.13086 0.0939941 2.01855 0.194092C1.90625 0.294189 1.83154 0.432739 1.80859 0.584839L0.00488281 12.5206C-0.03125 12.756 0.143555 12.9691 0.37207 12.9691L3.04688 12.9691L3.71826 8.52417L3.69775 8.66345C3.74561 8.34924 4.00293 8.11743 4.30811 8.11743L5.57861 8.11743C8.07568 8.11743 10.0308 7.05945 10.6016 3.99878C10.6187 3.90833 10.6333 3.82019 10.646 3.73413C10.8159 2.60291 10.645 1.83289 10.0581 1.13574Z"
                  fill="#5B5D4B"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M4.7417 3.32666C4.81494 3.29028 4.89502 3.27148 4.97559 3.27148L8.37207 3.27148C8.77441 3.27148 9.14941 3.29883 9.49219 3.35632C9.58838 3.37231 9.68359 3.39136 9.77832 3.41345C9.9126 3.44446 10.0454 3.4823 10.1763 3.52698C10.3447 3.58569 10.502 3.65405 10.646 3.73413C10.8159 2.60242 10.645 1.83289 10.0581 1.13574C9.4126 0.368164 8.24609 0.0390625 6.75342 0.0390625L2.4209 0.0390625C2.11572 0.0390625 1.85645 0.270752 1.80859 0.584839L0.00488281 12.5201C-0.03125 12.7559 0.143555 12.9688 0.371582 12.9688L3.04688 12.9688L4.44043 3.74902C4.4541 3.65833 4.48877 3.57263 4.54102 3.49902C4.59375 3.42542 4.6626 3.36621 4.7417 3.32666Z"
                  fill="#6E724D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M10.603 3.99902C10.0322 7.05933 8.07715 8.11768 5.58057 8.11768L4.30908 8.11768C4.00391 8.11768 3.74658 8.34949 3.69922 8.6637L2.86328 14.1903C2.83203 14.3964 2.98486 14.583 3.18457 14.583L5.43896 14.583C5.56836 14.5829 5.69336 14.5348 5.7915 14.4473C5.88965 14.3597 5.95459 14.2385 5.97461 14.1055L5.99658 13.9856L6.42188 11.1759L6.44922 11.0206C6.46924 10.8876 6.53418 10.7664 6.63232 10.6788C6.73047 10.5913 6.85547 10.5432 6.98486 10.5432L7.32227 10.5432C9.50635 10.5432 11.2163 9.61743 11.7158 6.94019C11.9243 5.82141 11.8164 4.88733 11.2646 4.2312C11.0977 4.03247 10.8896 3.86829 10.6475 3.73438C10.6343 3.82092 10.6201 3.90857 10.603 3.99902Z"
                  fill="#444537"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M10.0537 3.48755C9.96436 3.46033 9.87451 3.4364 9.78418 3.41553C9.68896 3.39368 9.59375 3.37476 9.49805 3.35876C9.15479 3.30078 8.77979 3.27344 8.37744 3.27344L4.98145 3.27344C4.90039 3.27319 4.82031 3.29224 4.74756 3.32898C4.66797 3.36853 4.59912 3.42761 4.54639 3.50122C4.49414 3.57483 4.45947 3.66064 4.4458 3.75134L3.72412 8.52625L3.70312 8.66541C3.75049 8.3512 4.0083 8.11951 4.31299 8.11951L5.58447 8.11951C8.08105 8.11951 10.0361 7.0614 10.6074 4.00073C10.624 3.91028 10.6387 3.82251 10.6519 3.73608C10.5068 3.65649 10.3506 3.58765 10.1821 3.5293C10.1392 3.51453 10.0967 3.50061 10.0537 3.48755Z"
                  fill="#656752"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </svg>
              <svg
                width="34.000000"
                height="17.000000"
                viewBox="0 0 34 17"
                fill="none"
              >
                <path
                  id="Vector"
                  d="M6.2124 2.18726C5.81396 2.76318 5.17676 3.21619 4.53906 3.15149C4.45947 2.375 4.77295 1.54663 5.13965 1.04187C5.53809 0.453003 6.23389 0.0323486 6.80225 0C6.86621 0.80249 6.60547 1.59839 6.2124 2.18726ZM6.7915 3.30029C5.86719 3.2356 5.07568 3.94104 4.64014 3.94104C4.19385 3.94104 3.5249 3.33264 2.7915 3.35217C1.84082 3.37158 0.958984 4.02515 0.475586 5.06702C-0.522949 7.15723 0.215332 10.244 1.18213 11.9459C1.65479 12.7872 2.21777 13.7126 2.96143 13.6803C3.66797 13.6479 3.94434 13.1237 4.79443 13.1237C5.64941 13.1237 5.89941 13.6803 6.64307 13.6674C7.41309 13.6478 7.89648 12.826 8.36914 11.9847C8.90576 11.027 9.12891 10.1017 9.13965 10.0499C9.12354 10.0304 7.65234 9.34448 7.63623 7.27368C7.62012 5.53943 8.7998 4.71753 8.85254 4.66577C8.18848 3.46216 7.15283 3.33264 6.7915 3.30029ZM12.125 0.957764L12.125 13.5702L13.7344 13.5702L13.7344 9.26038L15.9604 9.26038C17.9946 9.26038 19.4185 7.55847 19.4185 5.09937C19.4185 2.64026 18.0161 0.957764 16.0132 0.957764L12.125 0.957764ZM13.7344 2.60791L15.5884 2.60791C16.9854 2.60791 17.7822 3.51392 17.7822 5.10583C17.7822 6.69775 16.9854 7.6167 15.583 7.6167L13.7344 7.6167L13.7344 2.60791ZM22.3506 13.6674C23.3599 13.6674 24.2949 13.046 24.7197 12.0559L24.7515 12.0559L24.7515 13.5702L26.2393 13.5702L26.2393 7.29309C26.2393 5.47473 25.0439 4.29688 23.2061 4.29688C21.5005 4.29688 20.2363 5.48767 20.1885 7.11841L21.6387 7.11841C21.7612 6.3418 22.3506 5.83057 23.1582 5.83057C24.1406 5.83057 24.6934 6.38708 24.6934 7.41602L24.6934 8.11499L22.6855 8.26379C20.8208 8.39966 19.8115 9.33154 19.8115 10.9493C19.8169 12.5801 20.8579 13.6674 22.3506 13.6674ZM22.7861 12.1725C21.9312 12.1725 21.3838 11.6677 21.3838 10.9041C21.3838 10.1082 21.9097 9.64868 22.9136 9.57751L24.6987 9.44153L24.6987 10.1534C24.6987 11.3312 23.875 12.1725 22.7861 12.1725ZM28.231 17C29.7983 17 30.5366 16.2688 31.1792 14.062L34 4.41992L32.3638 4.41992L30.4727 11.8683L30.4409 11.8683L28.5498 4.41992L26.8711 4.41992L29.5908 13.6025L29.4424 14.1591C29.1978 15.1039 28.7993 15.4728 28.0879 15.4728C27.96 15.4728 27.7158 15.4534 27.6147 15.4404L27.6147 16.9547C27.7104 16.9806 28.1089 17 28.231 17Z"
                  fill="#434537"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </svg>
            </div>
            <form onSubmit={handleSubmit(buyNow)}>
              <div className={style.line}>
                <div className={style.input1}>
                  <h3>Card Number</h3>
                  <input
                    style={errors.cardNumber?.message && { borderColor: "red" }}
                    type="text"
                    placeholder="⁎⁎⁎⁎ ⁎⁎⁎⁎ ⁎⁎⁎⁎ ⁎⁎⁎⁎"
                    value={cardInfo ? cardInfo.cardNumber : undefined}
                    {...register("cardNumber", cardNumberValidation)}
                  />
                </div>
                <div className={style.input2}>
                  <h3>Expiration</h3>
                  <input
                    style={errors.expiration?.message && { borderColor: "red" }}
                    type="text"
                    placeholder="MM/YY"
                    value={cardInfo ? cardInfo.expiration : undefined}
                    {...register("expiration", cardExpirationValidation)}
                  />
                </div>
                <div className={style.input2}>
                  <h3>CVC</h3>
                  <input
                    style={errors.CVC?.message && { borderColor: "red" }}
                    type="text"
                    placeholder="123"
                    value={cardInfo ? cardInfo.CVC : undefined}
                    {...register("CVC", cardCVCValidation)}
                  />
                </div>
              </div>
              <div className={style.line}>
                <div className={style.input1}>
                  <h3>Name of Owner</h3>
                  <input
                    style={errors.cardName?.message && { borderColor: "red" }}
                    type="text"
                    placeholder="Name Lastname"
                    value={cardInfo ? cardInfo.cardName : undefined}
                    {...register("cardName", cardNameValidation)}
                  />
                </div>
                <div className={style.saveData}>
                  <h4>Save card data for future payments</h4>
                  <div
                    onClick={() => setSaveData(!saveData)}
                    className={style.btn}
                  >
                    <div
                      style={!saveData ? { left: "0" } : { right: "0" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className={style.buttons}>
                <NavLink to={SHOPING_PAGE} className={style.backBtn}>
                  <svg
                    width="12.000000"
                    height="12.000000"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <rect
                      id="ion:caret-back-outline"
                      width="12.000000"
                      height="12.000000"
                      fill="white"
                      fillOpacity="0"
                    />
                    <rect
                      id="ion:caret-back-outline"
                      width="12.000000"
                      height="12.000000"
                      fill="#FFFFFF"
                      fillOpacity="0"
                    />
                    <path
                      id="Vector"
                      d="M7.54297 2.29724L3.71973 5.57336C3.6582 5.6261 3.60889 5.69165 3.57471 5.76538C3.54102 5.83911 3.52344 5.91919 3.52344 6.00037C3.52344 6.08142 3.54102 6.16162 3.57471 6.23535C3.60889 6.30908 3.6582 6.37463 3.71973 6.42737L7.54297 9.70349C7.90771 10.0161 8.47168 9.75696 8.47168 9.27649L8.47168 2.72327C8.47168 2.2428 7.90771 1.98364 7.54297 2.29724Z"
                      fill="#373A1B"
                      fillOpacity="1.000000"
                      fillRule="nonzero"
                    />
                  </svg>
                  Back
                </NavLink>
                <button onClick={() => {}} className={style.buyBtn}>
                  Buy Now
                </button>
              </div>
            </form>
          </div>
          <div className={style.orderSummary}>
            <h2>Order Summary</h2>
            <section>
              <div className={style.line}>
                <p>Data</p>
                <p>{date.data}</p>
              </div>
              <div className={style.line}>
                <p>Time</p>
                <p>{date.time}</p>
              </div>
            </section>
            <section>
              <div className={style.addreas}>
                <h3>Address</h3>
                <p>{user.addreas}</p>
              </div>
              <div className={style.product}>
                <div className={style.line}>
                  <h3>Product</h3>
                  <p>Qnt.</p>
                </div>
                {cart.map((item) => {
                  return (
                    <div key={item.id} className={style.line}>
                      <p>{item.name}</p>
                      <p>{item.qnt}</p>
                    </div>
                  );
                })}
              </div>
            </section>
            <section>
              <div className={style.line}>
                <p>Subtotal</p>
                <h3>${subtotal}</h3>
              </div>
              <div className={style.line}>
                <p>Shipping</p>
                <h3>${shipping}</h3>
              </div>
              <div className={style.line}>
                <p>Estimated tax</p>
                <h3>${estimatedTax}</h3>
              </div>
            </section>
            <div className={style.line}>
              <h2>Total</h2>
              <h2>${+subtotal + +shipping + +estimatedTax}</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default CardMenu;
