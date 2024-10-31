import React from "react";
import "./Tac.css";
import { MainNavbar } from "../landing/components/navbar";
import Footer from "../landing/components/Footer";
import TacContent from "./TacContent";

const Tac = () => {
  return (
    <>
      <MainNavbar />

      <TacContent />

      <Footer />
    </>
  );
};

export default Tac;
