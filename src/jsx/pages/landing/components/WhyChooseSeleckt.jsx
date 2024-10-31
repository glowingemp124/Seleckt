import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import "../../../pages/landing/assets/css/style.css";
import { motion } from "framer-motion";

const WhyChooseSeleckt = () => {
  return (
    <Container
      fluid
      className="font text-center"
      style={{
        margin: "0rem 0",
        paddingBottom: "5rem",
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fff",
      }}
    >
      <Row className="font justify-content-center">
        {/* GREAN BOX TEXT */}
        <Col
          md={12}
          xs={12}
          style={{
            backgroundColor: "#00B094",
            boxShadow: "0 -4px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }} // Starts off invisible and below the viewport
            whileInView={{ opacity: 1, y: 0 }} // Animates to visible and moves up
            viewport={{ once: true, amount: 0.3 }} // Triggers once, when 20% of the element is in view
            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
          >
            <div
              className="d-flex justify-content-center align-items-center p-4"
              style={{ minHeight: "9rem" }}
            >
              <h3 className="boxes_text"
              >
                <span className="font fw-normal">Seleckt</span> is designed to
                revolutionize your recruitment strategy, offering a streamlined
                and user-friendly platform tailored to the needs of employers
                like you.
              </h3>
            </div>
          </motion.div>
        </Col>

        {/* HEADING */}
        <Col md={12} xs={12} className="mt-5 pt-2">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1
              className="font whyChooseMainHeading mb-5"
              style={{ fontWeight: 600 }}
            >
              Why Choose{" "}
              <span className="font fw-semibold" style={{ color: "#00B094" }}>
                Seleckt
              </span>{" "}
              for Your Hiring Needs?
            </h1>
          </motion.div>
        </Col>




        {/* WHY CHOOSE SECTION */}
        <Col md={4} lg={4} sm={11} xs={11} className="WhyChooseSelect">
          <motion.div
            className="d-flex"
            initial={{ opacity: 0, y: 100 }} // Starts off invisible and below the viewport
            whileInView={{ opacity: 1, y: 0 }} // Animates to visible and moves up
            viewport={{ once: true, amount: 0.3 }} // Triggers once, when 20% of the element is in view
            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
          >
            <span
              style={{
                margin: ".9rem .5rem  0 0",
                minWidth: "7px",
                height: "7px",
                border: "1px solid black",
                backgroundColor: "black",
                borderRadius: "50%",
              }}
            />
            <p className="font whyChooseDesc" style={{ textAlign: "start" }}>
              <span className="font fw-bold">Efficiency:</span> Simplify
              and automate your recruitment workflow, from posting job listings
              to managing applications, all in one centralized platform.
            </p>
          </motion.div>
        </Col>

        <Col md={4} lg={4} sm={11} xs={11} className="WhyChooseSelect"
          style={{ margin: "1rem 4rem" }}
        >
          <motion.div
            className="d-flex"
            initial={{ opacity: 0, y: 100 }} // Starts off invisible and below the viewport
            whileInView={{ opacity: 1, y: 0 }} // Animates to visible and moves up
            viewport={{ once: true, amount: 0.3 }} // Triggers once, when 20% of the element is in view
            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
          >
            <span
              style={{
                margin: ".9rem .5rem  0 0",
                minWidth: "7px",
                height: "7px",
                border: "1px solid black",
                backgroundColor: "black",
                borderRadius: "50%",
              }}
            />
            <p className="font whyChooseDesc" style={{ textAlign: "start" }}>
              <span className="font fw-bold">Quality Candidates:</span>{" "}
              Access a diverse pool of qualified candidates through our
              extensive network and advanced matching algorithms.
            </p>
          </motion.div>
        </Col>
      </Row>

      <motion.div
        initial={{ opacity: 0, y: 100 }} // Starts off invisible and below the viewport
        whileInView={{ opacity: 1, y: 0 }} // Animates to visible and moves up
        viewport={{ once: true, amount: 0.3 }} // Triggers once, when 20% of the element is in view
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      >
        <Row className="justify-content-center">
          <Col md={4} lg={4} sm={11} xs={11} className="d-flex WhyChooseSelect"
            style={{ margin: "1rem 4rem" }}
          >
            <span
              style={{
                margin: ".9rem .5rem  0 0",
                minWidth: "7px",
                height: "7px",
                border: "1px solid black",
                backgroundColor: "black",
                borderRadius: "50%",
              }}
            />
            <p className="font whyChooseDesc" style={{ textAlign: "start" }}>
              <span className="font fw-bold">Insightful Analytics:</span>{" "}
              Gain valuable insights into your recruitment performance with our
              comprehensive analytics and reporting tools.
            </p>
          </Col>

          <Col md={4} lg={4} sm={11} xs={11} className="d-flex WhyChooseSelect"
            style={{ margin: "1rem 4rem" }}
          >
            <span
              style={{
                margin: ".9rem .5rem  0 0",
                minWidth: "7px",
                height: "7px",
                border: "1px solid black",
                backgroundColor: "black",
                borderRadius: "50%",
              }}
            />
            <p className="font whyChooseDesc" style={{ textAlign: "start" }}>
              <span className="font fw-bold">Flexible Customization:</span>{" "}
              Customize your recruitment process with flexible features and
              settings that align with your company's unique requirements.
            </p>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default WhyChooseSeleckt;
