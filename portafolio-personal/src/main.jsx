import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Body } from "./Components/Body/Body";
import { ContactForm } from "./Components/ContactForm/ContactForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  // {
  //   path: "/form",
  //   element: <ContactForm />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
