import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import FindProjects from "./pages/FindProjects/FindProjects";
import Profile from "./pages/Profile/Profile";
import PageOutline from "./pages/PageOutline";
import Login from "./pages/User/login";
import Groups from "./pages/ViewGroups/Group_Page/Groups";


// These routes are the ones that appear on the header
export const primaryRoutes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Projects",
    path: "/projects/",
    element: <FindProjects />,
  },
  {
    name: "Profile",
    path: "/profile/",
    element: <Profile />,
  },
  {
    name: "Groups",
    path: "/groups/",
    element: <Groups/>,
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
        path: "/login/",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider forceRefresh={true} router={router} />
  </React.StrictMode>
);
