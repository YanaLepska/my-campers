import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <>
      <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? css.active : css.navLinkItem
            }
          >
            Номе
          </NavLink>
         <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? css.active : css.navLinkItem
            }
          >
            Catalog
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? css.active : css.navLinkItem
            }
          >
            Favorites
          </NavLink>
      
    </>
  );
};

export default AuthNav;
