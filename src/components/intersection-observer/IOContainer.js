import { useRef } from "react";
import classes from "./IOContainer.module.css";
import { ReactComponent as CaretDoubleUp } from "./CaretDoubleUp.svg";

function IOContainer({ children, title, subtitle }) {
  const containerRef = useRef();

  function scrollToContainerHandler() {
    containerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  function scrollToTitleHandler() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className={classes["io-container"]}>
      <h2>{title}</h2>
      <p className={classes["instructions"]}>
        Scroll down to see the effect! or click{" "}
        <span
          onClick={scrollToContainerHandler}
          className={classes["instructions--underline"]}
        >
          here
        </span>
      </p>
      <div className={classes["empty-space"]}></div>
      <h2 ref={containerRef}>{subtitle}</h2>
      {children}
      <footer className={classes["footer"]}>
        <button
          onClick={scrollToTitleHandler}
          className={classes["footer__button"]}
        >
          <CaretDoubleUp className={classes["footer__icon"]} />
        </button>
      </footer>
    </main>
  );
}

export default IOContainer;
