import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  // const targetRef = useRef();
  // const [isIntersecting, setIsIntersecting] = useState(false);
  // console.log("MainNavigation");

  // useEffect(() => {
  //   console.log("USE EFFECT!");
  //   console.log("targetRef", targetRef);
  //   const target = targetRef.current;

  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.7,
  //   };
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     const [entry] = entries;
  //     setIsIntersecting(entry.isIntersecting);
  //   }, options);

  //   if (target) observer.observe(target);

  //   return () => {
  //     if (isIntersecting) observer.unobserve(target);
  //   };
  // }, []);

  let classNames = classes.header;
  // if (!isIntersecting) classNames = `${classes.sticky} ${classes.sticky}`;
  // console.log("classNames", classNames);
  // ref={targetRef}

  return (
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
