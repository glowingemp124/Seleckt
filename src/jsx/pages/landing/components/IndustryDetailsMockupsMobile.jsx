import React, { useRef } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Hospitality from "../assets/img/industrialImages/hospitality-min.webp";
import Industrial from "../assets/img/industrialImages/Industrial.webp";
import Retail from "../assets/img/industrialImages/Retail.webp";
import SocialCare from "../assets/img/industrialImages/SocialCare.webp";
import businessManagemnt from "../assets/img/industrialImages/businessManagemnt.webp";
import facilitiesmanagement from "../assets/img/industrialImages/facilitiesmanagement-min.webp";
import nurseryCare from "../assets/img/industrialImages/nurseryCare.webp";
import "../../../pages/landing/assets/css/style.css";

const IndustryDetailsMockupsMobile = () => {
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

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: true,
    pauseOnHover: true,
    speed: 500,
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
    <Container fluid>
      {/* BLUE TEXT BOX */}
      <Row
        style={{
          marginBottom: "5rem",
        }}
      >
        <Col
          md={12}
          xs={12}
          style={{
            backgroundColor: "#120179",
            // backgroundColor: "#00B094",
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div
              className="d-flex justify-content-center align-items-center p-4"
              style={{ minHeight: "9rem" }}
            >
              <h3 className="boxes_text">
                Join the growing number of forward-thinking employers who are
                transforming their recruitment process with{" "}
                <span className="font fw-normal">Seleckt</span> Staff. Discover
                a smarter way to hire today!
              </h3>
            </div>
          </motion.div>
        </Col>
      </Row>

      {/* INDUSTRIES SECTION */}
      {/* <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      > */}
      <div>
        <Row
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "relative",
            paddingBottom: "5rem",
            width: "100%",
            margin: "auto",
          }}
        >
          <Slider ref={sliderRef} {...settings}>
            {cardData?.map((iter, index) => (
              <Col key={iter?.id} className=" mb-4 px-1">
                <div class="card_img_box position-relative">
                  <Image
                    src={iter.src}
                    alt="mockup-1"
                    class="w-100 h-auto img-fluid"
                    style={{
                      width: "100%",
                      height: "15rem",
                      objectFit: "cover",
                      margin: "auto",
                    }}
                  />
                  <div class="image-overlay"></div>
                  <h2 class="font card_title">{iter?.title}</h2>
                </div>

                <div class="border_bottom"></div>

                <div className="mt-4">
                  {iter.description.map((temp, index) => (
                    <p key={index} className="font mb-2">
                      {temp}
                    </p>
                  ))}
                </div>
              </Col>
            ))}
          </Slider>

          <button onClick={previous} className="slider_button_left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"
              />
            </svg>
          </button>

          <button onClick={next} className="slider_button_right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
              />
            </svg>
          </button>
        </Row>
      </div>
      {/* </motion.div> */}
    </Container>
  );
};

export default IndustryDetailsMockupsMobile;

const cardData = [
  // {
  //   id: 0,
  //   title: "Social Care",
  //   src: SocialCare,
  //   description: [
  //     "Care Assistant",
  //     "Support Worker",
  //     "Senior Care Assistant",
  //     "Personal Assistant",
  //     "Administrator",
  //   ],
  // },
  {
    id: 1,
    title: "Facilities Management",
    src: Industrial,
    description: [
      "Cleaner",
      "Cleaning Supervisor",
      "Door Supervisor",
      "Handy Man",
      "Event Technician",
    ],
  },
  {
    id: 2,
    src: facilitiesmanagement,
    title: "Industrial",
    description: [
      "Food Production Operative",
      "Forklift Driver",
      "Loader/Crew",
      "Motorcycle Delivery Driver",
      "Bicycle Delivery Driver",
      "Picker / Packer",
    ],
  },
  {
    id: 4,
    title: "Nursey Care",
    src: nurseryCare,
    description: [
      "Nursery Assistant",
      "Nursery Nurse / Practitioner",
      "Room / Team Leader",
      "Deputy Manager",
      "Nursery Manager",
      "Nursery Cook",
    ],
  },
  {
    id: 5,
    title: "Hospitality",
    src: Hospitality,
    description: [
      "Bartender",
      "Waiting Staff",
      "Hostess",
      "Food Prep Assistant",
      "Head Chef",
      "Kitchen Porter",
    ],
  },
  {
    id: 5,
    title: "Business Management",
    src: businessManagemnt,
    description: [
      "Customer Services Agent",
      "Administrator",
      "Team Lead",
      "Sales Person",
      "Call Centre Agent",
      "Receptionist",
    ],
  },
  {
    id: 5,
    title: "Retail",
    src: Retail,
    description: [
      "Retail Assistant",
      "Online Order Assistant",
      "Sales Assistant",
      "Replenishemnt Assistant",
      "Cashier",
    ],
  },
];
