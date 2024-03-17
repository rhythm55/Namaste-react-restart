import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestrauntDetail from "./components/RestrauntDetail";
import UserContext from "./components/UserContext";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [userName, setUserName] = useState("Any");
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUserName: userName, setUserName }}>
        <HeaderComponent />
        <Outlet />
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);
