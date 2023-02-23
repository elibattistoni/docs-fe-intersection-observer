import IOContainer from "../../components/intersection-observer/IOContainer";
import Card from "../../components/intersection-observer/Card";
import classes from "./IOVariant.module.css";

function IOVariant() {
  const cards = Array.from(Array(20).keys());
  return (
    <IOContainer
      title="Variant of the basic example"
      subtitle="Scroll animation!"
    >
      <ul className={classes["cards-list"]}>
        {cards.map((card) => (
          <li key={card}>
            <Card cardNum={card} type="variant" />
          </li>
        ))}
      </ul>
    </IOContainer>
  );
}

export default IOVariant;
