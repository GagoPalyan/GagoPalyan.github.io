import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import { routes } from "../../utils/routes";

function Navigation({ menuList, txtColor = "#5e5c1e" }) {
  const List = menuList.map((id) => {
    return routes.find((obj) => obj.id == id);
  });
  return (
    <nav className={style.nav}>
      {List.map((item) => {
        return (
          <NavLink
            to={item.path}
            className={style.pages}
            style={{ color: txtColor }}
            key={item.id}
          >
            {item.name}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Navigation;
