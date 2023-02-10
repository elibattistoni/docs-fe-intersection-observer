import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const targetRef = useRef();
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    console.log("use effect!");
    const onScroll = () => {
      window.scrollY < 182 ? setIsIntersecting(true) : setIsIntersecting(false);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      console.log("remove event listener!");
      window.removeEventListener("scroll", onScroll);
    };
  }, [isIntersecting]);

  const classNames = isIntersecting
    ? `${classes.header}`
    : `${classes.header} ${classes.sticky}`;

  return (
    <header className={classNames}>
      <h1 className={classes.title}>
        <NavLink to="/" end>
          React & the Intersection Observer API
        </NavLink>
      </h1>
      <nav>
        <ul className={classes.list}>
          <li className={classes.listItem} ref={targetRef}>
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
