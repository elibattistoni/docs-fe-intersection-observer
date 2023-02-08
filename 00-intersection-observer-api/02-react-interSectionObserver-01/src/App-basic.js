import React, { useRef, useEffect, useState } from "react";

// configure intersection observer

function App() {
  const targetRef = useRef(null);
  const [isTargetVisible, setIsTargetVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsTargetVisible(entry.isIntersecting);
  };

  useEffect(() => {
    console.log("USE EFFECT!!!!");
    console.log("targetRef", targetRef);

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver(callbackFunction, options);
    const target = targetRef.current;

    if (target) observer.observe(target);

    //! cleanup function
    return () => {
      if (target) {
        console.log("UNOBSERVE!!!");
        observer.unobserve(target);
      }
    };
  }, [targetRef]);

  return (
    <div className="app">
      <div className="headerInfo">
        {isTargetVisible ? "IN VIEWPORT" : "NOT IN VIEWPORT"}
      </div>
      <div className="section"></div>
      <div className={isTargetVisible ? "box show" : "box"} ref={targetRef}>
        HELLO
      </div>
    </div>
  );
}

export default App;
