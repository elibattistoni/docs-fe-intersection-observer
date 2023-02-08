import { useRef, useEffect, useState } from "react";

const useIntersection = () => {
  const targetRef = useRef(null);
  const [isTargetVisible, setIsTargetVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsTargetVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-100px 0px 0px 0px",
      threshold: 0.7,
    };

    const observer = new IntersectionObserver(callbackFunction, options);

    const target = targetRef.current;

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [targetRef]);

  return [targetRef, isTargetVisible];
};

export default useIntersection;
