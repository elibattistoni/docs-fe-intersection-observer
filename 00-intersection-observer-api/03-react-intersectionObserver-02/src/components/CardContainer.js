import Card from "./Card";

import classes from "./CardContainer.module.css";

const cards = Array.from(Array(20).keys());

export default function CardContainer() {
  return (
    <ul className={classes.cardsList}>
      {cards.map((card) => (
        <li key={card}>
          <Card cardNum={card} />
        </li>
      ))}
    </ul>
  );
}
