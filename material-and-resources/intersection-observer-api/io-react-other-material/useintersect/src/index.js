import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import useIntersect from "./useIntersect";
import { FadeBox, WidthBox } from "./boxes";
import "./styles.css";

const { format } = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

const Button = styled.button`
  position: absolute;
  top: 2px;
  left: 2px;
  border: none;
  padding: 1rem;
  font-size: 1rem;
`;

const compToRender = [WidthBox, FadeBox];

const IntersectBox = props => {
  const [state, toggle] = useState(props.initial || 0);

  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray()
  });

  const Component = compToRender[state];

  const componentName = state === 0 ? "FadeBox" : "WidthBox";

  return (
    <Component {...props} ref={ref} ratio={entry.intersectionRatio}>
      intersectionRatio: {format(entry.intersectionRatio)}
      <Button onClick={() => toggle(state === 0 ? 1 : 0)}>
        Switch to {componentName}
      </Button>
    </Component>
  );
};

const buildHexArray = quantity =>
  Array.from(Array(quantity).keys(), i =>
    Number((i + 1) * 100)
      .toString(16)
      .padStart(3, "0")
  );

function App() {
  return (
    <div className="App">
      <h1>useIntersect Example</h1>
      <h2>Start scroling to see some magic happen!</h2>
      {Array.from(Array(40).keys(), i => (
        <br key={i} />
      ))}
      {buildHexArray(10).map((n, i) => (
        <IntersectBox initial={i % 2} key={n} backgroundColor={`#${n}`} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
