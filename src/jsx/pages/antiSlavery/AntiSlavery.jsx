import React from "react";
import "./AntiSlavery.css";
import { MainNavbar } from "../landing/components/navbar";
import Footer from "../landing/components/Footer";
import AntiSlaveryContent from "./AntiSlaveryContent";

const AntiSlavery = () => {
  return (
    <>
      <MainNavbar />

      <AntiSlaveryContent />

      <Footer />
    </>
  );
};

export default AntiSlavery;

