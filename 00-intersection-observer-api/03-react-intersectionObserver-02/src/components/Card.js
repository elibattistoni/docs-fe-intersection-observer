import useIntersection from "../hooks/useIntersection";
import classes from "./Card.module.css";

export default function Card({ cardNum }) {
  const [targetRef, isTargetVisible] = useIntersection();

  // let cardStyle = classes.card
  // const cardStyle = isTargetVisible ? "card show" : "card";

  return (
    <div
      ref={targetRef}
      className={`${classes.card} ${isTargetVisible ? classes.show : ""}`}
    >
      This is card number {cardNum}
    </div>
  );
}
