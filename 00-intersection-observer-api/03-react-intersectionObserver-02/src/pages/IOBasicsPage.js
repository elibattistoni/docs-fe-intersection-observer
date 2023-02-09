import CardContainer from "../components/CardContainer";
import classes from "./IOBasicsPage.module.css";

export default function IOBasicsPage() {
  return (
    <div className={classes.container}>
      <h2>Basic Implementation of the Intersection Observer API with React</h2>
      <h3>Scroll down to see the effect!</h3>
      <div className={classes.empty}></div>
      <CardContainer />
    </div>
  );
}
