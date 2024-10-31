import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../index.css";
import "../chart.css";
// Pages
import Login from "../pages/Login";
import Error400 from "../pages/Error400";
import Error403 from "../pages/Error403";
import Error404 from "../pages/Error404";
import Error500 from "../pages/Error500";
import Error503 from "../pages/Error503";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import Home from "../pages/Dashboard/Home/Home";
import Industries from "../pages/industry/industry";
import WorkerProfile from "../pages/profile/WorkerProfile.jsx";
import EmployerProfile from "../pages/profile/EmployerProfile.js";
import Companies from "../pages/job/jobs/job";
import Jobroles from "../pages/jobrole/jobRole";
import SearchJobs from "../pages/Dashboard/SearchJobs/SearchJobs";
import Employer from "../pages/employer/employer";
import AppProfile from "../components/AppsMenu/AppProfile/AppProfile";
import Compose from "../pages/admin/admin";
import Calendar from "../pages/faq/faq";
import Expense from "../pages/expense/expense";
import ProductList from "../components/AppsMenu/Shop/ProductList/ProductList";
import ProductDetail from "../pages/setting/setting";
import Checkout from "../components/AppsMenu/Shop/Checkout/Checkout";
import Venue from "../pages/employer/venue/venue";
import ExpenseCategory from "../pages/expense/expenseCategory";
import Customers from "../pages/report/report";
import Skill from "../pages/skill/skill";
import Support from "../pages/support/support";
import Uniform from "../pages/uniform/uniform";
import InternalStaff from "../pages/employer/internalStaff/internalStaff";
import Element from "../pages/pages/privacyPolicy";
import SummerNote from "../pages/pages/aboutUs";
import Pickers from "../pages/pages/termsConditions";
import Shifts from "../pages/job/Shifts.jsx";
import Template from "../pages/template/template";
import Worker from "../pages/worker/worker";
import Logout from "../pages/Logout";
import Privacyolicy from "../pages/pages/privacyPolicy";
import TimeSheet from "../pages/timeSheet/timeSheet";
import Strikes from "../pages/strikes/strikes";
import Invoices from "../pages/invoices/invoices";
// Landing Page 
import LandingPage from "../pages/landing/home/LandingPage.jsx";
import WorkerJobsTable from "../pages/worker/WorkerJobsTable";
import EmployerJobsTable from "../pages/employer/EmployerJobsTable.jsx";
import EmployerSpend from "../pages/employer/employerSpend.jsx";
import WorkerAllJobs from "../pages/worker/WorkerAllJobs.jsx";
import EmployerAllJobs from "../pages/employer/employerAllJobs.jsx";

const SuperAdminRoutes = () => {
  const routes = [
    { url: "/", element: <LandingPage /> },
    { url: "home", element: <Home /> },
    { url: "Industries", element: <Industries /> },

    { url: "companies", element: <Companies /> },
    { url: "search-job", element: <SearchJobs /> },
    { url: "Employers", element: <Employer /> },
    { url: "job-role", element: <Jobroles /> },
    { url: "appProfile", element: <AppProfile /> },
    { url: "Admins", element: <Compose /> },
    { url: "Faq", element: <Calendar /> },
    { url: "venues", element: <Venue /> },
    { url: "Expenses", element: <Expense /> },
    { url: "ecom-product-list", element: <ProductList /> },
    { url: "settings", element: <ProductDetail /> },
    { url: "expense-category", element: <ExpenseCategory /> },
    { url: "ecom-checkout", element: <Checkout /> },
    { url: "ecom-product-detail", element: <ProductDetail /> },
    { url: "reports", element: <Customers /> },
    { url: "internal-staff", element: <InternalStaff /> },
    { url: "Workers", element: <Worker /> },
    { url: "Skills", element: <Skill /> },
    { url: "privacy-policy", element: <Element /> },
    { url: "about-us", element: <SummerNote /> },
    { url: "terms-conditions", element: <Pickers /> },
    { url: "support", element: <Support /> },
    { url: "Templates", element: <Template /> },
    { url: "uniform", element: <Uniform /> },
    { url: "login", element: <Login /> },
    { url: "page-error-400", element: <Error400 /> },
    { url: "page-error-403", element: <Error403 /> },
    { url: "page-error-404", element: <Error404 /> },
    { url: "page-error-500", element: <Error500 /> },
    { url: "page-error-503", element: <Error503 /> },
    { url: "page-forgot-password", element: <ForgotPassword /> },
    { url: "logout", element: <Logout /> },
    { url: "privacy-policy", element: <Privacyolicy /> },
    { url: "shifts", element: <Shifts /> },
    { url: "timesheet", element: <TimeSheet /> },
    { url: "strikes", element: <Strikes /> },
    { url: "invoices", element: <Invoices /> },
    { url: "employer/Profile/:id", element: <EmployerProfile /> },
    { url: "worker/Profile/:id", element: <WorkerProfile /> },
    { url: "worker/:id/jobs", element: <WorkerJobsTable /> },
    { url: "employer/:id/jobs", element: <EmployerJobsTable /> },
    { url: "employerSpend", element: <EmployerSpend /> },
    { url: "worker-all-jobs", element: <WorkerAllJobs /> },
    { url: "employer-all-jobs", element: <EmployerAllJobs /> },



  ];

  return (
    <Router basename="/admin/">
      <div id="main-wrapper" className="show">
        <Routes>
          {routes.map((data, i) => (
            <Route key={i} exact path={`/${data.url}`} element={data.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default SuperAdminRoutes;
