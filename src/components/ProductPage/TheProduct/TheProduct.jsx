import Star from "../../../sharedComponents/Star/Star";
import style from "./TheProduct.module.css";
import Quantity from "../../../sharedComponents/Quantity/Quantity";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  addFavorite,
  removeCart,
  removeFavorite,
  selectCart,
  selectFavorite,
  updateCart,
} from "../../../features/products/productsSlice";
import { useEffect, useState } from "react";

function TheProduct({ product }) {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCart);
  const favoriteList = useSelector(selectFavorite);

  const [qnt, setQnt] = useState(1);
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    let currentPrd = cartList.find((obj) => obj.id == product.id);
    if (currentPrd) {
      setCurrentProduct(currentPrd);
      setQnt(currentPrd.qnt);
    } else {
      setCurrentProduct({});
      setQnt(1);
    }
  }, [product, cartList]);

  useEffect(() => {
    if (Object.keys(currentProduct).length > 0) {
      dispatch(updateCart([currentProduct.id, qnt]));
    }
  }, [qnt]);

  return (
    <section className={style.content}>
      <img src={product.image} />
      <div className={style.all}>
        <h5>{product.category}</h5>
        <h3>{product.name}</h3>
        <div className={style.stars}>
          {product.stars.map((el, index) => {
            return el ? (
              <Star
                key={index}
                starFill={true}
                star={{ width: "17", height: "14" }}
              />
            ) : (
              <Star
                key={index}
                starFill={false}
                star={{ width: "17", height: "14" }}
              />
            );
          })}
          <p>10 Review</p>
        </div>
        <h2>${product.price}</h2>
        <p>Perfect for novice and veteran cleansers.</p>
        <ul>
          <li>
            <svg
              width="23"
              height="21"
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8241 0C14.5411 0 12.5733 1.16299 11.5 3.08951C10.4267 1.16299 8.45889 0 6.17593 0C4.53857 0.00211424 2.96885 0.700209 1.81107 1.94116C0.653282 3.18211 0.00197255 4.86459 0 6.61956C0 9.88255 1.91667 13.2928 5.68611 16.7532C7.42656 18.3406 9.30578 19.7445 11.2977 20.9452C11.3598 20.9812 11.4294 21 11.5 21C11.5706 21 11.6402 20.9812 11.7023 20.9452C13.6942 19.7445 15.5734 18.3406 17.3139 16.7532C21.0833 13.2928 23 9.88255 23 6.61956C22.998 4.86459 22.3467 3.18211 21.1889 1.94116C20.0312 0.700209 18.4614 0.00211424 16.8241 0ZM11.5 20.0208C10.0093 19.1123 0.851852 13.2471 0.851852 6.61956C0.853543 5.10666 1.41501 3.65623 2.4131 2.58645C3.4112 1.51666 4.76441 0.914855 6.17593 0.913043C8.42375 0.913043 10.3127 2.20386 11.106 4.28103C11.1381 4.36476 11.1927 4.43638 11.2628 4.48678C11.333 4.53718 11.4155 4.56409 11.5 4.56409C11.5845 4.56409 11.667 4.53718 11.7372 4.48678C11.8073 4.43638 11.8619 4.36476 11.894 4.28103C12.6873 2.20386 14.5763 0.913043 16.8241 0.913043C18.2356 0.914855 19.5888 1.51666 20.5869 2.58645C21.585 3.65623 22.1465 5.10666 22.1481 6.61956C22.1481 13.2391 12.9907 19.1123 11.5 20.0208Z"
                fill="#4E4C1E"
              />
            </svg>
            Reset your health
          </li>
          <li>
            <svg
              width="19"
              height="24"
              viewBox="0 0 19 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.95609 23L18 9.00913H10.6385L17.8467 1H9.71347C8.90487 1 8.15772 1.37626 7.75342 1.98718L1 12.1878H6.78311L1.95544 23H1.95609Z"
                stroke="#4E4C1E"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
            Increase energy
          </li>
          <li>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.6695 5.74825C17.087 6.20161 16.9593 6.89743 16.45 7.24838L13.7086 9.14044C13.1999 9.49139 12.5044 9.34968 12.0019 8.99097C11.4364 8.58581 10.7574 8.36232 10.0578 8.35107C9.35828 8.33973 8.67217 8.54076 8.09291 8.92676C7.57804 9.26941 6.87861 9.38843 6.38232 9.02087L3.70558 7.04025C3.20929 6.67269 3.10463 5.97244 3.53734 5.53347C4.39421 4.66414 5.42319 3.9769 6.5607 3.51421C7.69821 3.05152 8.92008 2.82321 10.1508 2.84339C11.3815 2.86357 12.595 3.13181 13.7162 3.63154C14.8374 4.13127 15.8425 4.85131 16.6695 5.74825ZM15.7382 6.38816C15.0168 5.63389 14.149 5.02953 13.1861 4.61079C12.2232 4.19205 11.1848 3.96743 10.1321 3.9502C9.07949 3.93296 8.03403 4.12346 7.0575 4.51044C6.08098 4.89743 5.19321 5.47304 4.44665 6.20327L7.05642 8.13407C7.08038 8.13967 7.10519 8.14079 7.12957 8.13739C7.21792 8.12964 7.34171 8.08979 7.46156 8.01008C8.25674 7.48011 9.20262 7.21259 10.1625 7.24617C10.1845 7.2009 10.2127 7.15881 10.2463 7.12107L11.7915 5.37294C11.8894 5.26209 12.028 5.19405 12.1769 5.18377C12.3258 5.1735 12.4728 5.22183 12.5855 5.31814C12.6981 5.41444 12.7673 5.55084 12.7777 5.69732C12.7882 5.8438 12.7391 5.98836 12.6412 6.0992L11.4286 7.47091C11.8704 7.61513 12.287 7.82556 12.6637 8.09477C12.7807 8.17836 12.9028 8.22209 12.9912 8.23316C13.0339 8.23869 13.0564 8.23482 13.0643 8.2326L15.7382 6.38816ZM13.0694 8.23094L13.0643 8.2326C13.0666 8.23094 13.0688 8.23039 13.0694 8.23094ZM7.05192 8.13241C7.05192 8.13241 7.05361 8.13241 7.05642 8.13407L7.05192 8.13241Z"
                fill="#4E4C1E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.8736 19.9983C17.4489 19.9983 18.0024 19.7816 18.4204 19.3927C18.8384 19.0037 19.089 18.4721 19.121 17.907L19.9965 2.40742C20.0135 2.10675 19.968 1.80584 19.8627 1.52307C19.7575 1.24031 19.5947 0.981635 19.3843 0.762878C19.1739 0.54412 18.9204 0.369873 18.6393 0.250792C18.3581 0.131712 18.0552 0.0703001 17.7491 0.0703125H2.2503C1.94425 0.0703753 1.64142 0.131843 1.36033 0.250957C1.07925 0.370071 0.825806 0.544329 0.615506 0.763079C0.405206 0.981828 0.242465 1.24047 0.137232 1.5232C0.0319981 1.80593 -0.0135168 2.1068 0.00346929 2.40742L0.878458 17.907C0.910389 18.4721 1.16109 19.0037 1.57905 19.3927C1.99702 19.7816 2.55052 19.9983 3.12586 19.9983H16.8736ZM3.12586 18.8912H16.8736C17.1613 18.8912 17.4382 18.7828 17.6472 18.5882C17.8562 18.3936 17.9815 18.1276 17.9973 17.845L18.8728 2.34542C18.8812 2.19514 18.8584 2.04474 18.8058 1.90342C18.7531 1.7621 18.6717 1.63283 18.5665 1.52352C18.4613 1.4142 18.3346 1.32712 18.1941 1.26762C18.0535 1.20811 17.9021 1.17742 17.7491 1.17742H2.2503C2.0973 1.17742 1.94591 1.20811 1.80537 1.26762C1.66483 1.32712 1.53811 1.4142 1.43293 1.52352C1.32776 1.63283 1.24635 1.7621 1.19368 1.90342C1.14102 2.04474 1.11819 2.19514 1.12661 2.34542L2.00216 17.845C2.01798 18.1276 2.14327 18.3936 2.35227 18.5882C2.56127 18.7828 2.8381 18.8912 3.12586 18.8912Z"
                fill="#4E4C1E"
              />
            </svg>
            Promotes weight loss, detox, inflammation support
          </li>
        </ul>
        <div className={style.productInfo}>
          <h4>Size:</h4>
          <p>{product.size}</p>
        </div>
        <div className={style.productInfo}>
          <h4>Qnt:</h4>
          <Quantity qnt={qnt} setQnt={setQnt} />
        </div>
        <div className={style.Add}>
          {favoriteList.find((obj) => obj.id == product.id) ? (
            <button
              className={style.addFav}
              onClick={() => {
                dispatch(removeFavorite(product.id));
              }}
            >
              Remove From Favorite
            </button>
          ) : (
            <button
              className={style.addFav}
              onClick={() => {
                dispatch(addFavorite({ ...product, qnt }));
              }}
            >
              Add To Favorite
            </button>
          )}

          {cartList.find((obj) => obj.id == product.id) ? (
            <button
              className={style.addCart}
              onClick={() => {
                dispatch(removeCart(product.id));
              }}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className={style.addCart}
              onClick={() => {
                dispatch(addCart({ ...product, qnt }));
              }}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default TheProduct;
