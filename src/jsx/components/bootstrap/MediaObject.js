import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";

import avatar1 from "../../../images/avatar/1.jpg";
import avatar2 from "../../../images/avatar/2.jpg";
import avatar3 from "../../../images/avatar/3.jpg";
import avatar7 from "../../../images/avatar/7.jpg";
import avatar4 from "../../../images/avatar/4.jpg";
import avatar5 from "../../../images/avatar/5.jpg";
import avatar6 from "../../../images/avatar/6.jpg";
import avatar8 from "../../../images/avatar/8.jpg";

import { Row, Col, Card } from "react-bootstrap";

const UiMediaObject = () => {
   const heading = "Card heading";
   const text =
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.";
   const text2 =
      " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fuscecondimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.";
   const text3 =
      "Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";

   return (
      <Fragment>
         <PageTitle activeMenu="Card Object" motherMenu="Bootstrap" />
         <Row>
            <Col xl="6" lg="12">
               <Card>
                  <Card.Header>
                     <Card.Title>Card Object</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <div className="bootstrap-media">
                        <Card>
                           <img
                              className="mr-3 img-fluid "
                              width="60"
                              src={avatar1}
                              alt="DexignZone"
                           />
                           <Card.Body>
                              <h5 className="mt-0">{heading}</h5>
                              <p className="mb-0">{text}</p>
                           </Card.Body>
                        </Card>
                        <Card className="mt-4">
                           <img
                              className="mr-3 img-fluid "
                              width="60"
                              src={avatar7}
                              alt="DexignZone"
                           />
                           <Card.Body>
                              <h5 className="mt-0">{heading}</h5>
                              <p className="mb-0">{text}</p>
                           </Card.Body>
                        </Card>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col xl="6" lg="12">
               <Card>
                  <Card.Header>
                     <Card.Title>Nesting</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <div className="bootstrap-media">
                        <Card>
                           <img
                              className="mr-3 "
                              width="60"
                              src={avatar2}
                              alt="DexignZone"
                           />
                           <Card.Body>
                              <h5 className="mt-0">{heading}</h5>
                              <p className="mb-0">{text}</p>

                              <Card className="mt-4">
                                 <a className="pr-3" href="#">
                                    <img
                                       className=""
                                       width="60"
                                       src={avatar3}
                                       alt="DexignZone"
                                    />
                                 </a>
                                 <Card.Body>
                                    <h5 className="mt-0">{heading}</h5>
                                    <p className="mb-0">{text}</p>
                                 </Card.Body>
                              </Card>
                           </Card.Body>
                        </Card>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>

         <Row>
            <Col xl="6" lg="12">
               <Card>
                  <Card.Header>
                     <Card.Title>Align Top</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <div className="bootstrap-media">
                        <Card>
                           <img
                              className="align-self-start mr-3 "
                              width="60"
                              src={avatar4}
                              alt="DexignZone"
                           />
                           <Card.Body>
                              <h5 className="mt-0">Top-aligned media</h5>
                              <p>{text}</p>
                              <p className="mb-0">{text3}</p>
                           </Card.Body>
                        </Card>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col xl="6" lg="12">
               <Card>
                  <Card.Header>
                     <Card.Title>Align Center</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <div className="bootstrap-media">
                        <Card>
                           <img
                              className="align-self-center mr-3 "
                              width="60"
                              src={avatar5}
                              alt="DexignZone"
                           />
                           <Card.Body>
                              <h5 className="mt-0">Center-aligned media</h5>
                              <p>{text}</p>
                              <p className="mb-0">{text3}</p>
                           </Card.Body>
                        </Card>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>

         <Row>
            <Col xl="6" lg="12">
               <Card>
                  <Card.Header>
                     <Card.Title>Align Bottom</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <div className="bootstrap-media">
                        <Card>
                           <img
                              className="align-self-end mr-3 "
                              width="60"
                              src={avatar6}
                              alt="DexignZone"
                           />
                           <Card.Body>
                              <h5 className="mt-0">Bottom-aligned media</h5>
                              <p>{text}</p>
                              <p className="mb-0">{text3}</p>
                           </Card.Body>
                        </Card>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col xl="6" lg="12">
               <Card>
                  <Card.Header>
                     <Card.Title>Order</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <div className="bootstrap-media">
                        <Card>
                           <Card.Body>
                              <h5 className="mt-0">Card object</h5>
                              <p className="mb-0">{text}</p>
                           </Card.Body>
                           <img
                              className="ml-3 "
                              width="60"
                              src={avatar7}
                              alt="DexignZone"
                           />
                        </Card>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>

         <Row>
            <div className="col-lg-12">
               <Card>
                  <Card.Header>
                     <Card.Title>Card list</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <div className="bootstrap-media">
                        <ul className="list-unstyled">
                           <li className="media">
                              <img
                                 className="mr-3 "
                                 width="60"
                                 src={avatar8}
                                 alt="DexignZone"
                              />
                              <Card.Body>
                                 <h5 className="mt-0">
                                    List-based media object
                                 </h5>
                                 <p className="mb-0">{text2}</p>
                              </Card.Body>
                           </li>
                           <li className="media my-4">
                              <img
                                 className="mr-3 "
                                 width="60"
                                 src={avatar1}
                                 alt="DexignZone"
                              />
                              <Card.Body>
                                 <h5 className="mt-0">
                                    List-based media object
                                 </h5>
                                 <p className="mb-0">{text2}</p>
                              </Card.Body>
                           </li>
                           <li className="media">
                              <img
                                 className="mr-3 "
                                 width="60"
                                 src={avatar2}
                                 alt="DexignZone"
                              />
                              <Card.Body>
                                 <h5 className="mt-0">
                                    List-based media object
                                 </h5>
                                 <p className="mb-0">{text2}</p>
                              </Card.Body>
                           </li>
                        </ul>
                     </div>
                  </Card.Body>
               </Card>
            </div>
         </Row>
      </Fragment>
   );
};

export default UiMediaObject;
