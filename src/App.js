import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/root/RootLayout";
import RootError from "./pages/root/RootError";
import RootHome from "./pages/root/RootHome";
import LayoutIO from "./pages/intersection-observer/LayoutIO";
import IOHome from "./pages/intersection-observer/IOHome";
import IntersectionObserver from "./pages/intersection-observer/IntersectionObserver";

//! infinite scroll without intersection observer https://github.com/bradtraversy/vanillawebprojects/tree/master/infinite_scroll_blog

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <RootHome /> },
      {
        path: "intersection-observer",
        element: <LayoutIO />,
        children: [
          { index: true, element: <IOHome /> },
          { path: "basic", element: <IntersectionObserver type="basic" /> },
          { path: "variant", element: <IntersectionObserver type="variant" /> },
          {
            path: "custom-root",
            element: <IntersectionObserver type="custom-root" />,
          },
        ],
      },
      /*
      {
        path: "animations",
        element: <LayoutAnimation />,
        children: [
          { index: true, element: <AnimationHome /> },
          { path: "scrolling-clock", element: <ScrollingClock /> },
          { path: "rotating-navigation", element: <RotatingNavigation /> },
          //! mouse reveal and split landing should do similar things
          { path: "mouse-reveal", element: <MouseReveal /> },
          { path: "split-landing", element: <SplitLanging /> },
          { path: "follow-click", element: <FollowClick /> },
        ],
      },
      {
        path: "images",
        element: <LayoutImages />,
        children: [
          { index: true, element: <ImagesHome /> },
          { path: "expanding-cards", element: <ExpandingCards /> },
          //! load blurry images that un-blur with percentage in time + other images with lazy loading
          { path: "loading", element: <BlurryLazyLoading /> },
          //! section containiner a background video
          { path: "background-video", element: <BackgroundVideo /> },
          //! section containing a carousel
          { path: "carousel", element: <Carousel /> },
          //! https://50projects50days.com/projects/double-vertical-slider/
          { path: "vertical-slider", element: <VerticalSlider /> },
          { path: "double-vertical-slider", element: <DoubleVerticalSlider /> },
        ],
      },
      {
        path: "survey",
        element: <LayoutSurvey />,
        children: [
          { index: true, element: <SurveyHome /> },
          //! one page survey
          { path: "one-step", element: <SurveyOneStep /> },
          //! multiple pages survey
          { path: "multiple-step", element: <SurveyMultipleSteps /> },
        ],
      },
      {
        path: "utils",
        element: <LayoutUtils />,
        children: [
          { index: true, element: <UtilsHome /> },
          { path: "dark-light-mode", element: <DarkLightMode /> },
          //! FAQ accordions
          { path: "accordion", element: <Accordion /> },
          //! both a progress steps bar (which shows the steps) and a continuous progress bar
          { path: "progress-bars", element: <ProgressBars /> },
          { path: "navigation-dropdown", element: <NavigationDropdown /> },
          //! sticky nav that highlights the current section on the navigation itself
          { path: "navigation-highlight", element: <NavigationHighlight /> },
          //!
          { path: "left-menu-slider", element: <LeftMenuSlider /> },
          //! NB TODO TO ADD: layout that changes if you are left-handed vs. right-handed
        ],
      },
      {
        path: "interactivity",
        element: <LayoutInteractivity />,
        children: [
          { index: true, element: <InteractivityHome /> },
          { path: "drag-and-drop", element: <DragAndDrop /> },
          //!https://50projects50days.com/projects/custom-range-slider/
          { path: "custom-range-slider", element: <CustomRangeSlider /> },
        ],
      },
      */
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
