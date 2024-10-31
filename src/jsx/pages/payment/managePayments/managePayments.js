import React, { Fragment, useState } from "react";
import { Row, Col, Card, Accordion } from "react-bootstrap";
import Nav from "../../../layouts/nav";

const ManagePayments = () => {
   const [activeDefault, setActiveDefault] = useState(0);
   const defaultAccordion = [
      {
         title: "Paypal",
         text:
            "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
         bg: "primary",
      },
      {
         title: "Stripe",
         text:
            "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",

         bg: "info",
      },
      {
         title: "Pay Stack",
         text:
            "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",

         bg: "success",
      },
   ];
   return (
      <Fragment>
         <Nav />
         <div className="content-body">
            <div className="container-fluid">
               <Row>
                  {/* <!-- Column starts --> */}
                  <Col xl="12">
                     <Card>
                        <Card.Header className="d-block card-header">
                           <Card.Title>
                              <div className="custom-control custom-radio mb-2">
                                 <input
                                    id="Live"
                                    name="paymentMethod"
                                    type="radio"
                                    className="custom-control-input"
                                    required
                                 />
                                 <label
                                    className="custom-control-label"
                                    htmlFor="Live"
                                 >
                                    Live
                                 </label>
                              </div>
                           </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body">
                           {/* <!-- Default accordion --> */}
                           <Accordion
                              className="accordion accordion-primary"
                              defaultActiveKey="0"
                           >
                              {defaultAccordion.map((d, i) => (
                                 <div className="accordion__item" key={i}>
                                    <Accordion.Toggle
                                       as={Card.Text}
                                       eventKey={`${i}`}
                                       className={`accordion__header rounded-lg ${activeDefault === i ? "" : "collapsed"
                                          }`}
                                       onClick={() =>
                                          setActiveDefault(
                                             activeDefault === i ? -1 : i
                                          )
                                       }
                                    >
                                       <span className="accordion__header--text">
                                          {d.title}
                                       </span>
                                       <span className="accordion__header--indicator"></span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={`${i}`}>
                                       <div className="accordion__body--text">
                                          {d.text}
                                       </div>
                                    </Accordion.Collapse>
                                 </div>
                              ))}
                           </Accordion>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>{" "}
               <Row>
                  {/* <!-- Column starts --> */}
                  <Col xl="12">
                     <Card>
                        <Card.Header className="d-block card-header">
                           <Card.Title>
                              <div className="custom-control custom-radio mb-2">
                                 <input
                                    id="Sandbox"
                                    name="paymentMethod"
                                    type="radio"
                                    className="custom-control-input"
                                    required
                                 />
                                 <label
                                    className="custom-control-label"
                                    htmlFor="Sandbox"
                                 >
                                    Sandbox
                                 </label>
                              </div>
                           </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body">
                           {/* <!-- Default accordion --> */}
                           <Accordion
                              className="accordion accordion-primary"
                              defaultActiveKey="0"
                           >
                              {defaultAccordion.map((d, i) => (
                                 <div className="accordion__item" key={i}>
                                    <Accordion.Toggle
                                       as={Card.Text}
                                       eventKey={`${i}`}
                                       className={`accordion__header rounded-lg ${activeDefault === i ? "" : "collapsed"
                                          }`}
                                       onClick={() =>
                                          setActiveDefault(
                                             activeDefault === i ? -1 : i
                                          )
                                       }
                                    >
                                       <span className="accordion__header--text">
                                          {d.title}
                                       </span>
                                       <span className="accordion__header--indicator"></span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={`${i}`}>
                                       <div className="accordion__body--text">
                                          {d.text}
                                       </div>
                                    </Accordion.Collapse>
                                 </div>
                              ))}
                           </Accordion>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>{" "}
            </div>
         </div>
      </Fragment>
   );
};

export default ManagePayments;
