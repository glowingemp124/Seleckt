import React from "react";
import aboutImg from "../assets/img/aboutUs/aboutUs.webp";
import { Col, Container, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";

export const About = (props) => {
  return (
    <div>
      {/* GREEN TEXT SECTION */}
      <div className="text">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="d-flex justify-content-center align-items-center p-4 mb-5"
            style={{
              minHeight: "9rem",
              backgroundColor: "#120179",
              // backgroundColor: "#00B094",
              boxShadow: "0 -4px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h3 className="boxes_text">
              Don't miss out on the opportunity to advance your career and
              achieve your professional aspirations with <span>Seleckt</span>{" "}
              Staff. Start your job search journey today and take the next step
              towards a brighter future with
              <span> Seleckt</span> Staff.
            </h3>
          </div>
        </motion.div>
      </div>

      {/* ABOUT US SECTION */}
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-stretch">
          <Col md={11} lg={5} sm={11} xs={11}>
            <h1 className="font mb-4 bold_heading">
              About{" "}
              <span className="font" style={{ color: "#00B094" }}>
                Us
              </span>
            </h1>
            <Image
              // src={aboutImg}
              src={aboutImg}
              alt="about"
              style={{ borderRadius: "12px", width: "90%" }}
              fluid
              className="mt-2 mt-md-2"
            />
          </Col>

          <Col md={11} lg={5} sm={11} xs={11}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1
                className="font display-5 text-black pt-4 pt-lg-0"
                style={{ fontWeight: 500 }}
              >
                <span className="font" style={{ color: "#00B094" }}>
                  Bridging{" "}
                </span>
                Opportunities and
                <span className="font" style={{ color: "#00B094" }}>
                  {" "}
                  Empowering{" "}
                </span>
                Workers
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="font mt-4 about_desc">
                Welcome to{" "}
                <span
                  className="font"
                  style={{ fontWeight: 700, color: "#00B094" }}
                >
                  Seleckt
                </span>{" "}
                Staff, your ultimate destination for streamlined recruitment
                solutions. We are dedicated to revolutionising the way temporary
                and permanent job placements are made, connecting skilled
                workers with employers in a seamless and efficient manner. Our
                platform simplifies the recruitment process, ensuring that only
                the most qualified and available candidates are matched with job
                opportunities.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* OUR MISSION */}
      <Container fluid>
        <Row className="pb-5 d-flex justify-content-center align-items-stretch text-start text-lg-center">
          <Col md={11} lg={10} sm={11} xs={11}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="font mt-5 mb-0 bold_heading">Our Mission</p>

              <p className="font about_desc">
                At{" "}
                <span
                  className="font"
                  style={{ fontWeight: 700, color: "#00B094" }}
                >
                  Seleckt
                </span>{" "}
                Staff, our mission is to empower both workers and employers by
                providing a platform that facilitates transparent and efficient
                job placements. We aim to bridge the gap between talent and
                opportunity, enabling businesses to find the right candidates
                quickly and enabling workers to secure rewarding employment
                opportunities that match their skills and availability.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
