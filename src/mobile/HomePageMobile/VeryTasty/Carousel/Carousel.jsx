import style from "./Carousel.module.css";
import { motion } from "framer-motion";

function Carousel({ item }) {
  return (
    <motion.div
      className={style.cart}
      style={{ background: `url(${item.image}) center/cover no-repeat` }}
    >
      <p>{item.text}</p>
    </motion.div>
  );
}

export default Carousel;
