import style from "./ProductPage.module.css";
import PageLocation from "../../sharedComponents/PageLocation/PageLocation";
import { GREEN_PRODUCT_PAGE, HOME_PAGE } from "../../utils/URL";
import { useParams } from "react-router-dom";
import ProductList from "../../utils/ProductList";
import TheProduct from "./TheProduct/TheProduct";
import YouMightLike from "./YouMightLike/YouMightLike";

function ProductPage() {
  const { id } = useParams();
  const product = ProductList.find((obj) => {
    return obj.id == id;
  });

  return (
    <main className={style.content}>
      <PageLocation
        prevPages={[
          { name: "HOME", path: HOME_PAGE },
          { name: "GREEN PRODUCT", path: GREEN_PRODUCT_PAGE },
        ]}
        thisPage={product.name.toUpperCase()}
      />
      <TheProduct product={product} />
      <YouMightLike caption="For Healthy Life" text="You Might Like" id={+id} />
    </main>
  );
}

export default ProductPage;
