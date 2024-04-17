import DetoxSmoothies from "../../components/GreenProduct/DetoxSmoothies/DetoxSmoothies";
import DetoxSmoothiesFilter from "../../components/GreenProduct/DetoxSmoothies/DetoxSmoothiesFilter/DetoxSmoothiesFilter";
import DetoxJuiceMobile from "./DetoxJuiceMobile/DetoxJuiceMobile";
import style from "./GreenProductMobile.module.css";

function GreenProductMobile() {
  return (
    <main className={style.content}>
      <DetoxJuiceMobile />
      <DetoxSmoothies />
    </main>
  );
}

export default GreenProductMobile;
