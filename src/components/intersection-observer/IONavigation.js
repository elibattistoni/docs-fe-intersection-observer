import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import classes from "./IONavigation.module.css";

function IONavigation() {
  const navRef = useRef();
  const [isIntersecting, setIsIntersecting] = useState(true);
  const [navHeight, setNavHeight] = useState(null);

  useEffect(() => {
    // console.log("USEEFFECT", new Date().toLocaleTimeString());

    // get the height of the header/navigation bar --> NB this should be added to the height of the higher-level navbar
    if (navRef.current && !navHeight) {
      // console.log("set navRect height!!!!");
      const navRect = navRef.current.getBoundingClientRect();
      setNavHeight(navRect.top + navRect.height);
    }

    function onScroll() {
      // ! NB - 100 because I want the intersection to start before the navigation bar completely exits the screen
      window.scrollY <= navHeight - 100
        ? setIsIntersecting(true)
        : setIsIntersecting(false);
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      // console.log("remove event listener!");
      window.removeEventListener("scroll", onScroll);
    };
  }, [isIntersecting, navHeight]);

  const headerStyles = isIntersecting
    ? `${classes["header"]}`
    : `${classes["header"]} ${classes["sticky"]}`;

  return (
    <div ref={navRef} className={classes["container-header"]}>
      <header className={headerStyles}>
        <nav>
          <ul className={classes["nav-list"]}>
            <li className={classes["nav-item--link"]}>
              <NavLink
                to="/intersection-observer/basic"
                className={({ isActive }) =>
                  isActive ? classes["nav-item--link--active"] : undefined
                }
              >
                IO - basics
              </NavLink>
            </li>
            <li className={classes["nav-item--link"]}>
              <NavLink
                to="/intersection-observer/variant"
                className={({ isActive }) =>
                  isActive ? classes["nav-item--link--active"] : undefined
                }
              >
                IO - variant
              </NavLink>
            </li>
            <li className={classes["nav-item--link"]}>
              <NavLink
                to="/intersection-observer/custom-root"
                className={({ isActive }) =>
                  isActive ? classes["nav-item--link--active"] : undefined
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

export default IONavigation;
