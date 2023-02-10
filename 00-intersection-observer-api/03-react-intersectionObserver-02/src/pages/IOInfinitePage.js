import IOPage from "./IOPage";
import CardContainer from "../components/cards/CardContainer";

const cards = Array.from(Array(5).keys());

function IOInfinitePage() {
  return (
    <IOPage
      title="Infinite scroll animation with the Intersection Observer API"
      subtitle="Infinite scroll animation!"
    >
      <CardContainer scrollType="infinite" />
    </IOPage>
  );
}

export default IOInfinitePage;
