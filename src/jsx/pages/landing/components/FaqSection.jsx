import React, { useState } from "react";
import FaqEmployer from "./FaqEmployer";
import FaqWorker from "./FaqWorker";
import "../../../pages/landing/assets/css/style.css";

const FaqSection = () => {
  const [activeFaqType, setActiveFaqType] = useState("employer");

  const handleFaqTypeChange = (type) => {
    setActiveFaqType(type);
  };

  return (
    <section className="pt-3 pb-3 draggable bg-white">
      <div className="container">
        <div className="row mt-5 mb-4">
          <div className="col-md-8 mx-auto text-center">
            <h2 className="font bold_heading">Frequently Asked Questions</h2>

            <div className="mt-4 faq_tab d-flex justify-content-center align-items-center gap-3">
              <button
                className="font"
                onClick={() => handleFaqTypeChange("employer")}
                style={{
                  backgroundColor:
                    activeFaqType === "employer" ? "#00B094" : "#E0E0E0",
                  padding: "0.8rem 0rem",
                  width: "8rem",
                  textAlign: "center",
                  color: activeFaqType === "employer" ? "#fff" : "#000",
                  borderRadius: "12px",
                  fontSize: "1.1rem",
                }}
              >
                Employer
              </button>

              <button
                className="font px-4"
                onClick={() => handleFaqTypeChange("worker")}
                style={{
                  backgroundColor:
                    activeFaqType === "worker" ? "#00B094" : "#E0E0E0",
                  padding: "0.8rem 0rem",
                  width: "8rem",
                  textAlign: "center",
                  color: activeFaqType === "worker" ? "#fff" : "#000",
                  borderRadius: "12px",
                  fontSize: "1.1rem",
                }}
              >
                Worker
              </button>
            </div>
          </div>
        </div>

        <div className="row pb-4">
          <div className="col-sm-12 col-lg-10 mx-auto">
            <div className="accordion" id="accordionRental">
              {activeFaqType === "employer" && <FaqEmployer />}
              {activeFaqType === "worker" && <FaqWorker />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
