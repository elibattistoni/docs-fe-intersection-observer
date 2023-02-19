import { NavLink } from "react-router-dom";
import classes from "./RootNavigation.module.css";

function RootNavigation() {
  return (
    <aside className={classes["home__btn"]}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? classes["home__btn--active"] : undefined
        }
        end
      >
        Home
      </NavLink>
    </aside>
  );
}

export default RootNavigation;
