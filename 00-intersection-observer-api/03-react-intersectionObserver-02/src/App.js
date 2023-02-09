import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import IOBasicsPage from "./pages/IOBasicsPage";
import IOInfinitePage from "./pages/IOInfinitePage";
import IOCustomRootPage from "./pages/IOCustomRootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "io-basics", element: <IOBasicsPage /> },
      { path: "io-infinite", element: <IOInfinitePage /> },
      { path: "io-custom-root", element: <IOCustomRootPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
