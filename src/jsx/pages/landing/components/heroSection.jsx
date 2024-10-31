import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Image,
} from "react-bootstrap";
import LogoImage from "../assets/img/heroLogo.png";
import MobileImage from "../assets/img/heroMobile.png";
import AppleImage from "../assets/img/apple-logo.png";
import PlayStoreImage from "../assets/img/playstore.png";
import colors from "react-multi-date-picker/plugins/colors";
import "../../../pages/landing/assets/css/style.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HeroSection = (props) => {
  return (
    <Container fluid className="intro">
      {/* LOGO */}
      <Row className="logo_parent h-25">
        <Col
          md={2}
          xs={12}
          className="heroSection_mainDiv d-flex justify-content-start align-items-center flex-column px-0 py-0"
        >
          <motion.div
            className="relative d-flex justify-content-start"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link to="/">
              <Image className="logo" src={LogoImage} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p
              className="mx-0 font text-center footer_desc text-white fw-medium"
              style={{ fontSize: "0.85rem", width: "15rem" }}
            >
              Staffing Made Simple
            </p>
          </motion.div>
        </Col>
      </Row>

      {/* CENTER TEXT */}
      <Row className="box_hero align-items-stretch justify-content-center">
        <Col
          lg={7}
          md={8}
          xs={12}
          sm={12}
          className="d-flex align-items-center justify-content-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div
              style={{
                marginTop: "3rem",
                // backgroundColor: "RGB(28, 28, 28, 0.5)",
                // padding: "1rem",
                // borderRadius: "1rem",
                // border: "1px solid #fff",
                // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              {/* heading */}
              <h1 className="hero_title">Seleckt Staff Mobile App</h1>

              {/* description */}
              <h5 className="hero_desc custom_desc">
                Seleckt Staff mobile app available for download on iPhone, iPad,
                and Android
              </h5>

              {/* buttons */}
              <div className="hero_button_box">
                {/* APPLE BUTTON */}
                <Button
                  className="btn btn-dark d-flex align-items-center m-1"
                  style={{
                    borderRadius: ".7rem",
                    backgroundColor: "black",
                    border: "1px solid white",
                    width: "12rem",
                  }}
                  role="button"
                >
                  <Image
                    src={AppleImage}
                    fluid
                    style={{ width: 32, height: 32 }}
                  />

                  <div
                    className="d-flex flex-column align-items-center ms-2 pl-1"
                    style={{ margin: "-1rem" }}
                  >
                    <p
                      className="font mb-0 text-white mt-2"
                      style={{ lineHeight: "15px", fontSize: "12px" }}
                    >
                      {" "}
                      Download on the
                    </p>
                    <h4
                      style={{ lineHeight: "30px" }}
                      className="text-white fw-semiBold"
                    >
                      App Store
                    </h4>
                  </div>
                </Button>

                {/* PLAY STORE BUTTON */}
                <Button
                  size="md"
                  className="btn btn-dark d-flex align-items-center m-1"
                  style={{
                    borderRadius: ".7rem",
                    backgroundColor: "black",
                    border: "1px solid white",
                    width: "12rem",
                  }}
                >
                  <Image
                    src={PlayStoreImage}
                    fluid
                    style={{ width: 32, height: 32 }}
                  />

                  <div
                    className="d-flex  flex-column align-items-center ms-2 pl-2"
                    style={{ margin: "-1rem" }}
                  >
                    <p
                      className="mb-0 text-white  mt-2"
                      style={{ lineHeight: "15px", fontSize: "12px" }}
                    >
                      {" "}
                      Get it on
                    </p>
                    <h4
                      style={{ lineHeight: "30px" }}
                      className="text-white fw-semiBold"
                    >
                      Play Store
                    </h4>
                  </div>
                </Button>
              </div>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

{
  /* <h1
              className="font logo_text text-white text-center"
              style={{ letterSpacing: "1px", fontWeight: 700 }}
            >
              STAFFING
            </h1>
            <h2 className="font slogan_font text-white text-center">
              MADE SIMPLE
            </h2> */
}
