import { useRef } from "react";

import classes from "./IOPage.module.css";

function IOPage(props) {
  const containerRef = useRef();

  function smoothScrollHandler() {
    containerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <>
      <h2>{props.title}</h2>
      <h3 className={classes.instructions}>
        Scroll down to see the effect! or click{" "}
        <span onClick={smoothScrollHandler}>here</span>
      </h3>
      <div className={classes.empty}></div>
      <h3 ref={containerRef}>{props.subtitle}</h3>
      <div className={classes.cardsContainer}>{props.children}</div>
    </>
  );
}

export default IOPage;
