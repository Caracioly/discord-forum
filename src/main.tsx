import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./context/AuthProvider";

import "./styles/index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import Home from "@/pages/home";
import Login from "@/pages/login";
import Register from "@/pages/register";
import { ToastProvider } from "./components/Toast/toast-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastProvider>
      <AuthProvider>
        <Theme>
          <RouterProvider router={router} />
        </Theme>
      </AuthProvider>
    </ToastProvider>
  </React.StrictMode>
);
