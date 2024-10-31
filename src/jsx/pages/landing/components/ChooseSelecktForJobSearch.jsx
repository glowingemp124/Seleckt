import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const ChooseSelecktForJobSearch = () => {
  return (
    <Container
      fluid
      className="text-center"
      style={{
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.3)",
        paddingBottom: "5rem",
        backgroundColor: "#fff",
      }}
    >
      <Row className="justify-content-center">
        {/* UPPER BOX WITH BLUE BACKGROUND */}
        <Col
          md={12}
          xs={12}
          style={{
            backgroundColor: "#00B094",
            // backgroundColor: "#120179",
            boxShadow: "0 -4px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }} // Starts off invisible and below the viewport
            whileInView={{ opacity: 1, y: 0 }} // Animates to visible and moves up
            viewport={{ once: true, amount: 0.3 }} // Triggers once, when 20% of the element is in view
            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
          >
            <div className="d-flex justify-content-center align-items-center p-4"
              style={{ minHeight: "9rem" }}>
              <h3 className="boxes_text">
                <span className="font fw-normal">Seleckt</span> is here to connect
                you with exciting job opportunities that match your skills,
                experience, and career goals. Our platform offers a seamless and
                personalized job search experience tailored for workers like you.
              </h3>
            </div>
          </motion.div>
        </Col>

        {/* Why Choose Seleckt Section */}
        <Col md={12} xs={12} className="d-flex justify-content-center mt-5 pt-2">
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
              for Job Search?
            </h1>
          </motion.div>
        </Col>

        <Col
          md={4}
          lg={4}
          sm={11}
          xs={11}
          className="d-flex WhyChooseSelect"
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
              <span className="font fw-bold fs-4">
                User-Friendly Interface:
              </span>{" "}
              Navigate through job listings with ease and apply to positions
              effortlessly using our intuitive platform.
            </p>
          </motion.div>

        </Col>

        <Col
          md={4}
          lg={4}
          sm={11}
          xs={11}
          className="d-flex WhyChooseSelect"
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
              <span className="font fw-bold fs-4">
                Personalized Recommendations:
              </span>{" "}
              Receive job recommendations based on your profile, preferences, and
              past applications to discover relevant opportunities.
            </p>
          </motion.div>

        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col
          md={4}
          lg={4}
          sm={11}
          xs={11}
          className="d-flex WhyChooseSelect"
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
              <span className="font fw-bold fs-4">
                Transparent Communication:
              </span>{" "}
              Stay updated on your application status with real-time notifications
              and communicate directly with employers through our messaging
              system.
            </p>
          </motion.div>

        </Col>

        <Col
          md={4}
          lg={4}
          sm={11}
          xs={11}
          className="d-flex WhyChooseSelect"
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
              <span className="font fw-bold fs-4">
                Career Growth Opportunities:
              </span>{" "}
              Explore a wide range of industries and roles, from entry-level
              positions to executive roles, to find the perfect fit for your
              career path.
            </p>
          </motion.div>

        </Col>
      </Row>
    </Container >
  );
};

export default ChooseSelecktForJobSearch;
