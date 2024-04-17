import { Route, Routes } from "react-router-dom";
import { routes } from "../../utils/routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProfile } from "../../features/profile/profileSlice";

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    user && dispatch(setProfile(user));
  }, []);

  return (
    <Routes>
      {routes.map(({ id, path, element }) => {
        return <Route key={id} path={path} element={element} />;
      })}
    </Routes>
  );
}

export default Main;
