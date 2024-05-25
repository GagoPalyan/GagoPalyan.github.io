import style from "./Header.module.css";
import Logo from "../../sharedComponents/Logo/Logo";
import Navigation from "../Navigation/Navigation";
import IconPages from "./IconPages/IconPages";
import Media from "react-media";
import NavBar from "../../mobile/navBar/NavBar";

function Header() {
  return (
    <Media query={"(max-width: 992px)"}>
      {(matchers) => {
        return !matchers ? (
          <header className={style.header}>
            <div className={style.headerContent}>
              <div className={style.leftNav}>
                <Navigation menuList={[2, 3, 4]} />
              </div>
              <Logo color="#D6822A" />
              <div className={style.rightNav}>
                <Navigation menuList={[6, 9, 7]} />
              </div>
              <IconPages />
            </div>
          </header>
        ) : (
          <NavBar />
        );
      }}
    </Media>
  );
}

export default Header;
