"use strict";

const cards = document.querySelectorAll(".card");

//! the intersection observer wants 2 arguments:
//! 1) a callback function --> this is going to be called every single time something you are observing changes its intersection
//! 2) an options object for configuration

//! the callback takes in a list of entries --> the entries in a list of all the things that have changed (i.e. the things that have intersected or unintersected)
const observer = new IntersectionObserver(
  (entries) => {
    //# step 1: understand entries
    // console.log(entries);

    //# step 2: toggle the show class
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      //! if isIntersecting is true, add the show class; if isIntersecting is false, remove the show class
      //! NB by default the isIntersecting property becomes true as soon as a single px of the target element becomes visible
      //! we can customize this behavior with the options object, with the threshold property

      //! stop oserving if isIntersecting is true
      // if (entry.isIntersecting) observer.unobserve(entry.target); //! this makes that if you scroll up, there are no more animations
      //! this is because as soon as they become visible on the page, we are removing them from our observer so they no longer call the callback function
      //! and then once everything is visible, there is nothing else being observed
      //! NB this is a great way of only do somthing as soon as it is visible and then don't do anything else
      //! this is IMPORTANT for ' lazy loading of images ' --> as soon as the image is about to be shown on the page you will want to run some code that
      //! downloads the image and then just stop observing than image because you don't care about that image anymore
    });
  },
  {
    //# step 3: configure options of observer
    //# threshold
    threshold: 0.8, //! the default is 0, 1 means that 100% of the target must be visible for the intersection observer to execute the callback function
    //# rootMargin
    // rootMargin: "-100px", //! NB this allows us to offset when something will happen
    //! "-100px" says basicallt that our container is now 100px smaller (so from the top and bottom of our container we are subtracting 100px)
    //! "100px" with this all the animations are playing when the target element is 100px away from becoming visible on the screen
    //! NB this rootMargin property is very useful if you want to ' preload images ' --> you can say, e.g. when the image is 250px away from becoming visible,
    //! start running the code (the callback fn) that download the image
    //# root
    // root: //! root is the actual container that you care about (by default, it is the viewport or the visible body of the html)
    //! NB the root must be one of the parent elements of the element that you are targeting --> so that it tracks the children elements that are inside of it
    //! but the parent element must be a scrolling element (otherwise, the parent container will be the same size of all the children)
  }
);

//# step 1
//! to the observer we need to tell what we want to observe
//! in this way you tell the observer: you have to observe when this element (i.e. the input to .observe()) changes its intersection
// observer.observe(cards[0]);
//! in console:
//! intersectionRatio == the percentage of the object is on the screen
//! isIntersecting == boolean that indicates if our thing is interseecting --> by default it means "is it visible on the screen?"
//! do not consider the property isVisible
//! intersectionRect == the amount of space that is visible on the screen of the thing that we are targeting --> since the 100% of our thing is on the screen, it is the same as boundingClientRect
//! rootBounds refers to the bounds of the screen (the root, by default, is the screen or viewport)
//! the target is the thing that we are observing

//# step 2
cards.forEach((card) => observer.observe(card));

//==========================
//# intersection observer for lazy loading

function loadNewCards() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    card.textContent = "New Card";
    card.classList.add("card");
    observer.observe(card);
    cardContainer.append(card);
  }
}

const lastCardObserver = new IntersectionObserver(
  (entries) => {
    // let's take the first element of the list
    const lastCard = entries[0];

    if (!lastCard.isIntersecting) return;

    //! the only thing we care about is when our last card becomes visible, then load a bunch of new cards after that
    loadNewCards(); //! this function is going to be called only if our last card is visible

    lastCardObserver.unobserve(lastCard.target); //! unobserve because the last card keeps changing
    //! and observe the new last card
    lastCardObserver.observe(document.querySelector(".card:last-child"));
  },
  {
    rootMargin: "100px",
  }
);

const cardContainer = document.querySelector(".card-container");
lastCardObserver.observe(document.querySelector(".card:last-child"));
