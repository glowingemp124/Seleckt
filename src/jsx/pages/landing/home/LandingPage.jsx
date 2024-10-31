import React, { useState, useEffect } from "react";
// sections
import "../assets/css/style.css";
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
import MoveToTop from "../components/MoveToTop";

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
      if (window.scrollY > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 600);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 650); // Update mobile check on resize
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize); // Clean up on unmount
    };
  }, []);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <MainNavbar />
      <HeroSection data={landingPageData.Header} />

      <div id="employer"><AreYouAnEmployer /></div>

      <WhyChooseSelecktV2 />

      <div id="key_feature_for_employers"><KeyFeatures /></div>

      <div id="mockUpsSectionEmployer"><MockUpsSection /></div>

      <div id="industries">
        {isMobile ? <IndustryDetailsMockupsMobile /> : <IndustryDetailsMockups />}
      </div>

      <div id="worker"><AreYouWorker /></div>

      <ChooseSelecktForJobSearchV2 />

      <div id="key_feature_for_workers"><KeyFeaturesForWorker /></div>

      <div id="mockUpsSectionWorker"><SecondMockUpsSection /></div>

      <div id="about"><About /></div>

      <div id="faq"><FaqSection /></div>

      <div id="contactUs"><Contact data={landingPageData.Contact} /></div>

      <MoveToTop />

      {/* {showButton && (
        <button
          onClick={handleTop}
          className="moveTop"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="topArrow">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>

        </button>
      )} */}
      <Footer />
    </>
  );
}

export default LandingPage;
