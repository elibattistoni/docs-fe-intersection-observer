import classes from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={classes.container}>
      <h2>Welcome!</h2>
      <p>
        This is a project for practicing mainly the Intersection Observer API
        with React.
      </p>
      <p>However, you will also find the usage of:</p>
      <ul>
        <li>React Router version 6</li>
        <li>Custom Hooks</li>
        <li>Automatic smooth scrolling to an element to have it into view</li>
      </ul>
    </div>
  );
}
