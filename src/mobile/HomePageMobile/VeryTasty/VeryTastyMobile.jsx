import Title from "../../../sharedComponents/Title/Title";
import style from "./VeryTastyMobile.module.css";
import { motion } from "framer-motion";
import VeryTastyList from "../../../components/HomePage/VeryTasty/VeryTastyList/VeryTastyList";
import Carousel from "./Carousel/Carousel";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { BLOG_PAGE, FAQ_PAGE } from "../../../utils/URL";

function VeryTastyMobile() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className={style.content}>
      <Title caption="You Don’t Believe" text="Healthy Eating Is Very Tasty" />
      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className={style.carousel}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={style.innerCarousel}
        >
          {VeryTastyList.map((item) => {
            return <Carousel key={item.id} item={item} />;
          })}
        </motion.div>
      </motion.div>
      <NavLink to={FAQ_PAGE}>Read More</NavLink>
    </section>
  );
}

export default VeryTastyMobile;
