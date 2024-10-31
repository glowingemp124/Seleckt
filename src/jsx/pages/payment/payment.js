import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import Nav from "../../layouts/nav";

const Payment = () => {
   return (
      <>
         <Nav />
         <div className="content-body">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-xl-3 col-xxl-6 col-sm-6">
                     <div className="card bg-danger">
                        <div className="card-body">
                           <div className="media align-items-center">
                              <span className="p-3 mr-3 border border-white rounded">
                                 <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 36 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M30.25 5.75H28.5V2.25C28.5 1.78587 28.3156 1.34075 27.9874 1.01256C27.6593 0.684374 27.2141 0.5 26.75 0.5C26.2859 0.5 25.8407 0.684374 25.5126 1.01256C25.1844 1.34075 25 1.78587 25 2.25V5.75H11V2.25C11 1.78587 10.8156 1.34075 10.4874 1.01256C10.1592 0.684374 9.71413 0.5 9.25 0.5C8.78587 0.5 8.34075 0.684374 8.01256 1.01256C7.68437 1.34075 7.5 1.78587 7.5 2.25V5.75H5.75C4.35761 5.75 3.02226 6.30312 2.03769 7.28769C1.05312 8.27226 0.5 9.60761 0.5 11V12.75H35.5V11C35.5 9.60761 34.9469 8.27226 33.9623 7.28769C32.9777 6.30312 31.6424 5.75 30.25 5.75Z"
                                       fill="white"
                                    />
                                    <path
                                       d="M0.5 30.25C0.5 31.6424 1.05312 32.9777 2.03769 33.9623C3.02226 34.9469 4.35761 35.5 5.75 35.5H30.25C31.6424 35.5 32.9777 34.9469 33.9623 33.9623C34.9469 32.9777 35.5 31.6424 35.5 30.25V16.25H0.5V30.25Z"
                                       fill="white"
                                    />
                                 </svg>
                              </span>
                              <div className="media-body text-right">
                                 <p className="fs-18 text-white mb-2">
                                    Total Employees
                                 </p>
                                 <span className="fs-48 text-white font-w600">
                                    8600£
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-xxl-6 col-sm-6">
                     <div className="card bg-info">
                        <div className="card-body">
                           <div className="media align-items-center">
                              <span className="p-3 mr-3 border border-white rounded">
                                 <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M38.4998 10.4995H35.0002V38.4999H38.4998C40.4245 38.4999 42 36.9238 42 34.9992V13.9992C42 12.075 40.4245 10.4995 38.4998 10.4995Z"
                                       fill="white"
                                    />
                                    <path
                                       d="M27.9998 10.4995V6.9998C27.9998 5.07515 26.4243 3.49963 24.5001 3.49963H17.4998C15.5756 3.49963 14.0001 5.07515 14.0001 6.9998V10.4995H10.5V38.4998H31.5V10.4995H27.9998ZM24.5001 10.4995H17.4998V6.99929H24.5001V10.4995Z"
                                       fill="white"
                                    />
                                    <path
                                       d="M3.50017 10.4995C1.57551 10.4995 0 12.075 0 13.9997V34.9997C0 36.9243 1.57551 38.5004 3.50017 38.5004H6.99983V10.4995H3.50017Z"
                                       fill="white"
                                    />
                                 </svg>
                              </span>
                              <div className="media-body text-right">
                                 <p className="fs-18 text-white mb-2">
                                    Total Industries
                                 </p>
                                 <span className="fs-48 text-white font-w600">
                                    750£
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-xxl-6 col-sm-6">
                     <div className="card bg-success">
                        <div className="card-body">
                           <div className="media align-items-center">
                              <span className="p-3 mr-3 border border-white rounded">
                                 <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       fillRule="evenodd"
                                       clipRule="evenodd"
                                       d="M15.1811 22.0083C15.065 21.9063 14.7968 21.6695 14.7015 21.5799C12.3755 19.3941 10.8517 15.9712 10.8517 12.1138C10.8517 5.37813 15.4868 0.0410156 21.001 0.0410156C26.5152 0.0410156 31.1503 5.37813 31.1503 12.1138C31.1503 15.9679 29.6292 19.3884 27.3094 21.5778C27.2118 21.6699 26.9384 21.9116 26.8238 22.0125L26.8139 22.1799C26.8789 23.1847 27.554 24.0553 28.5232 24.3626C35.7277 26.641 40.9507 32.0853 41.8276 38.538C41.9483 39.3988 41.6902 40.2696 41.1198 40.9254C40.5495 41.5813 39.723 41.9579 38.8541 41.9579C32.4956 41.9591 9.50672 41.9591 3.14818 41.9591C2.2787 41.9591 1.4518 41.5824 0.881242 40.9263C0.31068 40.2701 0.0523763 39.3989 0.172318 38.5437C1.05145 32.0851 6.27444 26.641 13.4777 24.3628C14.4504 24.0544 15.1263 23.1802 15.1885 22.1722L15.1811 22.0083Z"
                                       fill="white"
                                    />
                                 </svg>
                              </span>
                              <div className="media-body text-right">
                                 <p className="fs-18 text-white mb-2">
                                    Total Employers
                                 </p>
                                 <span className="fs-48 text-white font-w600">
                                    45
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-xxl-6 col-sm-6">
                     <div className="card bg-secondary">
                        <div className="card-body">
                           <div className="media align-items-center">
                              <span className="p-3 mr-3 border border-white rounded">
                                 <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M40.614 9.36994C40.443 8.22658 39.8679 7.18234 38.9932 6.4265C38.1184 5.67067 37.0018 5.25328 35.8457 5.25H6.1543C4.99822 5.25328 3.88159 5.67067 3.00681 6.4265C2.13203 7.18234 1.55701 8.22658 1.38599 9.36994L21 22.0618L40.614 9.36994Z"
                                       fill="white"
                                    />
                                    <path
                                       d="M21.7127 24.7274C21.5003 24.8647 21.2529 24.9378 21 24.9378C20.7471 24.9378 20.4997 24.8647 20.2873 24.7274L1.3125 12.4503V31.9081C1.31389 33.1918 1.82445 34.4225 2.73217 35.3302C3.63988 36.238 4.87061 36.7485 6.15431 36.7499H35.8457C37.1294 36.7485 38.3601 36.238 39.2678 35.3302C40.1755 34.4225 40.6861 33.1918 40.6875 31.9081V12.449L21.7127 24.7274Z"
                                       fill="white"
                                    />
                                 </svg>
                              </span>
                              <div className="media-body text-right">
                                 <p className="fs-18 text-white mb-2">
                                    Total Jobs
                                 </p>
                                 <span className="fs-48 text-white font-w600">
                                    93
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="h-80">
                  <div className="d-flex flex-wrap mb-4 row">
                     <div className="col-xl-3 col-lg-4 mb-2">
                        <h6 className="text-black fs-16 font-w600 mb-1">
                           Showing 45 Payments
                        </h6>
                        {/* <span className="fs-14">Based your preferences</span> */}
                     </div>
                     <div className="col-xl-9 col-lg-8 d-flex flex-wrap">
                        <div className="mr-auto">
                           <Link
                              to="#"
                              className="btn btn-primary btn-rounded mr-2 mb-2"
                           >
                              ALL
                           </Link>
                           <Link
                              to="#"
                              className="btn btn-primary btn-rounded mr-2 light mb-2"
                           >
                              Pending
                           </Link>
                           <Link
                              to="#"
                              className="btn btn-primary btn-rounded mr-2 light mb-2"
                           >
                              Canceled
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
                                 Details
                              </Dropdown.Item>
                              <Dropdown.Item
                                 className="dropdown-item text-danger"
                                 to="/application"
                              >
                                 Cancel
                              </Dropdown.Item>
                           </Dropdown.Menu>
                           <Link
                              to="/manage-payments"
                              className="btn border border-primary text-black btn-rounded ml-2"
                           >
                              Manage Payments
                           </Link>
                        </Dropdown>
                     </div>
                  </div>
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
                                          aria-label="Date Applied: activate to sort column ascending"
                                          style={{ width: 124 }}
                                       >
                                          Job id
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
                                          Amount
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
                                          Worker Name
                                       </th>
                                       <th
                                          className="sorting"
                                          tabIndex={0}
                                          aria-controls="example5"
                                          rowSpan={1}
                                          colSpan={1}
                                          aria-label="Postition: activate to sort column ascending"
                                          style={{ width: 89 }}
                                       >
                                          Employers
                                       </th>
                                       <th
                                          className="sorting"
                                          tabIndex={0}
                                          aria-controls="example5"
                                          rowSpan={1}
                                          colSpan={1}
                                          aria-label="Contact: activate to sort column ascending"
                                          style={{ width: 116 }}
                                       >
                                          Trans. Id
                                       </th>
                                       <th
                                          className="sorting"
                                          tabIndex={0}
                                          aria-controls="example5"
                                          rowSpan={1}
                                          colSpan={1}
                                          aria-label="Contact: activate to sort column ascending"
                                          style={{ width: 116 }}
                                       >
                                          Source
                                       </th>
                                       <th
                                          className="sorting"
                                          tabIndex={0}
                                          aria-controls="example5"
                                          rowSpan={1}
                                          colSpan={1}
                                          aria-label="Contact: activate to sort column ascending"
                                          style={{ width: 116 }}
                                       >
                                          Applicatio Fee
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
                                    <tr role="row" className="odd">
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
                                       <td>#APL-0003</td>
                                       <td>#Jb101</td>
                                       <td>
                                          <div className="media">
                                             <div className="media-body text-nowrap">

                                                <span className="fs-14">
                                                   100£
                                                </span>
                                             </div>
                                          </div>
                                       </td>
                                       <td>Mosciski</td>
                                       <td>Kenneth</td>
                                       <td>12345</td>
                                       <td>PayPal</td>
                                       <td>10£</td>
                                       <td>
                                          <div className="d-flex align-items-center">
                                             <a
                                                className="ml-auto mr-3 btn btn-rounded btn-outline-warning"
                                                href="#"
                                             >
                                                Pending
                                             </a>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr role="row" className="even">
                                       <td className="sorting_1">
                                          <div className="checkbox mr-0 align-self-center">
                                             <div className="custom-control custom-checkbox ">
                                                <input
                                                   type="checkbox"
                                                   className="custom-control-input"
                                                   id="check2"
                                                   required
                                                />
                                                <label
                                                   className="custom-control-label"
                                                   htmlFor="check2"
                                                />
                                             </div>
                                          </div>
                                       </td>
                                       <td>#APL-0002</td>
                                       <td>#Jb102</td>
                                       <td>
                                          <div className="media">
                                             <div className="media-body text-nowrap">
                                                <span className="fs-14">
                                                   100£
                                                </span>
                                             </div>
                                          </div>
                                       </td>
                                       <td>Mary</td>
                                       <td>Andrew</td>
                                       <td>12345</td>
                                       <td>Stripe</td>
                                       <td>10£</td>
                                       <td>
                                          <div className="d-flex align-items-center">
                                             <a
                                                className="ml-auto mr-3 btn btn-rounded btn-outline-warning"
                                                href="#"
                                             >
                                                Pending
                                             </a>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr role="row" className="odd">
                                       <td className="sorting_1">
                                          <div className="checkbox mr-0 align-self-center">
                                             <div className="custom-control custom-checkbox ">
                                                <input
                                                   type="checkbox"
                                                   className="custom-control-input"
                                                   id="check3"
                                                   required
                                                />
                                                <label
                                                   className="custom-control-label"
                                                   htmlFor="check3"
                                                />
                                             </div>
                                          </div>
                                       </td>
                                       <td>#APL-0003</td>
                                       <td>#Jb103</td>
                                       <td>
                                          <div className="media">
                                             <div className="media-body text-nowrap">
                                                <span className="fs-14">
                                                   100£
                                                </span>
                                             </div>
                                          </div>
                                       </td>
                                       <td>Patricia</td>
                                       <td>Ronald</td>
                                       <td>12345</td>
                                       <td>Paystack</td>
                                       <td>10£</td>

                                       <td>
                                          <div className="d-flex align-items-center">
                                             <a
                                                className="ml-auto mr-3 btn btn-rounded btn-outline-warning"
                                                href="#"
                                             >
                                                Pending
                                             </a>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr role="row" className="even">
                                       <td className="sorting_1">
                                          <div className="checkbox mr-0 align-self-center">
                                             <div className="custom-control custom-checkbox ">
                                                <input
                                                   type="checkbox"
                                                   className="custom-control-input"
                                                   id="check4"
                                                   required
                                                />
                                                <label
                                                   className="custom-control-label"
                                                   htmlFor="check4"
                                                />
                                             </div>
                                          </div>
                                       </td>
                                       <td>#APL-0001</td>
                                       <td>#Jb104</td>
                                       <td>
                                          <div className="media">
                                             <div className="media-body text-nowrap">
                                                <span className="fs-14">
                                                   100£
                                                </span>
                                             </div>
                                          </div>
                                       </td>
                                       <td>Jennifer</td>
                                       <td>Jonathan</td>
                                       <td>12345</td>
                                       <td>PayPal</td>
                                       <td>10£</td>
                                       <td>
                                          <div className="d-flex align-items-center">
                                             <a
                                                className="btn btn-rounded btn-success mr-3 ml-auto"
                                                href="#"
                                             >
                                                Completed
                                             </a>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr role="row" className="odd">
                                       <td className="sorting_1">
                                          <div className="checkbox mr-0 align-self-center">
                                             <div className="custom-control custom-checkbox ">
                                                <input
                                                   type="checkbox"
                                                   className="custom-control-input"
                                                   id="check5"
                                                   required
                                                />
                                                <label
                                                   className="custom-control-label"
                                                   htmlFor="check5"
                                                />
                                             </div>
                                          </div>
                                       </td>
                                       <td>#APL-0002</td>
                                       <td>#Jb105</td>
                                       <td>
                                          <div className="media">
                                             <div className="media-body text-nowrap">
                                                <span className="fs-14">
                                                   100£
                                                </span>
                                             </div>
                                          </div>
                                       </td>
                                       <td>John</td>
                                       <td>Stephen</td>
                                       <td>12345</td>
                                       <td>Stripe</td>
                                       <td>10£</td>
                                       <td>
                                          <div className="d-flex align-items-center">
                                             <a
                                                className="btn btn-rounded btn-success mr-3 ml-auto"
                                                href="#"
                                             >
                                                Completed
                                             </a>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr role="row" className="even">
                                       <td className="sorting_1">
                                          <div className="checkbox mr-0 align-self-center">
                                             <div className="custom-control custom-checkbox ">
                                                <input
                                                   type="checkbox"
                                                   className="custom-control-input"
                                                   id="check6"
                                                   required
                                                />
                                                <label
                                                   className="custom-control-label"
                                                   htmlFor="check6"
                                                />
                                             </div>
                                          </div>
                                       </td>
                                       <td>#APL-0001</td>
                                       <td>#Jb106</td>
                                       <td>
                                          <div className="media">
                                             <div className="media-body text-nowrap">
                                                <span className="fs-14">
                                                   100£
                                                </span>
                                             </div>
                                          </div>
                                       </td>
                                       <td>Robert</td>
                                       <td>Gregory</td>
                                       <td>12345</td>
                                       <td>Paystack</td>
                                       <td>10£</td>
                                       <td>
                                          <div className="d-flex align-items-center">
                                             <a
                                                className="ml-auto mr-3 btn btn-rounded btn-outline-warning"
                                                href="#"
                                             >
                                                Pending
                                             </a>
                                          </div>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <div className="d-flex align-items-center justify-content-between pb-2">
                                 <div
                                    className="dataTables_info"
                                    id="example5_info"
                                    role="status"
                                    aria-live="polite"
                                 >
                                    Showing 1 to 6 of 6 entries
                                 </div>
                                 <div
                                    className="dataTables_paginate paging_simple_numbers"
                                    id="example5_paginate"
                                 >
                                    <a
                                       className="paginate_button previous disabled"
                                       aria-controls="example5"
                                       data-dt-idx={0}
                                       tabIndex={0}
                                       id="example5_previous"
                                    >
                                       Previous
                                    </a>
                                    <span>
                                       <a
                                          className="paginate_button current"
                                          aria-controls="example5"
                                          data-dt-idx={1}
                                          tabIndex={0}
                                       >
                                          1
                                       </a>
                                    </span>
                                    <a
                                       className="paginate_button next disabled"
                                       aria-controls="example5"
                                       data-dt-idx={2}
                                       tabIndex={0}
                                       id="example5_next"
                                    >
                                       Next
                                    </a>
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
};

export default Payment;
