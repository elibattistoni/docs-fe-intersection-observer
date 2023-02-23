import useIntersectionObserver from "../../hooks/intersection-observer/useIntersectionObserver";

import classes from "./Card.module.css";

function Card({ cardNum, type, root = null }) {
  //! define the custom hook based on the type of card
  let useObserverHook, options, transformValue, cardClasses, cardStartPosition;

  switch (type) {
    case "basic":
      //! style
      transformValue = "translateX(500px)";
      //! IO options
      options = {
        root: null,
        //! margin: top | right | bottom | left
        rootMargin: "-50px 0px 0px 0px",
        threshold: 0.7,
      };
      useObserverHook = () => useIntersectionObserver(options);
      break;
    case "variant":
      //! style
      const isEven = cardNum % 2 === 0;
      transformValue = `translateX(${isEven ? "-700" : "700"}px)`;
      //! IO
      useObserverHook = () => useIntersectionObserver();
      break;
    case "custom-root":
      //! IO options
      options = {
        root: root.current,
        rootMargin: "-50px 0px 0px 0px",
        threshold: 0.5,
      };
      useObserverHook = () => useIntersectionObserver(options);
      break;
    default:
      throw new Error();
  }

  const [targetRef, isTargetVisible] = useObserverHook();

  if (type !== "custom-root") {
    cardClasses = `
          ${classes["card--1"]} 
          ${isTargetVisible ? classes["card--1--show"] : ""}
        `;
  } else {
    cardClasses = `
      ${classes["card--2"]} 
      ${isTargetVisible ? classes["card--2--show"] : ""}
    `;
  }

  cardStartPosition =
    type !== "custom-root" && !isTargetVisible
      ? { transform: transformValue }
      : null;

  console.log("is", cardNum, "visible?", isTargetVisible);

  return (
    <div ref={targetRef} className={cardClasses} style={cardStartPosition}>
      {cardNum}
    </div>
  );
}

export default Card;
