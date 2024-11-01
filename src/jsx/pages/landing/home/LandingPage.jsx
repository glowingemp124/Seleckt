import React, { useState, useEffect } from "react";
// sections
import "../assets/css/style.css";
import MoveToTop from "../components/MoveToTop";
import JsonData from "../data/data.json";
import { MainNavbar, Navbar } from "../components/navbar";

import { HeroSection } from "../components/heroSection";
import AreYouAnEmployer from "../components/AreYouAnEmployer";
import WhyChooseSelecktV2 from "../components/WhyChooseSelecktV2";
import KeyFeatures from "../components/KeyFeatures";
import MockUpsSection from "../components/MockUpsSection";
import IndustryDetailsMockups from "../components/IndustryDetailsMockups";
import IndustryDetailsMockupsMobile from "../components/IndustryDetailsMockupsMobile";
import AreYouWorker from "../components/AreYouWorker";
import ChooseSelecktForJobSearchV2 from "../components/ChooseSelecktForJobSearchV2";
import KeyFeaturesForWorker from "../components/KeyFeaturesForWorker";
import SecondMockUpsSection from "../components/SecondMockUpsSection";
import { About } from "../components/about";
import FaqSection from "../components/FaqSection";
import { Contact } from "../components/contact";
import Footer from "../components/Footer";

// import { Features } from "../components/features";
// import WhyChooseSeleckt from "../components/WhyChooseSeleckt";
// import ChooseSelecktForJobSearch from "../components/ChooseSelecktForJobSearch";

function LandingPage() {
  const [landingPageData, setLandingPageData] = useState({});
  const [showButton, setShowButton] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 600);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <MainNavbar />
      <HeroSection data={landingPageData.Header} />

      <div id="employer"><AreYouAnEmployer /></div>

      <WhyChooseSelecktV2 />

      <div id="key_feature_for_employers"><KeyFeatures /></div>

      <div id="mockUpsSectionEmployer"><MockUpsSection /></div>

      <div id="industries">{isMobile ? <IndustryDetailsMockupsMobile /> : <IndustryDetailsMockups />}</div>

      <div id="worker"><AreYouWorker /></div>

      <ChooseSelecktForJobSearchV2 />

      <div id="key_feature_for_workers"><KeyFeaturesForWorker /></div>

      <div id="mockUpsSectionWorker"><SecondMockUpsSection /></div>

      <div id="about"><About /></div>

      <div id="faq"><FaqSection /></div>

      <div id="contactUs"><Contact data={landingPageData.Contact} /></div>

      <MoveToTop />

      <Footer />
    </>
  );
}

export default LandingPage;
