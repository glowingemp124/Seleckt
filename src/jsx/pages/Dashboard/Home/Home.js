import React, { Fragment, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ToggleButton,
  ToggleButtonGroup,
  Form,
  Button,
} from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Nav from "../../../layouts/nav";
import { Dropdown } from "react-bootstrap";
import JobSlide from "./JobSlide";
import { FeaturedSlide } from "./FeaturedSlide";
import DualLine3 from "../../../CommonComponents/charts/chartJs/dualLine3";
import * as myConstants from "../../../utils/constant/constants";

// import companyLogo from "../../../images/avatar/1.jpg"
import companyLogo from "../../../../images/avatar/1.jpg";
import ReactDatePicker from "react-datepicker";

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [startDatePicker, setStartDatePicker] = useState(null);
  const [dueDate, setDueDate] = useState(null);


  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Filled Jobs",
        backgroundColor: "#00b094",
        data: [13, 22, 22, 13, 0, 22, 0],
      },
      {
        label: "Unfilled Jobs",
        backgroundColor: "#b0b0b0",
        data: [0, 0, 0, 0, 13, 0, 13],
      },
    ],
  };

  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Total Jobs",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderColor: "#1a1aff",
        data: [213, 120, 0, 213, 116, 0, 0],
        fill: false,
      },
    ],
  };
  return (
    <Fragment>
      <Nav />
      <div className="content-body">
        <div className="container-fluid">
          <h1 className="text-black">Welcome</h1>
          <h1 className="text-success">Hey Alex</h1>
          <div className="col-xl-12 my-5">
            {/* <div className="d-sm-flex align-items-center mb-3 mt-sm-0 mt-2">
                <h4 className="text-black fs-20 mr-auto">Featured Companies</h4>
                <Link
                  to="/employers"
                  className="btn btn-primary light btn-rounded"
                >
                  View More
                  <svg
                    className="ml-3"
                    width="24"
                    height="14"
                    viewBox="0 0 24 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.5607 5.93941L18.2461 0.62482C17.9532 0.331898 17.5693 0.185461 17.1854 0.185461C16.8015 0.185461 16.4176 0.331898 16.1247 0.62482C15.539 1.21062 15.539 2.16035 16.1247 2.74615L18.8787 5.50005L1.5 5.50005C0.671578 5.50005 0 6.17163 0 7.00005C0 7.82848 0.671578 8.50005 1.5 8.50005L18.8787 8.50005L16.1247 11.254C15.539 11.8398 15.539 12.7895 16.1247 13.3753C16.7106 13.9611 17.6602 13.9611 18.2461 13.3753L23.5607 8.06069C24.1464 7.47495 24.1464 6.52516 23.5607 5.93941Z"
                      fill="#40189D"
                    />
                  </svg>
                </Link>
              </div> */}
            <FeaturedSlide />
          </div>
          <div className="row">
            <Container fluid>
              <Row>
                  <Col lg={6}>
                    <Card>
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <Card.Title><b>This Week</b></Card.Title>
                            <Card.Subtitle >
                              <h1 className="mb-2 text-success my-3">Hiring Status</h1>
                            </Card.Subtitle>
                          </div>
                          <Form className="d-flex">
                            <div className="date-picker-container ">
                              <ReactDatePicker
                                selected={startDatePicker}
                                onChange={(date) => setStartDatePicker(date)}
                                className="form-control rounded-3 w-75 border-dark float-end"
                                dateFormat="dd/MM/yyyy"
                                placeholderText="From"
                              />
                              {/* <i className="fa-solid fa-calendar-minus fa-lg position-absolute calendar-icon p-3 mt-3" style={{ color: '#00B094' }} /> */}
                            </div>
                            <div className="date-picker-container mx-2">
                              <ReactDatePicker
                                selected={dueDate}
                                onChange={(date) => setDueDate(date)}
                                className="form-control rounded-3 w-75 border-dark "
                                dateFormat="dd/MM/yyyy"
                                placeholderText="To"
                              />
                              {/* <i className="fa-solid fa-calendar-minus fa-lg position-absolute calendar-icon p-3 mt-3" style={{ color: '#00B094' }} /> */}
                            </div>
                          </Form>
                        </div>
                        <Bar data={barData} />
                      </Card.Body>
                    </Card>
                  </Col>
                <Col lg={6}>
                  <Card>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <Card.Title><b>This Week</b></Card.Title>
                          <Card.Subtitle >
                            <h1 className="mb-2 text-success my-3">Job Starting</h1>
                          </Card.Subtitle>
                        </div>
                        <div>
                          <Form className="d-flex justify-content-end">
                            <div className="">
                              <ReactDatePicker
                                selected={startDatePicker}
                                onChange={(date) => setStartDatePicker(date)}
                                className="form-control rounded-3 w-75 border-dark float-end"
                                dateFormat="dd/MM/yyyy"
                                placeholderText="From"
                              />
                              {/* <i className="fa-solid fa-calendar-minus fa-lg position-absolute calendar-icon p-3 mt-3" style={{ color: '#00B094' }} /> */}
                            </div>
                            <div className=" mx-2">
                              <ReactDatePicker
                                selected={dueDate}
                                onChange={(date) => setDueDate(date)}
                                className="form-control rounded-3  w-75 border-dark "
                                dateFormat="dd/MM/yyyy"
                                placeholderText="To"
                              />
                              {/* <i className="fa-solid fa-calendar-minus fa-lg position-absolute calendar-icon p-3 mt-3" style={{ color: '#00B094' }} /> */}
                            </div>
                          </Form>
                          {/* <Form inline>
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              customInput={
                                <Button variant="outline-primary">
                                  Select Date
                                </Button>
                              }
                            />
                          </Form> */}
                        </div>
                      </div>
                      <Line data={lineData} />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>

            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card w-100">
                    <div className="card-header d-flex flex-wrap justify-content-between align-items-center">
                      <h4 className="fs-20 text-black mr-3 mb-3 mb-md-0">
                        <b>Job Stats</b>
                      </h4>
                      <div className="d-flex flex-wrap align-items-center">
                        {["No Shows", "Posted", "Ongoing", "Cancel by Worker", "Cancel by Employer", "Hired", "Complete"].map((label, index) => (
                          <div key={index} className="custom-control custom-switch toggle-switch text-right mr-3 mb-2">
                            <input type="checkbox" className="custom-control-input" id={`customSwitch${index + 1}`} />
                            <label className="custom-control-label" htmlFor={`customSwitch${index + 1}`}>
                              {label}
                            </label>
                          </div>
                        ))}
                        <Form className="d-flex align-items-center ml-3 mb-2">

                          <ReactDatePicker
                            selected={startDatePicker}
                            onChange={(date) => setStartDatePicker(date)}
                            className="form-control rounded-3 border-dark bg-transparent mx-4 date-picker-custom"
                            dateFormat="dd/MM/yyyy"
                            placeholderText="From"
                          />
                          {/* <i class="fa-solid fa-chevron-down"></i> */}

                          <ReactDatePicker
                            selected={dueDate}
                            onChange={(date) => setDueDate(date)}
                            className="form-control rounded-3 border-dark bg-transparent date-picker-custom "
                            dateFormat="dd/MM/yyyy"
                            placeholderText="To"
                          />
                          {/* <i class="fa-solid fa-chevron-down"></i> */}

                        </Form>
                      </div>
                    </div>
                    <div className="card-body">
                      {/* DualLine3 is a two line chart */}
                      <>
                        <DualLine3 />
                      </>
                      <div className="d-flex flex-wrap align-items-center justify-content-center mt-3">
                        {[
                          { label: "No Shows", color: "#20127a" },
                          { label: "Posted", color: "#67088a" },
                          { label: "Hired", color: "#00b094" },
                          { label: "Complete", color: "#ffe711" },
                          { label: "Ongoing", color: "#817828" },
                          { label: "Cancel by Worker", color: "#ff0000" },
                          { label: "Cancel by Employer", color: "#000000" }
                        ].map((item, index) => (
                          <div key={index} className="fs-14 text-black mr-4 mb-2 d-flex align-items-center">
                            <svg className="mr-2" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="19" height="19" rx="9.5" fill={item.color} />
                            </svg>
                            {item.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Uncomment the following if needed */}
                {/* <div className="col-12">
                  <h4 className="fs-20 text-black mb-sm-4 mt-sm-0 mt-2 mb-2">
                    Featured Jobs
                  </h4>
                  <JobSlide />
                </div> */}
              </div>
            </div>
            <h1 className="my-5">
              <b>Top 10 Rated Workers</b>
            </h1>
            <div className="row">
              <div className="col-xl-12">
                <div className="table-responsive">
                  <div
                    id="example5_wrapper"
                    className="dataTables_wrapper no-footer"
                  >
                    <table
                      className="table display mb-4 dataTablesCard card-table dataTable no-footer"
                      id="example5"
                      role="grid"
                      aria-describedby="example5_info"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="example5"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="ID: activate to sort column ascending"
                            style={{
                              width: 150,
                              backgroundColor: "#00B094",
                              color: "white",
                            }}
                          >
                            Worker ID
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="example5"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Company: activate to sort column ascending"
                            style={{
                              width: 200,
                              backgroundColor: "#00B094",
                              color: "white",
                            }}
                          >
                            Image
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="example5"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Type: activate to sort column ascending"
                            style={{
                              width: 187,
                              backgroundColor: "#00B094",
                              color: "white",
                            }}
                          >
                            Name
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="example5"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Postition: activate to sort column ascending"
                            style={{
                              width: 189,
                              backgroundColor: "#00B094",
                              color: "white",
                            }}
                          >
                            Status
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="example5"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Status: activate to sort column ascending"
                            style={{
                              width: 164,
                              backgroundColor: "#00B094",
                              color: "white",
                            }}
                          >
                            Approval
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="example5"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Status: activate to sort column ascending"
                            style={{
                              width: 164,
                              backgroundColor: "#00B094",
                              color: "white",
                            }}
                          >
                            Employer
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="example5"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Status: activate to sort column ascending"
                            style={{
                              width: 164,
                              backgroundColor: "#00B094",
                              color: "white",
                            }}
                          >
                            Date of Joining
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="example5"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Status: activate to sort column ascending"
                            style={{
                              width: 164,
                              backgroundColor: "#00B094",
                              color: "white",
                            }}
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd">
                          <td className="text-success fw-bold">1</td>
                          <td>
                            <img
                              src={companyLogo}
                              alt=""
                              width="50"
                              className="rounded-circle"
                            />
                          </td>
                          <td>
                            <div className="media">
                              <div className="media-body text-nowrap">
                                <h6 className="text-black font-w600 fs-16 mb-0">
                                  John
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center text-center">
                              <a
                                className="btn btn-rounded btn-success "
                                href="#"
                              >
                                Active
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center text-center">
                              <a className="btn btn-rounded btn-info " href="#">
                                Pending
                              </a>
                            </div>
                          </td>
                          <td>Alex hales</td>
                          <td>April 19th, 2024.</td>
                          <td>
                            <button>
                              <i
                                className="fa fa-eye fa-2x mx-3"
                                style={{ color: "#00B094" }}
                              />
                            </button>
                          </td>
                        </tr>

                        <tr role="row" className="odd">
                          <td className="text-success fw-bold">2</td>
                          <td>
                            <img
                              src={companyLogo}
                              alt=""
                              width="50"
                              className="rounded-circle"
                            />
                          </td>
                          <td>
                            <div className="media">
                              <div className="media-body text-nowrap">
                                <h6 className="text-black font-w600 fs-16 mb-0">
                                  John
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center text-center">
                              <a
                                className="btn btn-rounded btn-success "
                                href="#"
                              >
                                Active
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center text-center">
                              <a className="btn btn-rounded btn-info " href="#">
                                Pending
                              </a>
                            </div>
                          </td>
                          <td>Alex hales</td>
                          <td>April 19th, 2024.</td>
                          <td>
                            <button>
                              <i
                                className="fa fa-eye fa-2x mx-3"
                                style={{ color: "#00B094" }}
                              />
                            </button>
                          </td>
                        </tr>

                        <tr role="row" className="odd">
                          <td className="text-success fw-bold">3</td>
                          <td>
                            <img
                              src={companyLogo}
                              alt=""
                              width="50"
                              className="rounded-circle"
                            />
                          </td>
                          <td>
                            <div className="media">
                              <div className="media-body text-nowrap">
                                <h6 className="text-black font-w600 fs-16 mb-0">
                                  John
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center text-center">
                              <a
                                className="btn btn-rounded btn-success "
                                href="#"
                              >
                                Active
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center text-center">
                              <a className="btn btn-rounded btn-info " href="#">
                                Pending
                              </a>
                            </div>
                          </td>
                          <td>Alex hales</td>
                          <td>April 19th, 2024.</td>
                          <td>
                            <button>
                              <i
                                className="fa fa-eye fa-2x mx-3"
                                style={{ color: "#00B094" }}
                              />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
