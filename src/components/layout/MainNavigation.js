import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const navRef = useRef();
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    // console.log("USEEFFECT");

    // get the height of the header/navigation bar
    let navHeight;
    if (navRef.current)
      navHeight = navRef.current.getBoundingClientRect().height;

    function onScroll() {
      window.scrollY <= navHeight
        ? setIsIntersecting(true)
        : setIsIntersecting(false);
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      // console.log("remove event listener!");
      window.removeEventListener("scroll", onScroll);
    };
  }, [isIntersecting]);

  const classNames = isIntersecting
    ? `${classes.header}`
    : `${classes.header} ${classes.sticky}`;

  return (
    <div ref={navRef} className={classes.outerContainer}>
      <header className={classNames}>
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
    </div>
  );
}

export default MainNavigation;
