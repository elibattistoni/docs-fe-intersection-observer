import IOContainer from "../../components/intersection-observer/IOContainer";
import Card from "../../components/intersection-observer/Card";
import classes from "./IOBasic.module.css";

function IOBasic() {
  const cards = Array.from(Array(20).keys());

  return (
    <IOContainer
      title="Basic Implementation of the Intersection Observer API with React"
      subtitle="Finite scroll animation!"
    >
      <ul className={classes["cards-list"]}>
        {cards.map((card) => (
          <li key={card}>
            <Card cardNum={card} />
          </li>
        ))}
      </ul>
    </IOContainer>
  );
}

export default IOBasic;
