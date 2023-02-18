import Card from "./Card";

const cards = Array.from(Array(20).keys());

function CardsContainerFinite() {
  return (
    <ul className="cardsList">
      {cards.map((card) => (
        <li key={card}>
          <Card cardNum={card} />
        </li>
      ))}
    </ul>
  );
}

export default CardsContainerFinite;
