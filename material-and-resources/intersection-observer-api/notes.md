# Intersection Observer API

## Introduction

The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's **viewport (1)**.

Intersection information is needed for many reasons, such as:
- Lazy-loading of images or other content as a page is scrolled.
- Implementing "infinite scrolling" web sites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.
- Reporting of visibility of advertisements in order to calculate ad revenues.
- Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result.

The Intersection Observer API lets code register a callback function that is executed whenever an element they wish to monitor enters or exits another element (or the viewport), or when the amount by which the two intersect changes by a requested amount.

The Intersection Observer API cannot tell you the exact number of pixels that overlap or specifically which ones they are; however, it covers the much more common use case of "If they intersect by somewhere around N%, I need to do something."

## Concepts & Usage

The Intersection Observer API allows you to configure a callback that is called when either of these circumstances occur:
- A target element intersects either the device's viewport or a specified element. That specified element is called the root element or root for the purposes of the Intersection Observer API.
- The first time the observer is initially asked to watch a target element.

The degree of intersection between the target element and its root is the intersection ratio. This is a representation of the percentage of the target element which is visible as a value between 0.0 and 1.0.



### (1) Viewport
A viewport represents a polygonal (normally rectangular) area in computer graphics that is currently being viewed. In web browser terms, it refers to the part of the document you're viewing which is currently visible in its window (or the screen, if the document is being viewed in full screen mode). Content outside the viewport is not visible onscreen until scrolled into view.
The portion of the viewport that is currently visible is called the visual viewport. This can be smaller than the layout viewport, such as when the user has pinched-zoomed. The layout viewport remains the same, but the visual viewport became smaller.

### Resources
1. https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
2. https://www.youtube.com/watch?v=2IbRtjez6ag
3. https://blog.webdevsimplified.com/2022-01/intersection-observer/
4. https://dev.to/producthackers/intersection-observer-using-react-49ko
5. https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5
6. https://github.com/zygisS22/intersectionObserverApi
7. https://codesandbox.io/s/04vvrxj79p