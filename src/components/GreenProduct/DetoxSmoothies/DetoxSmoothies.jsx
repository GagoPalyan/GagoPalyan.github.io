import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  selectFilter,
  selectProducts,
  selectSearch,
} from "../../../features/products/productsSlice";

import style from "./DetoxSmoothies.module.css";
import Title from "../../../sharedComponents/Title/Title";
import Cart from "../../../sharedComponents/Cart/Cart";
import DetoxSmoothiesFilter from "./DetoxSmoothiesFilter/DetoxSmoothiesFilter";
import { searchFunc } from "../../../utils/search";
import Media from "react-media";
import matchers from "@testing-library/jest-dom/matchers";

function DetoxSmoothies() {
  const products = useSelector(selectProducts);
  const filter = useSelector(selectFilter);
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();

  const [list, setList] = useState(products);

  useEffect(() => {
    dispatch(changeFilter(""));
  }, []);

  useEffect(() => {
    filter != ""
      ? setList(
          products.filter(
            (obj) => obj.category.toUpperCase() == filter.toUpperCase()
          )
        )
      : setList(products);
  }, [filter]);

  useEffect(() => {
    setList(searchFunc(search, filter, products));
  }, [search]);

  return (
    <Media query={"(max-width: 992px)"}>
      {(matchers) => {
        return !matchers ? (
          <section className={style.content}>
            <Title
              caption="Detox Smoothies"
              text="Cold Infusion And Pressed Detox Juice"
            />
            <DetoxSmoothiesFilter />
            <div className={style.list}>
              {list.length > 0 ? (
                list.map((item) => <Cart key={item.id} item={item} />)
              ) : (
                <h1>There are currently no products available</h1>
              )}
            </div>
          </section>
        ) : (
          <section className={style.content}>
            <DetoxSmoothiesFilter />
            <div className={style.list}>
              {list.length > 0 ? (
                list.map((item) => <Cart key={item.id} item={item} />)
              ) : (
                <h1>There are currently no products available</h1>
              )}
            </div>
          </section>
        );
      }}
    </Media>
  );
}

export default DetoxSmoothies;
