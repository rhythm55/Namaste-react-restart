import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestrauntDetail from "./components/RestrauntDetail";

const AppLayout = () => {
  return (
    <div className="app">
      {console.log(useState())}
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const Contact = lazy(() => import("./components/Contact"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestrauntDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback="<h1>Loding...</h1>">
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);
