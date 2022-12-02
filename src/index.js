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
import { getMemberCard, getMemberDetail } from "./utils/profileQueries";
import ProfileCard from "./pages/Profile/ProfileCard";
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
    name: "Groups",
    path: "/groups",
  },
  {
    name: "Connect",
    path: "/connect",
  },
  {
    name: "About",
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
      },
      {
        name: "Profile",
        path: "/profile",
        children: [
          {
            name: "Profile",
            path: ":memberId",
            element: <Profile />,
            loader: async function loader({ params }) {
              return getMemberDetail(params.memberId);
            },
          },
        ],
      },
      /* {
        name: "Profile",
        path: "/profile",
        element: <Profile />,
        loader: ({params}) => {
          return getMemberCards(params.memberId);
        },
      }, */
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider forceRefresh={true} router={router} />);
