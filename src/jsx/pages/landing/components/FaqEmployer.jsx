import React, { useState } from "react";
import "../../../pages/landing/assets/css/style.css";
import FaqDataEmployer from "./FaqDataEmployer";

const dot = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 256 256"
    className=""
  >
    <path
      fill="currentColor"
      d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16"
    />
  </svg>
);

const FaqEmployer = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const toggleFaq = (faqIndex) => {
    setActiveIndex(activeIndex === faqIndex ? null : faqIndex);
  };

  const toggleSection = (sectionIndex) => {
    setActiveSection(activeSection === sectionIndex ? null : sectionIndex);
    setActiveIndex(null);
  };

  return (
    <section className="pt-3 pb-3 draggable bg-white">
      <div className="container">
        <div className="row pb-4">
          <div className="col-md-12 mx-auto">
            {FaqDataEmployer.map((section, sectionIndex) => (
              <div key={section.id}>
                <h2
                  className="font py-3 faq_sections_heading d-flex justify-content-start align-items-start"
                  style={{ cursor: "pointer", color: "#00B094" }}
                  onClick={() => toggleSection(sectionIndex)}
                >
                  <span
                    className="arrow"
                    style={{
                      display: "inline-block",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    {activeSection === sectionIndex ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-right"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    )}
                  </span>{" "}
                  <span className="font">{section?.section}</span>
                </h2>

                {activeSection === sectionIndex && (
                  <div className="accordion">
                    {section.faqs.map((faq, faqIndex) => (
                      <div className="accordion-item mb-3" key={faq.id}>
                        <button
                          className="font py-4 faq_div accordion-button border-bottom"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${faqIndex}`}
                          aria-expanded={activeIndex === faqIndex}
                          aria-controls={`collapse${faqIndex}`}
                          onClick={() => toggleFaq(faqIndex)}
                        >
                          <h5 className="font faq_text accordion-header">
                            {faq.question}
                          </h5>
                          <i
                            className={`fa fa-${activeIndex === faqIndex ? "minus" : "plus"
                              } text-xs pt-1 position-absolute end-0 me-3`}
                          />
                        </button>

                        <div
                          id={`collapse${faqIndex}`}
                          className={`accordion-collapse collapse ${activeIndex === faqIndex ? "show" : ""
                            }`}
                        >
                          <div className="accordion-body faqs_desc text-sm opacity-8">
                            {faq?.answer?.map((data) => (
                              <p className="my-0 pb-2" key={data}>
                                {data}
                              </p>
                            ))}

                            {faq?.list &&
                              faq?.list?.map((item) => (
                                <div className="d-flex justify-content-start align-items-start">
                                  <div className="bullet">
                                    <span className="">
                                      {dot}
                                    </span>
                                  </div>
                                  <span className="py-0 my-0" key={item}>
                                    {item}
                                  </span>
                                </div>
                              ))}

                            {faq?.answerAfterList &&
                              faq?.answerAfterList?.map((item) => (
                                <p className="py-0 my-0" key={item}>
                                  {item}
                                </p>
                              ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqEmployer;
