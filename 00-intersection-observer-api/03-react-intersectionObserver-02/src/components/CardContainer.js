import React from "react";
import Card from "./Card";

import classes from "./CardContainer.module.css";

const cards = Array.from(Array(20).keys());

const CardContainer = React.forwardRef((props, ref) => {
  return (
    <>
      <h2 ref={ref} className={classes.title}>
        Scroll animation!
      </h2>
      <ul className={classes.cardsList}>
        {cards.map((card) => (
          <li key={card}>
            <Card cardNum={card} />
          </li>
        ))}
      </ul>
    </>
  );
});

export default CardContainer;
