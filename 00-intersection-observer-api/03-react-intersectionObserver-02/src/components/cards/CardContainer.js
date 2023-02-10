import CardsInfinite from "./CardsInfinite";
import CardsFinite from "./CardsFinite";

function CardContainer({ scrollType }) {
  return scrollType === "finite" ? <CardsFinite /> : <CardsInfinite />;
}

export default CardContainer;
