import IOPage from "./IOPage";
import CardContainer from "../components/cards/CardContainer";

function IOBasicsPage() {
  return (
    <IOPage
      title="Basic Implementation of the Intersection Observer API with React"
      subtitle="Finite scroll animation!"
    >
      <CardContainer scrollType="finite" />
    </IOPage>
  );
}

export default IOBasicsPage;
