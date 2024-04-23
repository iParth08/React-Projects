import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Home from "./components/common/Home.jsx";
import Contact from "./components/common/Contact.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RandomBgColor from "./components/RandomBgColor.jsx";
import PasswordGenerator from "./components/PasswordGenerator.jsx";
import CurrencyConvertor from "./components/CurrencyConvertor.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects/RandomBgColor",
        element: <RandomBgColor />,
      },
      {
        path: "projects/PasswordGenerator",
        element: <PasswordGenerator />,
      },
      {
        path: "projects/CurrencyConvertor",
        element: <CurrencyConvertor />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
