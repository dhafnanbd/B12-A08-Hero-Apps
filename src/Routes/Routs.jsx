import React, { Component, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);

export default router;
