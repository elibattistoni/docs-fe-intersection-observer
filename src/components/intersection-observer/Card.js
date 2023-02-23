import useIntersectionObserver from "../../hooks/intersection-observer/useIntersectionObserver";

import classes from "./Card.module.css";

function Card({ cardNum, type = "basic" }) {
  //! define the custom hook based on the type of card
  let useObserverHook;
  let options;
  let transformValue;

  switch (type) {
    case "basic":
      options = {
        root: null,
        // !margin: top | right | bottom | left
        rootMargin: "-50px 0px 0px 0px",
        threshold: 0.7,
      };
      transformValue = "translateX(500px)";
      useObserverHook = () => useIntersectionObserver(options);
      break;
    case "variant":
      const isEven = cardNum % 2 === 0;
      transformValue = `translateX(${isEven ? "-700" : "700"}px)`;
      useObserverHook = () => useIntersectionObserver();
      break;
    case "custom-root":
      options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      };
      useObserverHook = () => useIntersectionObserver(options);
      break;
    default:
      console.log("The type was not typed correctly");
      useObserverHook = () => useIntersectionObserver();
      break;
  }

  const [targetRef, isTargetVisible] = useObserverHook();

  const cardStartPosition = !isTargetVisible
    ? { transform: transformValue }
    : null;

  const cardClasses = `
    ${classes["card"]} 
    ${isTargetVisible ? classes["card--show"] : ""}
    `;

  return (
    <div ref={targetRef} className={cardClasses} style={cardStartPosition}>
      {cardNum}
    </div>
  );
}

export default Card;
