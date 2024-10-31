import React from "react";
import aboutImg from "../assets/img/two young men talking about work.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import "../../../pages/landing/assets/css/style.css";

export const Contact = (props) => {
  return (
    <div id="contact" className="text-white">
      <Container>
        <Row>

          <Col xs={12} md={6} className="d-flex flex-column align-items-start">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p
                className="font text-white m-0"
                style={{ fontSize: "3.25rem", fontWeight: [700] }}
              >
                Get in touch
              </p>
              <p
                className="font text-white m-0 about_desc"
              // style={{ fontSize: "1rem", fontWeight: [300] }}
              >
                Please fill out the form below to send us an email and we will get
                back to you as soon as possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <form name="sentMessage" validate="true">
                <div className="row font">
                  <div className="col-md-6  pr-sm-1 ">
                    <div className="form-group">
                      <input
                        style={{ borderRadius: ".3rem" }}
                        type="text"
                        id="name"
                        name="name"
                        className="form-control contactSec_fields"
                        placeholder="Name"
                        required
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6  pl-sm-1 ">
                    <div className="form-group">
                      <input
                        style={{ borderRadius: ".3rem" }}
                        type="email"
                        id="email"
                        name="email"
                        className="form-control contactSec_fields"
                        placeholder="Email"
                        required
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    style={{ width: "100%", borderRadius: ".3rem" }}
                    name="message"
                    id="message"
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>

                <button type="submit" className="font btn btn-custom btn-md">
                  Send Message
                </button>
              </form>
            </motion.div>

          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }} // Starts off invisible and below the viewport
              whileInView={{ opacity: 1, y: 0 }} // Animates to visible and moves up
              viewport={{ once: true, amount: 0.3 }} // Triggers once, when 20% of the element is in view
              transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
            >
              <div className="">
                <p
                  className="font text-white m-0"
                  style={{ fontSize: "2rem", fontWeight: [100] }}
                >
                  Contact Info
                </p>
                <div>
                  <p>
                    <span className="font" style={{ fontWeight: [500], fontSize: "1rem" }}>
                      <i className="fa fa-map-marker"></i> Address: {" "}
                    </span>
                    {props.data ? props.data.address : "loading"}
                  </p>

                  <p>
                    <span className="font" style={{ fontWeight: [500], fontSize: "1rem" }}>
                      <i className="fa fa-phone"></i> Phone 1: {" "}
                    </span>{" "}
                    {props.data ? props.data.phone : "loading"}
                  </p>

                  <p>
                    <span className="font" style={{ fontWeight: [500], fontSize: "1rem" }}>
                      <i className="fa fa-phone"></i> Phone 2: {" "}
                    </span>{" "}
                    {props.data ? props.data.phone2 : "loading"}
                  </p>

                  <p>
                    <span className="font" style={{ fontWeight: [500], fontSize: "1rem" }}>
                      <i className="fa fa-envelope-o"></i> Email: {" "}
                    </span>{" "}
                    {props.data ? props.data.email : "loading"}
                  </p>
                </div>
              </div>
            </motion.div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

// import { useState } from "react";
// import React from "react";

// const initialState = {
//   name: "",
//   email: "",
//   message: "",
// };
// export const Contact = (props) => {
//   const [{ name, email, message }, setState] = useState(initialState);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <div className="mb-4">
//       <div id="contact">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-8">
//               <div className="row">
//                 <div className="section-title mb-5">
//                   <h2>Get In Touch</h2>
//                   <p>
//                     Please fill out the form below to send us an email and we will
//                     get back to you as soon as possible.
//                   </p>
//                 </div>
//                 <form name="sentMessage" validate onSubmit={handleSubmit}>
//                   <div className="row">
//                     <div className="col-md-6">
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           id="name"
//                           name="name"
//                           className="form-control"
//                           placeholder="Name"
//                           required
//                           onChange={handleChange}
//                         />
//                         <p className="help-block text-danger"></p>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="form-group">
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           className="form-control"
//                           placeholder="Email"
//                           required
//                           onChange={handleChange}
//                         />
//                         <p className="help-block text-danger"></p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <textarea
//                       name="message"
//                       id="message"
//                       className="form-control"
//                       rows="4"
//                       placeholder="Message"
//                       required
//                       onChange={handleChange}
//                     ></textarea>
//                     <p className="help-block text-danger"></p>
//                   </div>
//                   <div id="success"></div>
//                   <button type="submit" className="btn btn-custom btn-lg">
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>

//             <div className="col-md-4 px-5 col-md-offset-1 contact-info">
//               <div className="contact-item">
//                 <h3 className="fs-2 fw-semibold">Contact Info</h3>
//                 <p style={{fontSize:"17px"}}>
//                   <span>
//                     <i className="fa fa-map-marker"></i> Address
//                   </span>
//                   {props.data ? props.data.address : "loading"}
//                 </p>
//               </div>
//               <div className="contact-item">
//                 <p>
//                   <span>
//                     <i className="fa fa-phone"></i> Phone
//                   </span>{" "}
//                   {props.data ? props.data.phone : "loading"}
//                 </p>
//               </div>
//               <div className="contact-item">
//                 <p>
//                   <span>
//                     <i className="fa fa-envelope-o"></i> Email
//                   </span>{" "}
//                   {props.data ? props.data.email : "loading"}
//                 </p>
//               </div>
//             </div>

//           </div>
//           <div className="col-md-12">
//             <div className="row">
//               <div className="social">
//                 <ul>
//                   <li>
//                     <a href={props.data ? props.data.facebook : "/"}>
//                       <i className="fa fa-facebook"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={props.data ? props.data.twitter : "/"}>
//                       <i className="fa fa-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={props.data ? props.data.youtube : "/"}>
//                       <i className="fa fa-youtube"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
