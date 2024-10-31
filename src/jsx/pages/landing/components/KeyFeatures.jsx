import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../../pages/landing/assets/css/style.css";
import { motion } from "framer-motion";

const KeyFeatures = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 426);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: true,
    pauseOnHover: true,
    speed: 1000,
    centerPadding: "60px",
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div
      className={`d-flex flex-column justify-content-center flex-wrap py-5 ${smallScreen ? "mx-1" : "mx-4"
        }`}
    // style={{ marginInlineStart: "10rem" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="font mb-4 keyFeature_heading text-center">
          Key Features for{" "}
          <span className="font" style={{ color: "#00B094" }}>
            Employers
          </span>
        </p>
      </motion.div>


      <Container fluid className="p-0 mb-5" style={{ maxWidth: "100%" }}>
        {/* SCROLL */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Row className="d-flex justify-content-center align-items-center mx-2 p-0" style={{ position: "relative" }}>
            <Slider ref={sliderRef} {...settings}>
              {cardData?.map((iter, index) => (
                <Col key={index} id={iter?.id} className="mb-2 p-0">
                  <div
                    className="card_parent shadow-sm"
                    style={{
                      backgroundColor: "#fff",
                      width: smallScreen ? "100%" : "20rem",
                      padding: "2rem",
                      minHeight: smallScreen ? "24rem" : "27rem",
                      margin: "auto"
                    }}
                  >
                    <Card.Title
                      className="pb-0 mb-2"
                      style={{
                        marginTop: "-1rem",
                        textUnderlineOffset: "8px",
                        paddingBottom: "10px",
                        marginBottom: ".5rem",
                        height: "3rem",
                        display: "flex",
                        flexWrap: "wrap",
                        columnGap: 5,
                        alignItems: "end",
                      }}
                    >
                      {iter.title}{" "}
                      <span style={{ color: "#00C6AE" }}>{iter.subTitle}</span>
                    </Card.Title>

                    <hr
                      className="solid"
                      style={{
                        width: "80%",
                        height: "2px",
                        border: "none",
                        backgroundColor: "black",
                      }}
                    />
                    {iter.description.split(".").map((iter, index) => (
                      <Card.Text
                        key={index}
                        style={{
                          fontSize: `${smallScreen ? "1.05rem " : "1.20rem "}`,
                        }}
                      >
                        {iter}.
                      </Card.Text>
                    ))}
                  </div>
                </Col>
              ))}
            </Slider>

            <button
              onClick={previous}
              className="slider_button_left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z" /></svg>
            </button>

            <button
              onClick={next}
              className="slider_button_right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z" /></svg>
            </button>

          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default KeyFeatures;

const cardData = [
  {
    id: 0,
    title: "Job",
    subTitle: "Posting",
    description:
      "Create and manage job listings with ease, including detailed job descriptions, requirements, and application deadlines.",
  },
  {
    id: 1,
    title: "Candidate",
    subTitle: "Management",
    description:
      "Efficiently manage workers profiles, schedule interviews, and track candidate progress throughout the hiring process.",
  },
  {
    id: 2,
    title: "Communication",
    subTitle: "Tools",
    description:
      "Stay connected with workers through built-in messaging and automated notifications to keep them engaged and informed.",
  },
  {
    id: 3,
    title: "Analytics",
    subTitle: "Dashboard",
    description:
      "Monitor key recruitment metrics, such as application rates, time-to-hire, and source of applicants, to optimize your hiring strategy",
  },
  {
    id: 4,
    title: "Time",
    subTitle: "Management",
    description:
      "Monitor key recruitment metrics, such as application rates, time-to-hire, and source of applicants, to optimize your hiring strategy",
  },
  {
    id: 5,
    title: "Ratings",
    // subTitle: "Ratings",
    description:
      "Rate workers as they complete shifts, workers rated 4 star and above are automatically added to your pool.",
  },
];