import { Col, Container, Image, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

// images
import workerProfile from "../assets/img/secondMockupImages/workerProfileNew.webp";
import worker_profile_page from "../assets/img/secondMockupImages/worker_profile.webp";
import timeSheet from "../assets/img/secondMockupImages/timeSheet.webp";
import workerDashboard from "../assets/img/secondMockupImages/workerDashboard.webp";

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
        },
      },
    ],
  };

  return (
    <div className=" bg-white">
      <div
        className={`flex justify-content-center px-0 ${smallScreen ? "mx-1" : "mx-4"
          }`}
        style={{
          // marginInlineStart: "10rem",
          padding: "5rem 0",
        }}
      >
        <Container fluid className="p-0" style={{ width: "85%" }}>
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
        </Container>
      </div>
    </div>
  );
};

export default MockUpsSection;

const cardData = [
  {
    id: 0,
    image: worker_profile_page,
    bulltets: ["Download app", "Complete registration"],
  },
  {
    id: 1,
    image: workerProfile,
    bulltets: ["Complete onboarding", "Create your profile"],
  },
  {
    id: 2,
    image: workerDashboard,
    bulltets: [
      "Start receiving job offers that matches your skills.",
      "Accept only the shifts that you want.",
    ],
  },
  {
    id: 3,
    image: timeSheet,
    bulltets: ["Start earning"],
  },
];
