import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { te } from "date-fns/locale";
// import adminProfile from "../assets/img/firstMockupImages/adminProfile.webp";
// import mockup3 from "../assets/img/firstMockupImages/Mockup3.webp";

// images
import mockup2 from "../assets/img/firstMockupImages/Mockup2.webp";
import employer_profile from "../assets/img/firstMockupImages/employer_profile.webp";
import companyProfilePage from "../assets/img/firstMockupImages/companyProfilePage.webp";
import companyTimesheet from "../assets/img/firstMockupImages/employer_timesheet.webp";

const MockUpsSection = () => {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 426);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    // centerMode: true,
    infinite: true,
    // centerPadding: "40px",
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className=" bg-white">
      <div
        className={`flex justify-content-center px-0 ${
          smallScreen ? "mx-1" : "mx-4"
        }`}
        style={{
          // marginInlineStart: "10rem",
          padding: "5rem 0",
        }}
      >
        <Container fluid className="p-0" style={{ width: "85%" }}>
          {/* <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          > */}
          <div>
            <Row className="d-flex justify-content-center align-items-center mx-2 p-0">
              <Slider className="p-0" {...settings}>
                {cardData.map((iter) => (
                  <Col
                    className="p-0"
                    key={iter?.id}
                    style={{
                      // minWidth: "15rem",
                      // maxWidth: "15rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#eee",
                    }}
                  >
                    <Image
                      style={{
                        height: "30rem",
                        maxWidth: smallScreen ? "100%" : "15rem",
                        margin: "auto",
                      }}
                      src={iter.image}
                      alt="mockup-1"
                    />
                    <ul
                      className="text-black mockup_points mt-3"
                      style={{
                        paddingLeft: "0.7rem",
                        maxWidth: "15rem",
                        // maxWidth: smallScreen ? "100%" : "15rem",
                        margin: "auto",
                      }}
                    >
                      {iter.bulltets.map((temp, index) => (
                        <li key={index} className="d-flex">
                          <span
                            style={{
                              margin: ".6rem .5rem  0 0",
                              minWidth: "7px",
                              height: "7px",
                              backgroundColor: "black",
                              border: "1px solid black",
                              backgroundColor: "black",
                              borderRadius: "50%",
                            }}
                          />
                          <p className="text-black mb-1">{temp}</p>
                        </li>
                      ))}
                    </ul>
                  </Col>
                ))}
              </Slider>
            </Row>
          </div>

          {/* </motion.div> */}
        </Container>
      </div>
    </div>
  );
};

export default MockUpsSection;

const cardData = [
  {
    id: 0,
    image: employer_profile,
    bulltets: ["Download app", "Complete registration"],
  },
  {
    id: 1,
    image: companyProfilePage,
    bulltets: ["Complete onboarding", "Create your profile"],
  },
  {
    id: 2,
    image: mockup2,
    bulltets: [
      "Post jobs to your worker pool, choose your own worker or let the app select workers for you.",
    ],
  },
  {
    id: 3,
    image: companyTimesheet,
    bulltets: [
      "Get your shifts filled",
      "Timesheets and invoices are automatically generated for you.",
    ],
  },
];
