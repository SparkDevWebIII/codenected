import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import FindProjects from "./pages/FindProjects/FindProjects";
import Profile from "./pages/Profile/Profile";
import PageOutline from "./pages/PageOutline";
import Register from "./pages/User/register";
import Project from "./pages/Project/Project";
import { getProject, getProjectList } from "./utils/projectQueries";
import "typeface-roboto";
import { getData } from "./utils/getData";
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
        name: "Register",
        path: "/register",
        element: <Register />,
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
