import classes from "./RootHome.module.css";

function RootHome() {
  return (
    <main className={classes["home__container"]}>
      <h2>Welcome!</h2>
      <section className={classes["home__description"]}>
        <p>
          This is a very big project!
          <br />
          It contains a lot of stuff, created with React and CSS, without the
          help of any other libraries.
        </p>
        <p>In this project you can find:</p>
        <ul>
          <li>Cool stuff with the Intersection Observer API, like: ...</li>
          <li>Nice animations and transitions, like: ...</li>
          <li>Useful tricks with images, like: ...</li>
          <li>
            A section dedicated to surveys (single page, and multiple-pages)
          </li>
          <li>Layout utlis, like: ...</li>
          <li>A section dedicated to interactive things, like: ...</li>
        </ul>
      </section>
    </main>
  );
}

export default RootHome;
