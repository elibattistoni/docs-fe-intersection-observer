import { NavLink } from "react-router-dom";
import useIntersection from "../hooks/useIntersection";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  // const [targetRef, isTargetVisible] = useIntersection("0px");
  // console.log("isTargetVisible", isTargetVisible); ref={targetRef}

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>
        <NavLink to="/" end>
          React & the Intersection Observer API
        </NavLink>
      </h1>
      <nav>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li className={classes.listItem}>
            <NavLink
              to="/io-basics"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              IO - basics
            </NavLink>
          </li>
          <li className={classes.listItem}>
            <NavLink
              to="/io-infinite"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              IO - infinite scrolling
            </NavLink>
          </li>
          <li className={classes.listItem}>
            <NavLink
              to="/io-custom-root"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              IO - custom root
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
