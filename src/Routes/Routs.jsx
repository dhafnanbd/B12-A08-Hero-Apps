import React, { Component, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import AppDetails from "../Pages/Apps/App Details/AppDetails";
import AppError from "../Pages/Error/AppError";
import InstalledApps from "../Pages/Installed Apps/InstalledApps";

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
        path: "/apps/:id",
        Component: AppDetails,
        errorElement: <AppError></AppError>,
      },
      {
        path: "/installed",
        Component: InstalledApps,
      },
      {
        path: "/*",
        Component: Error,
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);

export default router;
