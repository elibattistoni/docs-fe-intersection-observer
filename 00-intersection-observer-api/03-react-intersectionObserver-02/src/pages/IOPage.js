import { useRef } from "react";

import classes from "./IOPage.module.css";

function IOPage(props) {
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
    <>
      <h2>{props.title}</h2>
      <h3 className={classes.instructions}>
        Scroll down to see the effect! or click{" "}
        <span onClick={scrollToContainerHandler}>here</span>
      </h3>
      <div className={classes.empty}></div>
      <h3 ref={containerRef}>{props.subtitle}</h3>
      <div className={classes.cardsContainer}>{props.children}</div>
      <footer className={classes.footer}>
        <button onClick={scrollToTitleHandler}>&uarr;</button>
      </footer>
    </>
  );
}

export default IOPage;
