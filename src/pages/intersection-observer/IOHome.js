import classes from "./IOHome.module.css";

function IOHome() {
  return (
    <main className={classes["home__container"]}>
      <h2>Welcome!</h2>
      <section className={classes["home__description"]}>
        <p>
          This is a project for practicing some cool animations and transition
          features using React without the help of other libraries, using only
          the browser APIs and CSS.
          <br />
          This is a list of the implemented features:
        </p>
        <ul>
          <li>CSS modules to apply css-scoping to single components</li>
          <li>
            React Router version 6, with the implementation of a common root
            layout and a common error page
          </li>
          <li>The usage of the following React hooks: useSatate(), useRef()</li>
          <li>
            An example of Ract.forwardRef() - actually substituted with nested
            components
          </li>
          <li>
            A Custom Hook for implementing the Intersection Observer API with
            React
          </li>
          <li>
            Sticky header/navigation bar that changes when scrolling and having
            it out of the viewport
          </li>
          <li>Automatic smooth scrolling to an element to have it into view</li>
        </ul>
      </section>
    </main>
  );
}

export default IOHome;
