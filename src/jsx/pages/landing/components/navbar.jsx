import { useState, useEffect } from "react";
import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { HashLink } from 'react-router-hash-link';
import "../../../pages/landing/assets/css/style.css";
import Logo1 from "../assets/img/Logo1.png";
import Logo2 from "../assets/img/Logo2.png";

export const MainNavbar = (props) => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 769);

  const navLinkStyle = {
    fontSize: "16px",
    marginRight: "50px",
    textDecoration: "none",
    color: "#000",
    textTransform: "uppercase",
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className={`main_navbar navbar navbar-expand-lg ${navbarBackground || isSmallScreen ? "bg-teal" : "bg-purple"}`}
      style={{ maxWidth: "100%" }}
    >
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => setExpanded(expanded ? false : true)}
      >
        <span
          className="navbar-toggler-icon"
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`,
          }}
        />
      </Navbar.Toggle>
      <Navbar.Collapse>
        <Nav
          className="me-auto"
          style={{
            width: "100%",
            display: "flex",
            columnGap: "1rem",
            justifyContent: "center",
          }}
        >
          <Nav.Link
            as={HashLink}
            smooth
            className={`font ${navbarBackground || isSmallScreen ? "navbar_button" : "navbar_button_bg"}`}
            to="/#employer"
            onClick={() => setExpanded(false)}
          >
            Employer
          </Nav.Link>
          <Nav.Link
            as={HashLink}
            smooth
            className={`font ${navbarBackground || isSmallScreen ? "navbar_button" : "navbar_button_bg"}`}
            to="/#worker"
            onClick={() => setExpanded(false)}
          >
            Worker
          </Nav.Link>

          <Dropdown className="font">
            <Dropdown.Toggle className={`px-4 py-2 navbar_dropdown ${navbarBackground || isSmallScreen ? "navbar_button" : "navbar_button_bg"}`}
              id="dropdown-basic"
              style={{ color: "white", fontWeight: 500, fontSize: "20px", backgroundColor: "transparent" }}
            >
              How it works
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown_menu py-0">
              <Dropdown.Item
                as={HashLink}
                smooth
                className={`font ${navbarBackground ? "dropdown_menu_child_with_bg" : "dropdown_menu_child"}  py-2`}
                to="/#mockUpsSectionEmployer"
                onClick={() => setExpanded(false)}
              >
                Employer
              </Dropdown.Item>

              <Dropdown.Item
                as={HashLink}
                smooth
                className={`font ${navbarBackground ? "dropdown_menu_child_with_bg" : "dropdown_menu_child"}  py-2`}
                to="/#mockUpsSectionWorker"
                onClick={() => setExpanded(false)}
              >
                Worker
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link
            as={HashLink}
            smooth
            className={`font ${navbarBackground || isSmallScreen ? "navbar_button" : "navbar_button_bg"}`}
            to="/#industries"
            onClick={() => setExpanded(false)}
          >
            Industries
          </Nav.Link>
          
          <Nav.Link
            as={HashLink}
            smooth
            className={`font ${navbarBackground || isSmallScreen ? "navbar_button" : "navbar_button_bg"}`}
            to="/#about"
            onClick={() => setExpanded(false)}
          >
            About Us
          </Nav.Link>

          <Nav.Link
            as={HashLink}
            smooth
            className={`font ${navbarBackground || isSmallScreen ? "navbar_button" : "navbar_button_bg"}`}
            to="/#contact"
            onClick={() => setExpanded(false)}
          >
            Contact Us
          </Nav.Link>
          
          <Nav.Link
            as={HashLink}
            smooth
            className={`font ${navbarBackground || isSmallScreen ? "navbar_button" : "navbar_button_bg"}`}
            to="/#faq"
            onClick={() => setExpanded(false)}
          >
            FAQ
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
