import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopOne from "pages/DesktopOne";
import DesktopOneOne from "pages/DesktopOneOne";
import DesktopOneTwo from "pages/DesktopOneTwo";
import DesktopOneThree from "pages/DesktopOneThree";
import DesktopOneFour from "pages/DesktopOneFour";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "desktopone",
      element: <DesktopOne />,
    },
    {
      path: "desktoponeone",
      element: <DesktopOneOne />,
    },
    {
      path: "desktoponetwo",
      element: <DesktopOneTwo />,
    },
    {
      path: "desktoponethree",
      element: <DesktopOneThree />,
    },
    {
      path: "desktoponefour",
      element: <DesktopOneFour />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
