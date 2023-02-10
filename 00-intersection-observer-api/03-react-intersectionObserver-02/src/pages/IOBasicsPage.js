import { useRef } from "react";
import CardContainer from "../components/CardContainer";
import classes from "./IOBasicsPage.module.css";

function IOBasicsPage() {
  const containerRef = useRef();

  function smoothScrollHandler() {
    containerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <>
      <h2>Basic Implementation of the Intersection Observer API with React</h2>
      <h3 className={classes.instructions}>
        Scroll down to see the effect! or click{" "}
        <span onClick={smoothScrollHandler}>here</span>
      </h3>
      <div className={classes.empty}></div>
      <CardContainer ref={containerRef} />
    </>
  );
}

export default IOBasicsPage;
