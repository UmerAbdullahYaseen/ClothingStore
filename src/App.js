import React from "react";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CartPage from "./Pages/CartPage";
import CheckOutPage from "./Pages/CheckOutPage";
import ProductDetailPage from "./Pages/ProductDetailPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/Checkout",
    element: <CheckOutPage />,
  },

  {
    path: "/productdetails",
    element: <ProductDetailPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
