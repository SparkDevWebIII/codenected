import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import FindProjects from "./pages/FindProjects/FindProjects";
import Profile from "./pages/Profile/Profile";
import PageOutline from "./pages/PageOutline";
import Login from "./pages/Login/Login";
import Groups from "./pages/ViewGroups/Group_Page/Groups";
import About from "./pages/About/About";
import Register from "./pages/User/Register";
import Project from "./pages/Project/Project";
import ProjectError from "./pages/Project/ProjectError";
import HomeSite from "./site/pages/Home/Home";
import { getProject, getProjectList } from "./utils/projectQueries";
import "typeface-roboto";
import { getGroupCards, getGroupList } from "./utils/groupQueries";
import { getData } from "./utils/getData";
import { getMemberCard, getMemberDetail } from "./utils/profileQueries";
import ProfileCard from "./pages/Profile/ProfileCard";
import { json } from "react-router-dom";

// These routes are the ones that appear on the header
export const primaryRoutes = [
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
    name: "Our Plans",
    path: "/plans",
    element: <HomeSite />,
  },
  {
    name: "Projects",
    path: "/projects",
    errorElement: <ProjectError />,
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
    path: "/groups/",
    element: <Groups />,
    loader: () => {
      return getGroupList();
    },
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
    loader: () => {
      return getData("memberscards");
    },
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageOutline />,
    // errorElement: <PageOutline />,
    children: [
      ...primaryRoutes,
      {
        name: "Register",
        path: "/register",
        element: <Register />,
      },
      {
        name: "Login",
        path: "/login",
        element: <Login />,
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider forceRefresh={true} router={router} />);
