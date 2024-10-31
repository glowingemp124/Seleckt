import React from "react";
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

const IndustryDetailsMockups = () => {
  const settings = {
    dots: false,
    lazyLoad: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
          style={{ paddingBottom: "5rem", width: "95%", margin: "auto" }}
        >
          <Slider {...settings}>
            {cardData?.map((iter, index) => (
              <Col key={iter?.id} className=" mb-4">
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
        </Row>
      </div>

      {/* </motion.div> */}
    </Container>
  );
};

export default IndustryDetailsMockups;

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
    id: 3,
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
    id: 4,
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
    id: 6,
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
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
