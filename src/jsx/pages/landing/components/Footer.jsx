import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, Image, Button } from "react-bootstrap";
import "../../../pages/landing/assets/css/style.css";
// import GroupOfPeople from "../assets/img/Groupofdiversepeople.png";

// Images
import LogoImage from "../assets/img/heroLogo.png";
import AppleImage from "../assets/img/apple-logo.png";
import PlayStoreImage from "../assets/img/playstore.png";
import { HashLink } from "react-router-hash-link";

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
            <h5 className="font text-center footer_desc text-white fw-medium text-black">
              Staffing Made Simple
            </h5>

            <div className="footer_button_box mt-3">
              {/* APPLE BUTTON */}
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

              {/* PLAY STORE BUTTON */}
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
              {cardData.LINKS.map((iter, index) => (
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
                  {/* Add actual URLs for navigation */}
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

              {/* <a href="#c" className="mt-2 font text-black">
                About Us
              </a> */}
            </ListGroup>
          </div>
        </Col>

        <Col
          sm={12}
          md={4}
          className="socialLinks d-flex justify-content-center justify-content-md-end pl-0"
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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <circle cx="17" cy="7" r="1.5" fill="currentColor" fill-opacity="0">
      <animate
        fill="freeze"
        attributeName="fill-opacity"
        begin="1.3s"
        dur="0.15s"
        values="0;1"
      />
    </circle>
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path
        stroke-dasharray="72"
        stroke-dashoffset="72"
        d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.6s"
          values="72;0"
        />
      </path>
      <path
        stroke-dasharray="28"
        stroke-dashoffset="28"
        d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.7s"
          dur="0.6s"
          values="28;0"
        />
      </path>
    </g>
  </svg>
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
      <g clip-path="url(#akarIconsFacebookFill0)">
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M0 12.067C0 18.034 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067"
          clip-rule="evenodd"
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
    { name: "Terms and Conditions", url: "/tac" },
    {
      name: "Website and App Use, Privacy, and Cookies Policy",
      url: "/privacy-policy",
    },
    {
      name: "Anti-Slavery and Human Trafficking Statement",
      url: "/anti-slavery",
    },
    // { name: "Statement", url: "/statement" },
    // { name: "Cookies", url: "/cookies" },
  ],
  Company: [
    { name: "Twitter", icon: twitter, url: "#" },
    { name: "LinkedIn", icon: linkedIn, url: "#" },
    { name: "Instagram", icon: insta, url: "#" },
    { name: "Facebook", icon: facebook, url: "#" },
  ],
};

{
  /* <Col sm={12} md={4} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}> */
}

{
  /* ICONS */
}
{
  /* <div className="social-icons mx-auto mt-4 d-flex justify-content-center">
<i
  className="d-flex align-item-center"
  style={{ cursor: "pointer", color: "#757575" }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
    />
  </svg>
</i>
<i
  className="d-flex align-item-center"
  style={{ cursor: "pointer", color: "#757575" }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
    />
  </svg>
</i>
<i
  className="d-flex align-item-center"
  style={{ cursor: "pointer", color: "#757575" }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M23 9.71a8.5 8.5 0 0 0-.91-4.13a2.92 2.92 0 0 0-1.72-1A78 78 0 0 0 12 4.27a79 79 0 0 0-8.34.3a2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48 48 0 0 0 0 6.48a9.6 9.6 0 0 0 .3 2a3.14 3.14 0 0 0 .71 1.36a2.86 2.86 0 0 0 1.49.78a45 45 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.9 2.9 0 0 0 1.53-.78a2.5 2.5 0 0 0 .61-1a10.6 10.6 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54M9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08"
    />
  </svg>
</i>
</div> */
}
