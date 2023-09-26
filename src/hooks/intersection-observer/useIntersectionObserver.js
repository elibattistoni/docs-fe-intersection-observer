import { useRef, useEffect, useState } from "react";

const useIntersectionObserver = (
  options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  }
) => {
  const targetRef = useRef(null);
  const [isTargetVisible, setIsTargetVisible] = useState(false);

  const callbackFunction = (entries) => {
    console.log("entries", typeof entries, entries);
    const [entry] = entries;
    setIsTargetVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    const target = targetRef.current;

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [targetRef, options]);

  return [targetRef, isTargetVisible];
};

export default useIntersectionObserver;
