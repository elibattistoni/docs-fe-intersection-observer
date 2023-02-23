import IOContainer from "../../components/intersection-observer/IOContainer";
import Card from "../../components/intersection-observer/Card";
import classes from "./IntersectionObserver.module.css";
import { useRef } from "react";

const cards = Array.from(Array(20).keys());

function IOcontent({ type }) {
  return (
    <ul className={classes["cards-list"]}>
      {cards.map((card) => (
        <li key={card}>
          <Card cardNum={card} type={type} />
        </li>
      ))}
    </ul>
  );
}

function IOcontentCustomRoot() {
  //! add an element to intersect as intersecting root for the custom root example (must be a parent!)
  const rootRef = useRef();

  return (
    <div ref={rootRef} className={classes["intersecting-root"]}>
      <h3 className={classes["intersecting-root__title"]}>Intersecting Root</h3>
      <ul className={classes["intersecting-root__cards-list"]}>
        {cards.map((card) => (
          <li key={card}>
            <Card cardNum={card} type="custom-root" root={rootRef} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function IntersectionObserver({ type }) {
  let title,
    subtitle = "Scroll animation!";

  switch (type) {
    case "basic":
      title =
        "Basic Implementation of the Intersection Observer API with React";
      break;
    case "variant":
      title = "Variant of the basic example";
      break;
    case "custom-root":
      title =
        "Implementation of the Intersection Observer API with a Custom Root";
      break;
    default:
      throw new Error();
  }

  return (
    <IOContainer title={title} subtitle={subtitle}>
      {type !== "custom-root" ? (
        <IOcontent type={type} />
      ) : (
        <IOcontentCustomRoot />
      )}
    </IOContainer>
  );
}

export default IntersectionObserver;
