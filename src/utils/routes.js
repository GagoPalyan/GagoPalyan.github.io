import AboutUs from "../components/AboutUsPage/AboutUs";
import ContactUs from "../components/AboutUsPage/ContactUs/ContactUs";
import FAQ from "../components/AboutUsPage/FAQ/FAQ";
import BlogArticle from "../components/BlogArticle/BlogArticle";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ExpertAdvicea from "../components/ExpertAdvice/ExpertAdvicea";
import FavoritePage from "../components/FavoritePage/FavoritePage";
import GreenProduct from "../components/GreenProduct/GreenProduct";
import Home from "../components/HomePage/Home";
import ProductPage from "../components/ProductPage/ProductPage";
import CardMenu from "../components/ShopingPage/CardMenu/CardMenu";
import Shoping from "../components/ShopingPage/Shoping";

import {
  ABOUT_US_PAGE,
  BLOG_PAGE,
  CONTACT_US_PAGE,
  ERROR404_PAGE,
  EXPERT_ADVICE_PAGE,
  FAQ_PAGE,
  FAVORITE_PAGE,
  GREEN_PRODUCT_PAGE,
  HOME_PAGE,
  PAYMENT_INFO,
  PRODUCT_PAGE,
  SHOPING_PAGE,
} from "./URL";

export const routes = [
  { id: 1, path: HOME_PAGE, element: <Home />, name: "HOME" },
  { id: 2, path: ABOUT_US_PAGE, element: <AboutUs />, name: "ABOUT" },
  {
    id: 3,
    path: EXPERT_ADVICE_PAGE,
    element: <ExpertAdvicea />,
    name: "EXPERT ADVICE",
  },
  {
    id: 4,
    path: GREEN_PRODUCT_PAGE,
    element: <GreenProduct />,
    name: "GREEN PRODUCT",
  },
  { id: 5, path: PRODUCT_PAGE, element: <ProductPage />, name: "PRODUCT PAGE" },
  // { id: 6, path: HELTHY_DIET_PAGE, element: null, name: "HELTHY DIET" },
  { id: 6, path: CONTACT_US_PAGE, element: <ContactUs />, name: "CONTACT US" },
  // { id: 8, path: DIABETS_PAGE, element: null, name: "DIABETS" },
  { id: 7, path: FAQ_PAGE, element: <FAQ />, name: "FAQ" },
  // { id: 10, path: SING_IN_PAGE, element: null, name: "SIGN IN" },
  { id: 8, path: SHOPING_PAGE, element: <Shoping />, name: "SHOPING PAGE" },
  // { id: 12, path: DASHBOARD_PAGE, element: null, name: "DASHBOARD" },
  // { id: 13, path: GREEN_SHOP_PAGE, element: null, name: "GREEN SHOP" },
  { id: 9, path: BLOG_PAGE, element: <BlogArticle />, name: "BLOG" },
  {
    id: 10,
    path: PAYMENT_INFO,
    element: <CardMenu />,
    name: "PAYMENT INFORMATION",
  },
  { id: 11, path: ERROR404_PAGE, element: <ErrorPage />, name: "404 ERROR" },
  {
    id: 12,
    path: FAVORITE_PAGE,
    element: <FavoritePage />,
    name: "FAVORITE PAGE",
  },
];
