import { useRef } from "react";
import classes from "./IOContainer.module.css";

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
      <h3 className={classes["instructions"]}>
        Scroll down to see the effect! or click{" "}
        <span
          onClick={scrollToContainerHandler}
          className={classes["instructions--underline"]}
        >
          here
        </span>
      </h3>
      <div className={classes["empty-space"]}></div>
      <h3 ref={containerRef}>{subtitle}</h3>
      {/*
      //! NB where is cardsContainer class or the cards-container class
      */}
      <div className={classes["cards-container"]}>{children}</div>
      <footer className={classes["footer"]}>
        <button
          onClick={scrollToTitleHandler}
          className={classes["footer__button"]}
        >
          &uarr;
        </button>
      </footer>
    </main>
  );
}

export default IOContainer;
