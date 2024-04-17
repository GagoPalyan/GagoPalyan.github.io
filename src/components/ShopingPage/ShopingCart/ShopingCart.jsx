import { useSelector } from "react-redux";
import style from "./ShopingCart.module.css";
import { selectCart } from "../../../features/products/productsSlice";
import YourCart from "../../../sharedComponents/YourCart/YourCart";
import { useEffect, useState } from "react";
import { promoCode } from "../../../utils/promoCode";
import { NavLink } from "react-router-dom";
import { PAYMENT_INFO } from "../../../utils/URL";
import { selectUser } from "../../../features/profile/profileSlice";
import MyUser from "../../../sharedComponents/MyUser/MyUser";

function ShopingCart() {
  const cartList = useSelector(selectCart);
  const promoStory = localStorage.getItem("PromoCode") ? true : false;
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(promoStory ? "0.00" : "5.00");
  const estimatedTax = subtotal > 10 ? "1.50" : "0.00";

  const user = useSelector(selectUser);
  const [popup, setPopup] = useState(false);

  const [promo, setPromo] = useState("");

  useEffect(() => {
    let total = 0;
    cartList.forEach((elem) => {
      total += +elem.price * elem.qnt;
    });
    setSubtotal(+total);
  }, [cartList]);

  return (
    <>
      {popup && <MyUser setPopup={setPopup} />}
      <section className={style.content}>
        <div className={style.cartList}>
          <div className={style.category}>
            <h4>Items</h4>
            <h4>Quantity</h4>
            <h4>Address</h4>
            <h4>Order Value</h4>
          </div>
          <div className={style.products}>
            {cartList.map((obj) => {
              return <YourCart key={obj.id} product={obj} />;
            })}
          </div>
        </div>
        <div className={style.orderSummary}>
          <h4>Order Summary</h4>
          <div className={style.orderSummaryDiv}>
            <h3>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 1.0625C7.029 1.0625 5.59104 1.4987 4.36795 2.31594C3.14486 3.13319 2.19158 4.29477 1.62865 5.65379C1.06572 7.01282 0.918435 8.50825 1.20541 9.95098C1.49239 11.3937 2.20074 12.719 3.2409 13.7591C4.28105 14.7993 5.60629 15.5076 7.04902 15.7946C8.49175 16.0816 9.98718 15.9343 11.3462 15.3714C12.7052 14.8084 13.8668 13.8551 14.6841 12.6321C15.5013 11.409 15.9375 9.971 15.9375 8.5C15.9375 6.52745 15.1539 4.63569 13.7591 3.24089C12.3643 1.84609 10.4726 1.0625 8.5 1.0625ZM8.5 14.875C7.23915 14.875 6.00661 14.5011 4.95824 13.8006C3.90988 13.1001 3.09278 12.1045 2.61027 10.9396C2.12776 9.77473 2.00152 8.49293 2.2475 7.2563C2.49348 6.01967 3.10064 4.88375 3.9922 3.99219C4.88376 3.10063 6.01967 2.49347 7.2563 2.24749C8.49293 2.00151 9.77473 2.12776 10.9396 2.61027C12.1045 3.09278 13.1001 3.90988 13.8006 4.95824C14.5011 6.0066 14.875 7.23914 14.875 8.5C14.875 10.1908 14.2034 11.8123 13.0078 13.0078C11.8123 14.2033 10.1908 14.875 8.5 14.875Z"
                  fill="#5B590D"
                />
                <path
                  d="M7.96875 4.25H9.03125V10.0938H7.96875V4.25ZM8.5 11.6875C8.34239 11.6875 8.18833 11.7342 8.05728 11.8218C7.92624 11.9094 7.8241 12.0338 7.76378 12.1794C7.70347 12.325 7.68769 12.4853 7.71844 12.6398C7.74918 12.7944 7.82508 12.9364 7.93652 13.0479C8.04797 13.1593 8.18996 13.2352 8.34454 13.2659C8.49912 13.2967 8.65934 13.2809 8.80495 13.2206C8.95056 13.1603 9.07502 13.0581 9.16258 12.9271C9.25014 12.796 9.29688 12.642 9.29688 12.4844C9.29688 12.273 9.21292 12.0703 9.06348 11.9209C8.91403 11.7715 8.71134 11.6875 8.5 11.6875Z"
                  fill="#5B590D"
                />
              </svg>
              Don't miss it. Sign in to earn rewards and discounts
            </h3>
            <div className={style.price}>
              <div className={style.totalLine}>
                <h2>Subtotal</h2>
                <h2>${subtotal}</h2>
              </div>
              <div className={style.totalLine}>
                <h2>Shipping</h2>
                <h2>${shipping}</h2>
              </div>
              <div className={style.totalLine}>
                <h2>Estimated tax</h2>
                <h2>${estimatedTax}</h2>
              </div>
            </div>
            <div className={style.total}>
              <h1>Total</h1>
              <h1>${+subtotal + +shipping + +estimatedTax}</h1>
            </div>
            <div className={style.promo}>
              <input
                type="text"
                value={promo}
                onChange={(e) => {
                  setPromo(e.target.value);
                }}
                placeholder="Promo Code"
              />
              {!promoStory ? (
                <button
                  onClick={(e) => {
                    let code = promoCode.find((code) => code == promo);
                    code && setShipping("0.00");
                    code && (e.target.disabled = true);
                    localStorage.setItem("PromoCode", true);
                  }}
                >
                  Apply
                </button>
              ) : (
                <button disabled={true}>Apply</button>
              )}
            </div>
            {user ? (
              <NavLink to={PAYMENT_INFO} className={style.buyNow}>
                Buy Now
              </NavLink>
            ) : (
              <button onClick={() => setPopup(true)} className={style.buyNow}>
                Buy Now
              </button>
            )}
            <a
              target="_blank"
              href="https://www.apple.com/apple-pay/"
              className={style.ApplePay}
            >
              <svg
                width="63"
                height="30"
                viewBox="0 0 63 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6107 4.22852C10.8762 5.19939 9.70088 5.963 8.52558 5.85392C8.37867 4.54487 8.95652 3.14856 9.63232 2.29768C10.3669 1.30499 11.6499 0.595925 12.6979 0.541382C12.8154 1.89406 12.3355 3.23583 11.6107 4.22852ZM12.6783 6.10482C10.9741 5.99573 9.51479 7.18478 8.71167 7.18478C7.88896 7.18478 6.6549 6.15936 5.30332 6.19209C3.55017 6.22481 1.92435 7.32659 1.03308 9.08289C-0.808212 12.6064 0.55317 17.8098 2.3357 20.6788C3.20738 22.097 4.24555 23.6569 5.61673 23.6024C6.91935 23.5478 7.42864 22.6642 8.9957 22.6642C10.5726 22.6642 11.0329 23.6024 12.4041 23.5805C13.8242 23.5478 14.7155 22.1624 15.5871 20.7443C16.5763 19.1298 16.9877 17.5699 17.0073 17.4826C16.9779 17.4499 14.2649 16.2935 14.2355 12.8028C14.2062 9.87923 16.3805 8.49382 16.4784 8.40655C15.2541 6.37753 13.3443 6.15936 12.6783 6.10482ZM22.5116 2.15587V23.4169H25.4792V16.1517H29.5829C33.3341 16.1517 35.9589 13.2827 35.9589 9.13743C35.9589 4.99213 33.3733 2.15587 29.6809 2.15587H22.5116ZM25.4792 4.93759H28.8973C31.4732 4.93759 32.9423 6.4648 32.9423 9.14834C32.9423 11.8319 31.4732 13.3809 28.8875 13.3809H25.4792V4.93759ZM41.3653 23.5805C43.2261 23.5805 44.9499 22.5333 45.7334 20.8643H45.7922V23.4169H48.5345V12.8355C48.5345 9.77014 46.3309 7.78476 42.9421 7.78476C39.7982 7.78476 37.4672 9.79195 37.3791 12.5409H40.0528C40.2781 11.2319 41.3653 10.3701 42.854 10.3701C44.6659 10.3701 45.6845 11.3083 45.6845 13.0427V14.2209L41.9823 14.4718C38.5445 14.7009 36.6837 16.2717 36.6837 18.9989C36.6935 21.7479 38.6131 23.5805 41.3653 23.5805ZM42.1684 21.0606C40.5915 21.0606 39.5827 20.2098 39.5827 18.9225C39.5827 17.5808 40.5523 16.8062 42.4034 16.6863L45.6943 16.4572V17.6571C45.6943 19.6425 44.1762 21.0606 42.1684 21.0606ZM52.2073 29.1985C55.0966 29.1985 56.458 27.9658 57.6431 24.246L62.8438 7.99202H59.8272L56.3405 20.5479H56.2817L52.795 7.99202H49.7L54.7146 23.4715L54.4404 24.4096C53.9899 26.0023 53.2553 26.6241 51.9429 26.6241C51.7078 26.6241 51.2573 26.5913 51.0712 26.5695V29.1222C51.2475 29.1658 51.9821 29.1985 52.2073 29.1985Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopingCart;
