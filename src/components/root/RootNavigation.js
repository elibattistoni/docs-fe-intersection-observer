import { NavLink } from "react-router-dom";
import classes from "./RootNavigation.module.css";

function RootNavigation() {
  return (
    <>
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
      <header className={classes["header"]}>
        <h1 className={classes["nav-item--title"]}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes["nav-item--active"] : undefined
            }
            end
          >
            React cool stuff
          </NavLink>
        </h1>
        <nav>
          <ul className={classes["nav-list"]}>
            <li className={classes["nav-item--link--green"]}>
              <NavLink
                to="/intersection-observer"
                className={({ isActive }) =>
                  isActive ? classes["nav-item--active"] : undefined
                }
                end
              >
                Intersection Observer
              </NavLink>
            </li>
            <li className={classes["nav-item--link--yellow"]}>
              <NavLink
                to="/animations"
                className={({ isActive }) =>
                  isActive ? classes["nav-item--active"] : undefined
                }
                end
              >
                Animations
              </NavLink>
            </li>
            <li className={classes["nav-item--link--orange"]}>
              <NavLink
                to="/images"
                className={({ isActive }) =>
                  isActive ? classes["nav-item--active"] : undefined
                }
                end
              >
                Images
              </NavLink>
            </li>
            <li className={classes["nav-item--link--red"]}>
              <NavLink
                to="/survey"
                className={({ isActive }) =>
                  isActive ? classes["nav-item--active"] : undefined
                }
                end
              >
                Survey
              </NavLink>
            </li>
            <li className={classes["nav-item--link--pink"]}>
              <NavLink
                to="/utils"
                className={({ isActive }) =>
                  isActive ? classes["nav-item--active"] : undefined
                }
                end
              >
                Utils
              </NavLink>
            </li>
            <li className={classes["nav-item--link--violet"]}>
              <NavLink
                to="/interactivity"
                className={({ isActive }) =>
                  isActive ? classes["nav-item--active"] : undefined
                }
                end
              >
                Interactivity
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default RootNavigation;
