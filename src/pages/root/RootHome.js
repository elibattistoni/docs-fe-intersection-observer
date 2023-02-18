import { NavLink } from "react-router-dom";
import classes from "./RootHome.module.css";

function NavigationBar() {
  return (
    <header className={classes["header"]}>
      <h1 className={classes["header__title"]}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? classes["header__link--active"] : undefined
          }
          end
        >
          React cool stuff 😎
        </NavLink>
      </h1>
      <nav className={classes["header__nav"]}>
        <ul className={classes["header__nav-list"]}>
          <li className={classes["header__nav-item"]}>
            <NavLink
              to="/intersection-observer"
              className={({ isActive }) =>
                isActive ? classes["header__nav-item--active"] : undefined
              }
              end
            >
              Intersection Observer
            </NavLink>
          </li>
          <li className={classes["header__nav-item"]}>
            <NavLink
              to="/animations"
              className={({ isActive }) =>
                isActive ? classes["header__nav-item--active"] : undefined
              }
              end
            >
              Animations
            </NavLink>
          </li>
          <li className={classes["header__nav-item"]}>
            <NavLink
              to="/images"
              className={({ isActive }) =>
                isActive ? classes["header__nav-item--active"] : undefined
              }
              end
            >
              Images
            </NavLink>
          </li>
          <li className={classes["header__nav-item"]}>
            <NavLink
              to="/survey"
              className={({ isActive }) =>
                isActive ? classes["header__nav-item--active"] : undefined
              }
              end
            >
              Survey
            </NavLink>
          </li>
          <li className={classes["header__nav-item"]}>
            <NavLink
              to="/utils"
              className={({ isActive }) =>
                isActive ? classes["header__nav-item--active"] : undefined
              }
              end
            >
              Utils
            </NavLink>
          </li>
          <li className={classes["header__nav-item"]}>
            <NavLink
              to="/interactivity"
              className={({ isActive }) =>
                isActive ? classes["header__nav-item--active"] : undefined
              }
              end
            >
              Interactivity
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function RootHome() {
  return (
    <>
      <NavigationBar />
      <h2 className={classes["home__title"]}>Welcome!</h2>
      <section className={classes["home__description"]}>
        <p className={classes["home__description--paragraph"]}>
          This is a project containing several cool animations and nice-to-have
          useful things with React and CSS,{" "}
          <strong>without the help of any other libraries</strong>.<br />
          In this project you can find:
        </p>
        <ul className={classes["home__description--list"]}>
          <li>Cool stuff with the Intersection Observer API, like: ...</li>
          <li>Nice animations and transitions, like: ...</li>
          <li>Useful tricks with images, like: ...</li>
          <li>
            A section dedicated to surveys (single page, and multiple-pages)
          </li>
          <li>Layout utlis, like: ...</li>
          <li>A section dedicated to interactive things, like: ...</li>
        </ul>
      </section>
    </>
  );
}

export default RootHome;
