import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Button, Modal } from "react-bootstrap";
import Nav from "../../../layouts/nav";
import ReactPaginate from 'react-paginate';

const InternalStaff = (workers) => {
   const [pageNumber, setPageNumber] = useState(0);
   const internal_staff = workers.location.state;
   const userPerPage = 10;
   const pageVisted = pageNumber * userPerPage;
   const pageCount = Math.ceil(internal_staff.length / userPerPage);
   const [modalWithTooltip, setModalWithTooltip] = useState(false);
   const getInternalStaff = () => {

      return internal_staff
         .slice(pageVisted, pageVisted + userPerPage)
         .map((internal_staff, index) => {
            return (
               <tr role="row" className="odd" key={internal_staff._id}>
                  <td className="sorting_1">
                     <div className="checkbox mr-0 align-self-center">
                        <div className="custom-control custom-checkbox ">
                           <input
                              type="checkbox"
                              className="custom-control-input"
                              id="check1"
                              required
                           />
                           <label
                              className="custom-control-label"
                              htmlFor="check1"
                           />
                        </div>
                     </div>
                  </td>
                  <td>{index + 1}</td>
                  <td>{internal_staff.name}</td>
                  <td>
                     <div className="d-flex">
                        <a className="contact-icon mr-3" href={"tel:" + internal_staff.mobile}>
                           <i
                              className="fa fa-phone"
                              aria-hidden="true"
                           />
                        </a>
                        <a className="contact-icon" href={"mailto:" + internal_staff.email}>
                           <i className="las la-envelope" />
                        </a>
                     </div>
                  </td>
                  <td >
                     <div className="d-flex align-items-center">
                        <button
                           className={internal_staff.status == "approved" ? "btn btn-rounded  btn-success mr-3 ml-auto" : "btn btn-rounded  btn-danger mr-3 ml-auto"}
                        >
                           {internal_staff.status == "approved" ? "Approved" : "Pending"}
                        </button>

                        <Dropdown className="dropdown custom-dropdown mb-0">
                           <Dropdown.Toggle
                              variant=""
                              className="icon-false"
                              data-toggle="dropdown"
                           >
                              <svg
                                 width={24}
                                 height={24}
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                    stroke="#2E2E2E"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 />
                                 <path
                                    d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                    stroke="#2E2E2E"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 />
                                 <path
                                    d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                    stroke="#2E2E2E"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 />
                              </svg>
                           </Dropdown.Toggle>
                           <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                              <Dropdown.Item
                                 className="dropdown-item"
                              >
                                 Details
                              </Dropdown.Item>
                              <Dropdown.Item
                                 className="dropdown-item text-danger"
                                 to="/application"
                              >
                                 Cancel
                              </Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                     </div>
                  </td>
               </tr>
            )
         })
   }

   const changePage = ({ selected }) => {
      setPageNumber(selected)
   }

   return (
      <>
         <Nav />
         <div className="content-body">
            <div className="container-fluid">
               <div className="h-80">
                  <div className="d-flex flex-wrap mb-4 row">
                     <div className="col-xl-3 col-lg-4 mb-2">
                        <h6 className="text-black fs-16 font-w600 mb-1">
                           Showing {(pageVisted + userPerPage > internal_staff.length ? internal_staff.length : pageVisted + userPerPage) - pageVisted} Internal Staff
                        </h6>
                     </div>
                     <div className="col-xl-9 col-lg-8 d-flex flex-wrap">
                        <div className="mr-auto">
                           <Link
                              to="/application"
                              className="btn btn-primary btn-rounded mr-2 mb-2"
                           >
                              ALL
                           </Link>
                           <Link
                              to="/application"
                              className="btn btn-primary btn-rounded mr-2 light mb-2"
                           >
                              Pending
                           </Link>
                           <Link
                              to="/application"
                              className="btn btn-primary btn-rounded mr-2 light mb-2"
                           >
                              On-Hold
                           </Link>
                           <Link
                              to="/application"
                              className="btn btn-primary btn-rounded mr-2 light mb-2"
                           >
                              Candidate
                           </Link>
                        </div>
                        <Dropdown className="dropdown custom-dropdown mb-0 mr-4 mt-3 mt-sm-0 mb-2">
                           <Dropdown.Toggle
                              variant=""
                              className="btn border border-primary text-black btn-rounded"
                              role="button"
                              data-toggle="dropdown"
                              aria-expanded="false"
                           >
                              <svg
                                 className="mr-2 scale5"
                                 width="14"
                                 height="14"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M10.2932 16.293L8.00016 18.5859V3C8.00016 2.73478 7.89481 2.48043 7.70727 2.29289C7.51973 2.10536 7.26538 2 7.00016 2C6.73495 2 6.48059 2.10536 6.29306 2.29289C6.10552 2.48043 6.00016 2.73478 6.00016 3V18.5859L3.70716 16.293C3.51856 16.1108 3.26596 16.01 3.00376 16.0123C2.74156 16.0146 2.49075 16.1198 2.30534 16.3052C2.11994 16.4906 2.01477 16.7414 2.01249 17.0036C2.01021 17.2658 2.111 17.5184 2.29316 17.707L6.29316 21.707C6.48086 21.8942 6.73513 21.9993 7.00021 21.9993C7.2653 21.9993 7.51956 21.8942 7.70726 21.707L11.7073 17.707C11.8901 17.5185 11.9914 17.2657 11.9894 17.0031C11.9874 16.7405 11.8822 16.4893 11.6965 16.3036C11.5109 16.118 11.2596 16.0128 10.997 16.0108C10.7345 16.0088 10.4816 16.1102 10.2932 16.293Z"
                                    fill="#40189D"
                                 />
                                 <path
                                    d="M11.0002 6H21.0002C21.2655 6 21.5198 5.89464 21.7074 5.7071C21.8949 5.51957 22.0002 5.26521 22.0002 5C22.0002 4.73478 21.8949 4.48043 21.7074 4.29289C21.5198 4.10536 21.2655 4 21.0002 4H11.0002C10.735 4 10.4807 4.10536 10.2931 4.29289C10.1056 4.48043 10.0002 4.73478 10.0002 5C10.0002 5.26521 10.1056 5.51957 10.2931 5.7071C10.4807 5.89464 10.735 6 11.0002 6Z"
                                    fill="#40189D"
                                 />
                                 <path
                                    d="M21.0002 8H11.0002C10.735 8 10.4807 8.10536 10.2931 8.29289C10.1056 8.48043 10.0002 8.73478 10.0002 9C10.0002 9.26521 10.1056 9.51957 10.2931 9.7071C10.4807 9.89464 10.735 10 11.0002 10H21.0002C21.2655 10 21.5198 9.89464 21.7074 9.7071C21.8949 9.51957 22.0002 9.26521 22.0002 9C22.0002 8.73478 21.8949 8.48043 21.7074 8.29289C21.5198 8.10536 21.2655 8 21.0002 8Z"
                                    fill="#40189D"
                                 />
                                 <path
                                    d="M18.0002 12H11.0002C10.735 12 10.4807 12.1054 10.2931 12.2929C10.1056 12.4804 10.0002 12.7348 10.0002 13C10.0002 13.2652 10.1056 13.5196 10.2931 13.7071C10.4807 13.8947 10.735 14 11.0002 14H18.0002C18.2655 14 18.5198 13.8947 18.7074 13.7071C18.8949 13.5196 19.0002 13.2652 19.0002 13C19.0002 12.7348 18.8949 12.4804 18.7074 12.2929C18.5198 12.1054 18.2655 12 18.0002 12Z"
                                    fill="#40189D"
                                 />
                              </svg>
                              Newest
                           </Dropdown.Toggle>
                           <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                              <Dropdown.Item className="dropdown-item" to="/application">
                                 Edit
                              </Dropdown.Item>
                              <Dropdown.Item
                                 className="dropdown-item text-danger"
                                 to="/application"
                              >
                                 Delete
                              </Dropdown.Item>
                           </Dropdown.Menu>
                           <Button
                              variant="primary"
                              className="btn btn-rounded mb-2 ml-2"
                              onClick={() => setModalWithTooltip(true)}
                           >
                              Add Staff
                           </Button>
                        </Dropdown>
                     </div>
                  </div>

                  {/* <!-- Modal --> */}
                  <Modal className="fade mt-5" show={modalWithTooltip}>
                     <Modal.Header>
                        <Modal.Title>Add Internal Staff</Modal.Title>
                        <Button
                           variant=""
                           className="close"
                           onClick={() => setModalWithTooltip(false)}
                        >
                           <span>&times;</span>
                        </Button>
                     </Modal.Header>
                     <Modal.Body>
                        <div>
                           <input
                              className="form-control input-rounded mr-auto mb-md-0 mb-3"
                              type="text"
                              placeholder="Enter Name"
                           />
                        </div>
                        <div>
                           <input
                              className="form-control input-rounded mr-auto mb-md-0 mb-3"
                              type="text"
                              placeholder="Enter Email"
                           />
                        </div>
                        <div>
                           <input
                              className="form-control input-rounded mr-auto mb-md-0 mb-3"
                              type="text"
                              placeholder="Enter Phone"
                           />
                        </div>
                     </Modal.Body>
                     <Modal.Footer>
                        <Button
                           variant="danger light"
                           onClick={() => setModalWithTooltip(false)}
                        >
                           Close
                        </Button>
                        <Button variant="primary">Save changes</Button>
                     </Modal.Footer>
                  </Modal>

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
                                          className="sorting_asc"
                                          tabIndex={0}
                                          aria-controls="example5"
                                          rowSpan={1}
                                          colSpan={1}
                                          aria-sort="ascending"
                                          aria-label="activate to sort column descending"
                                          style={{ width: 24 }}
                                       >
                                          <div className="checkbox mr-0 align-self-center">
                                             <div className="custom-control custom-checkbox ">
                                                <input
                                                   type="checkbox"
                                                   className="custom-control-input"
                                                   id="checkAll"
                                                   required
                                                />
                                                <label
                                                   className="custom-control-label"
                                                   htmlFor="checkAll"
                                                />
                                             </div>
                                          </div>
                                       </th>
                                       <th
                                          className="sorting"
                                          tabIndex={0}
                                          aria-controls="example5"
                                          rowSpan={1}
                                          colSpan={1}
                                          aria-label="ID: activate to sort column ascending"
                                          style={{ width: 50 }}
                                       >
                                          ID
                                       </th>
                                       <th
                                          className="sorting"
                                          tabIndex={0}
                                          aria-controls="example5"
                                          rowSpan={1}
                                          colSpan={1}
                                          aria-label="Company: activate to sort column ascending"
                                          style={{ width: 216 }}
                                       >
                                          Name
                                       </th>
                                       <th
                                          className="sorting"
                                          tabIndex={0}
                                          aria-controls="example5"
                                          rowSpan={1}
                                          colSpan={1}
                                          aria-label="Type: activate to sort column ascending"
                                          style={{ width: 87 }}
                                       >
                                          Contact
                                       </th>
                                       <th
                                          className="sorting"
                                          tabIndex={0}
                                          aria-controls="example5"
                                          rowSpan={1}
                                          colSpan={1}
                                          aria-label="Status: activate to sort column ascending"
                                          style={{ width: 164 }}
                                       >
                                          Status
                                       </th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    {getInternalStaff()}
                                 </tbody>
                              </table>
                              <div className="d-flex align-items-center justify-content-between pb-2">
                                 <div
                                    className="dataTables_info"
                                    id="example5_info"
                                    role="status"
                                    aria-live="polite"
                                 >
                                    Showing {pageVisted + 1} to {pageVisted + userPerPage > internal_staff.length ? internal_staff.length : pageVisted + userPerPage} of {internal_staff.length} entries
                                 </div>
                                 <div
                                    className="dataTables_paginate paging_simple_numbers"
                                    id="example5_paginate"
                                 >
                                    <ReactPaginate
                                       previousLabel={"Previous"}
                                       nextLabel={"Next"}
                                       pageCount={pageCount}
                                       onPageChange={changePage}
                                       containerClassName={"paginationBttns"}
                                       previousLinkClassName={"paginate_button previous previousBttn"}
                                       nextLinkClassName={"paginate_button next nextBttn"}
                                       pageLinkClassName={"paginate_button mr-1 ml-1"}
                                       disabledClassName={"paginationDisabled"}
                                       activeClassName={"paginationActive"}
                                    />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default InternalStaff;
