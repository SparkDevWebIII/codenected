import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import FindProjects from "./pages/FindProjects/FindProjects";
import Profile from "./pages/Profile/Profile";
import PageOutline from "./pages/PageOutline";
import Register from "./pages/User/Register";
import Project from "./pages/Project/Project";
import { getProject, getProjectList } from "./utils/projectQueries";
import "typeface-roboto";

// These routes are the ones that appear on the header
export const primaryRoutes = [
  {
    name: "Projects",
    path: "/projects",
    children: [
      {
        index: "true",
        name: "Projects",
        element: <FindProjects />,
        loader: () => {
          return getProjectList();
        },
      },
      {
        name: "Project",
        path: ":projectId",
        element: <Project />,
        loader: ({ params }) => {
          return getProject(params.projectId);
        },
      },
    ],
  },
  {
    name: "Events",
    path: "/events",
  },
  {
    name: "Connect",
    path: "/connect",
  },
  {
    name: "About Us",
    path: "/about",
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageOutline />,
    // errorElement: <ErrorPage />,
    children: [
      ...primaryRoutes,
      {
        name: "Register",
        path: "/register",
        element: <Register />,
      },
      {
        name: "Home",
        path: "/",
        element: <Home />,
      },
      {
        name: "Profile",
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider forceRefresh={true} router={router} />);
