import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing/home/LandingPage";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import Tac from "../pages/Tac/Tac";
import AntiSlavery from "../pages/antiSlavery/AntiSlavery";

const LandingRoutes = () => {
  const routes = [
    { url: "/", element: <LandingPage  /> },
    { url: "/privacy-policy", element: <PrivacyPolicy  /> },
    { url: "/tac", element: <Tac  /> },
    { url: "/anti-slavery", element: <AntiSlavery  /> },
  ];

  return (
    <Router basename="/">
        <Routes>
          {routes.map((data, i) => (
            <Route key={i} exact path={`/${data.url}`} element={data.element} />
          ))}
        </Routes>
    </Router>
  );
};

export default LandingRoutes;
