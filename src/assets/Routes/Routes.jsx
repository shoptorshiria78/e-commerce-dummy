import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// Lazy load the components
const Main = React.lazy(() => import("../Layout/Main"));
const Home = React.lazy(() => import("../Pages/Home/Home"));
const Cart = React.lazy(() => import("../Pages/Cart/Cart"));

// Create the router with lazy-loaded routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading Main...</div>}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading Home...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading Cart...</div>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);
