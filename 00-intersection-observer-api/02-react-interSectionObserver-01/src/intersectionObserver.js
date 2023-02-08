// this code was borrowed from https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5

//============= Intersection Observer API
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};

const options = {
  root: domNode, //! this is the element to be used as the viewport when calculating the intersection ratio
  //! the root must be an ancestor to the target element being observed (by default, it is the browser viewport)
  rootMargin: "0px",
  threshold: [0.98, 0.99, 1],
};

const observer = new IntersectionObserver(callback, options);

//! the observer now needs to observe something: you need to pass a DOM node to the observe method
//! you can only pass one node to observe at a time
//! when you no longer want to observe a node, you have to call the unobserve method, and pass in the node that you want to stop watching
//! or you can call the disconnect method to unobserve all the node that you were observing

observer.observe(nodeOne);
observer.observe(nodeTwo);
observer.observe(nodeThree);

observer.unobserve(nodeOne);
observer.disconnect();
