import React, { Fragment } from "react";
import { ToastContainer } from 'react-toastify';
/// Components
import SuperAdminRoutes from "./jsx/Routes/Routes";
/// Style
import "./css/style.css";
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";

import { withResizeDetector } from "react-resize-detector";
import LandingRoutes from "./jsx/Routes/LandingRoutes";

const App = ({ width }) => {
   const body = document.querySelector("body");

   width >= 1200
      ? body.setAttribute("data-sidebar-style", "full")
      : width <= 1199 && width >= 767
         ? body.setAttribute("data-sidebar-style", "mini")
         : body.setAttribute("data-sidebar-style", "overlay");
   return (
      <Fragment>
         <SuperAdminRoutes />
         <ToastContainer />
         <LandingRoutes />
      </Fragment>

   );
};

export default withResizeDetector(App);
