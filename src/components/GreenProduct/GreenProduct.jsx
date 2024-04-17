import DetoxSmoothiesImg from "./DetoxSmoothiesImg/DetoxSmoothiesImg";
import DetoxSmoothies from "./DetoxSmoothies/DetoxSmoothies";
import style from "./GreenProduct.module.css";
import Media from "react-media";
import { queries } from "@testing-library/react";
import GreenProductMobile from "../../mobile/GreenProductMobile/GreenProductMobile";

function GreenProduct() {
  return (
    <Media query={"(max-width: 992px)"}>
      {(matchers) => {
        return !matchers ? (
          <main className={style.content}>
            <DetoxSmoothiesImg />
            <DetoxSmoothies />
          </main>
        ) : (
          <GreenProductMobile />
        );
      }}
    </Media>
  );
}

export default GreenProduct;
