import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../layouts/nav";


const Report = () => {
   return (
      <>
         <Nav />
         <div className="content-body">
            <div className="container-fluid">
               <div className="h-80">
                  <div className="d-flex align-items-center flex-wrap search-job bg-white rounded py-3 px-md-3 px-0 mb-4">
                     <div className="col-lg-5 border-right">
                        <input
                           className="form-control input-rounded mr-auto mb-md-0 mb-3"
                           type="datetime-local"
                           placeholder="Search by Title, Company or any jobs keyword..."
                        />
                     </div>
                     <div className="col-lg-7 d-md-flex">
                        <input
                           className="form-control input-rounded mr-auto mb-md-0 mb-3"
                           type="datetime-local"
                           placeholder="Search by Title, Company or any jobs keyword..."
                        />

                        <Link to="#" className="btn btn-primary btn-rounded">
                           Generate Report
                        </Link>
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
                                                className="btn btn-rounded btn-success mr-3 ml-auto"
                                                href="#"
                                             >
                                                Completed
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

export default Report;
