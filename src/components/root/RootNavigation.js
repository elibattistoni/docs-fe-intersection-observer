import { NavLink } from "react-router-dom";
import classes from "./RootNavigation.module.css";

function RootNavigation() {
  return (
    <aside className={classes["homepage__button"]}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes["active"] : undefined)}
        end
      >
        🏠 Home
      </NavLink>
    </aside>
  );
}

export default RootNavigation;
