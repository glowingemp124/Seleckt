import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Container, Row, Col, ListGroup, Image, Button } from "react-bootstrap";
import "../../../pages/landing/assets/css/style.css";

// Images
import LogoImage from "../assets/img/heroLogo.png";
import PlayStoreImage from "../assets/img/playstore.png";

const handleSmoothScroll = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <Container fluid className="footer_gradient py-2 text-black">
      <Row className="pt-4" style={{ rowGap: "1.5rem" }}>
        <Col sm={12} md={4}>
          <div className=" d-flex justify-content-center align-items-center text-black">
            <Link to="/" onClick={handleSmoothScroll}>
              <Image className="footer_logo" src={LogoImage} />
            </Link>
          </div>

          <div>

            <h5 className="mt-1 font text-center footer_desc text-white fw-bold text-black" style={{ fontSize: '1.25rem' }}>
              SELECKT STAFF
            </h5>

            <h5 className="font text-center footer_desc text-white fw-medium text-black">
              Staffing Made Simple
            </h5>

            <div className="footer_button_box mt-3">
              <Button
                className="btn btn-dark py-0 d-flex align-items-center justify-content-center m-1"
                style={{
                  borderRadius: ".7rem",
                  backgroundColor: "white",
                  border: "1px solid #bdbdbd",
                  width: "11rem",
                  height: "4rem",
                  // margin: "auto",
                }}
                role="button"
              >
                <div className="icon mr-1">
                  <svg viewBox="0 0 384 512" style={{ width: 33, height: 33 }}>
                    <path
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                      fill="black"
                    ></path>
                  </svg>
                </div>

                <div className="d-flex flex-column align-items-center">
                  <p
                    className="font mb-0 text-black mt-2 text-nowrap"
                    style={{ lineHeight: "15px", fontSize: "12px" }}
                  >
                    Download on the
                  </p>
                  <h4
                    className="text-black fw-semiBold text-nowrap"
                    style={{ lineHeight: "32px" }}
                  >
                    App Store
                  </h4>
                </div>
              </Button>

              <Button
                size="md"
                className="btn btn-dark d-flex align-items-center m-1"
                style={{
                  borderRadius: ".7rem",
                  backgroundColor: "white",
                  border: "1px solid #bdbdbd",
                  width: "11rem",
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
                    className="mb-0 text-black  mt-2"
                    style={{ lineHeight: "15px", fontSize: "12px" }}
                  >
                    Get it on
                  </p>
                  <h4
                    style={{ lineHeight: "32px" }}
                    className="text-black fw-semiBold"
                  >
                    Play Store
                  </h4>
                </div>
              </Button>
            </div>
          </div>
        </Col>

        <Col
          sm={12}
          md={4}
          className="usefulLinks d-flex justify-content-center justify-content-md-end"
        >
          <div className="links_center_class">
            <h4
              className="text-black"
              style={{ color: "#fff", fontWeight: [600], marginBottom: "20px" }}
            >
              Useful Links
            </h4>
            <ListGroup variant="flush">
              {cardData?.LINKS.map((iter, index) => (
                <ListGroup.Item
                  key={index}
                  className=""
                  style={{
                    backgroundColor: "transparent",
                    padding: "0",
                    border: "none",
                    margin: ".3rem 0",
                  }}
                >
                  <Link
                    className="font text-black"
                    onClick={handleSmoothScroll}
                    to={iter.url}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {iter.name}
                  </Link>
                </ListGroup.Item>
              ))}

              <HashLink className="font text-black mt-1" smooth to="/#about">
                About Us
              </HashLink>
            </ListGroup>
          </div>
        </Col>

        <Col
          sm={12}
          md={4}
          className="socialLinks d-flex justify-content-center justify-content-md-end pl-0 pr-4"
        >
          <div className="socialLinks_content footer_social_links">
            <h4
              className="text-black"
              style={{ color: "#fff", fontWeight: [600], marginBottom: "20px" }}
            >
              Social Links
            </h4>
            <ListGroup variant="flush">
              {cardData.Company.map((iter, index) => (
                <ListGroup.Item
                  key={index}
                  style={{
                    backgroundColor: "transparent",
                    padding: "0",
                    border: "none",
                    margin: ".3rem 0",
                  }}
                >
                  <Link
                    to={iter.url}
                    onClick={() => window.scrollTo(0, 0)}
                    className="font text-black d-flex gap-2 align-items-center"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    {iter.icon}
                    {iter.name}
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>

        <Col md={12} lg={11} sm={11} xs={12} className="mx-auto">
          <p
            className="rights_text my-0 py-2 pl-3 text-black"
            style={{ color: "#fff" }}
          >
            Selecktstaff © 2024. All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

const insta = (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598a2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334" /></svg>
);

const linkedIn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 1024 1024"
  >
    <path
      fill="currentColor"
      d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M349.3 793.7H230.6V411.9h118.7zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8m503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2c-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7c120.2 0 142.3 79.1 142.3 181.9z"
    />
  </svg>
);

const facebook = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
  >
    <g fill="none">
      <g clipPath="url(#akarIconsFacebookFill0)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M0 12.067C0 18.034 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="akarIconsFacebookFill0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </g>
  </svg>
);

const twitter = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
    />
  </svg>
);

const cardData = {
  LINKS: [
    {
      name: "Terms and Conditions",
      url: "/tac"
    },
    {
      name: "Website and App Use, Privacy, and Cookies Policy",
      url: "/privacy-policy",
    },
    {
      name: "Anti-Slavery and Human Trafficking Statement",
      url: "/anti-slavery",
    },
  ],

  Company: [
    { name: "Twitter", icon: twitter, url: "#" },
    { name: "LinkedIn", icon: linkedIn, url: "#" },
    { name: "Instagram", icon: insta, url: "#" },
    { name: "Facebook", icon: facebook, url: "#" },
  ],
};