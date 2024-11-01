import React, { useEffect, useState } from "react";
// import QRCode from "../assets/img/qrcode.png";
import QRCode from "react-qr-code";
import employer from "../assets/img/video/employer.mp4";
import { Col, Container, Row } from "react-bootstrap";
import "../../../pages/landing/assets/css/style.css";
import { motion } from "framer-motion";

const AreYouAnEmployer = () => {
  const handleSmoothScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="AreYouAnEmployerSec">
      <Container fluid>
        <Row className="py-3 d-flex justify-content-center align-items-stretch">
          <Col md={11} lg={5} sm={11} xs={11}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="font text-black px-0 bold_heading">
                Are you an{" "}
                <span className="font" style={{ color: "#00B094" }}>
                  Employer
                </span>
                ?
              </h3>
            </motion.div>

            <video
              className="video-fluid mt-4"
              autoPlay
              playsInline
              muted
              loop
              style={{
                maxWidth: "100%",
                minHeight: "25rem",
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            >
              <source src={employer} type="video/mp4" />
            </video>

            {/* <button
              type="button"
              className="font demo_button text-white btn btn-lg rounded-xl p-3 mt-3 mt-lg-5"
              style={{
                backgroundColor: "#00B094",
                maxWidth: "10rem",
              }}
            >
              Book a Demo
            </button> */}
          </Col>

          <Col md={11} lg={5} sm={11} xs={11}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1
                className="font fix_wid display-6 text-black pt-4 pt-lg-0"
                style={{ fontWeight: 500 }}
              >
                <span className="font" style={{ color: "#00B094" }}>
                  Streamline{" "}
                </span>
                Your Hiring Process and Access Quality
                <span className="font" style={{ color: "#00B094" }}>
                  {" "}
                  Candidates
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="mt-4 font fix_wid about_desc">
                At{" "}
                <span
                  className="font"
                  style={{ color: "#00B094", fontWeight: "600" }}
                >
                  Seleckt
                </span>{" "}
                Staff, we streamline your hiring journey with tailored solutions
                designed to meet your unique needs. Our innovative approach
                combines advanced technology and expert insights to identify the
                best candidates quickly and efficiently. Elevate your
                recruitment strategy and build a winning team with confidence!{" "}
              </p>

              <a
                href="#contactUs"
                onClick={handleSmoothScroll}
                type="button"
                className="font demo_button text-white btn btn-lg rounded-xl p-2 mt-3 mt-lg-3 mx-0 mx-sm-3"
                style={{
                  backgroundColor: "#00B094",
                  maxWidth: "10rem",
                  fontWeight: 700
                }}
              >
                Book a Demo
              </a>
            </motion.div>

            <div className="mt-0 p_text fix_wid d-flex justify-content-start align-items-center">
              <QRCode
                size={164}
                style={{ margin: "0rem 0", width: "7.5rem" }}
                value={
                  "https://apps.apple.com/us/app/banter-ai-dating-assistant/id6504637185"
                }
                viewBox={`0 0 256 256`}
              />
              <p className="text-black scanner_text_width mb-0 ms-3">
                Scan the QR code to install the app
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AreYouAnEmployer;
