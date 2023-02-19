import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import classes from "./IONavigation.module.css";

function IONavigation() {
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

  const headerStyles = isIntersecting
    ? `${classes["header"]}`
    : `${classes["header"]} ${classes["sticky"]}`;

  return (
    //! IMPORTANT CAHNGE CSS CLASSES!!!
    <div ref={navRef} className={classes["container-header"]}>
      <header className={headerStyles}>
        <h1 className={classes["header__title"]}>
          <NavLink to="/intersection-observer" end>
            React & Intersection Observer API
          </NavLink>
        </h1>
        <nav>
          <ul className={classes["nav-list"]}>
            <li className={classes["nav-list__item"]}>
              <NavLink
                to="/intersection-observer/basic"
                className={({ isActive }) =>
                  isActive ? classes["active"] : undefined
                }
              >
                IO - basics
              </NavLink>
            </li>
            <li className={classes["nav-list__item"]}>
              <NavLink
                to="/intersection-observer/variant"
                className={({ isActive }) =>
                  isActive ? classes["active"] : undefined
                }
              >
                IO - variant
              </NavLink>
            </li>
            <li className={classes["nav-list__item"]}>
              <NavLink
                to="/intersection-observer/custom-root"
                className={({ isActive }) =>
                  isActive ? classes["active"] : undefined
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
