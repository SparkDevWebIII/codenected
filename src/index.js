import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import FindProjects from "./pages/FindProjects/FindProjects";
import Profile from "./pages/Profile/Profile";
import PageOutline from "./pages/PageOutline";
import Login from "./pages/User/login";
import Project from "./pages/Project/Project";
import { getProject, getProjectList } from "./utils/projectQueries";
import "typeface-roboto";
import { getData } from "./utils/getData";
import { json } from "react-router-dom";

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
        name: "Login",
        path: "/login",
        element: <Login />,
      },
      {
        name: "Home",
        path: "/",
        element: <Home />,
        loader: async function n({ params }) {
          return json({
            res1: await getData("projectCards"),
            res2: await getData("memberscards"),
            res3: await getData("groupcards"),
          });
        },
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
