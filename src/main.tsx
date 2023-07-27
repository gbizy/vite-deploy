import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import MyWork from "./pages/MyWork.tsx";
import Contact from "./pages/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/vite-deploy/",
    element: <App />,
    children: [
      {
        path: "/vite-deploy/",
        element: <Home />,
      },
      {
        path: "/vite-deploy/about",
        element: <About />,
      },
      {
        path: "/vite-deploy/mywork",
        element: <MyWork />,
      },
      {
        path: "/vite-deploy/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
