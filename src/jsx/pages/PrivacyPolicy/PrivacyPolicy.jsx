import React from "react";
import "./PrivacyPolicy.css";
import { MainNavbar } from "../landing/components/navbar";
import Footer from "../landing/components/Footer";
import PrivacyContent from "./PrivacyContent";

const PrivacyPolicy = () => {
  return (
    <>
      <MainNavbar />

      <PrivacyContent />

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
