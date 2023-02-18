import IOPage from "./IOPage";
import CardsContainerFinite from "../components/cards/CardsContainerFinite";

function IOBasicsPage() {
  return (
    <IOPage
      title="Basic Implementation of the Intersection Observer API with React"
      subtitle="Finite scroll animation!"
    >
      <CardsContainerFinite />
    </IOPage>
  );
}

export default IOBasicsPage;
