import useBasicIntersection from "../../hooks/useBasicIntersection";
import classes from "./Card.module.css";

function Card({ cardNum }) {
  const [targetRef, isTargetVisible] =
    useBasicIntersection("-300px 0px 0px 0px");

  return (
    <div
      ref={targetRef}
      className={`${classes.card} ${isTargetVisible ? classes.show : ""}`}
    >
      {cardNum}
    </div>
  );
}

export default Card;
