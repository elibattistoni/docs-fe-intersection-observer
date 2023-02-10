import Card from "./Card";

const cards = Array.from(Array(10).keys());

function CardsFinite() {
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

export default CardsFinite;
