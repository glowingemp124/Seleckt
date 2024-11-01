import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "../pages/landing/home/loading";
// Lazy load components
const LandingPage = lazy(() => import("../pages/landing/home/LandingPage"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy/PrivacyPolicy"));
const Tac = lazy(() => import("../pages/Tac/Tac"));
const AntiSlavery = lazy(() => import("../pages/antiSlavery/AntiSlavery"));




const LandingRoutes = () => {
  const routes = [
    { url: "/", element: <LandingPage /> },
    { url: "/privacy-policy", element: <PrivacyPolicy /> },
    { url: "/tac", element: <Tac /> },
    { url: "/anti-slavery", element: <AntiSlavery /> },
  ];
  return (
    <Router basename="/">
      <Suspense fallback={<Loading />}>
        <Routes>
          {routes.map((data, i) => (
            <Route key={i} exact path={`/${data.url}`} element={data.element} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default LandingRoutes;
