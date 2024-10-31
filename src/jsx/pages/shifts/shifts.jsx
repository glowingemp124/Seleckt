import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { alltemplates, toggleStatus, reset } from "../../../features/templates/templateSlice";
import { toast } from "react-toastify";
import { Dropdown } from "react-bootstrap";
import Nav from "../../layouts/nav";
import dateFormat from "dateformat";
import ReactPaginate from "react-paginate";
import Spinner from "../../components/Spinner";

function Shifts() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { user } = useSelector((state) => state.auth);
   const { templates, isLoading, isError, message } = useSelector(
      (state) => state.templates
   );
   const getDate = (date) => {
      return dateFormat(date, "mmmm dS, yyyy, h:MM:ss TT");
   };

   useEffect(() => {
      if (isError) {
         toast.error(message);
      }
      if (!user) {
         navigate("/login");
      }
      dispatch(alltemplates(1));
      return () => reset();
   }, [user, navigate, isError, message, dispatch]);

   const [pageNumber, setPageNumber] = useState(0);

   const userPerPage = 10;
   const pageVisted = pageNumber;
   let pageCount;
   const total_pages = templates?.total_pages
   const templatesData = templates?.body

   const getTemlpates = () => {
      pageCount = total_pages;

      return templatesData?.map((data, index) => {
         return (
            <tr role="row" className="odd" key={index}>
               <td>{index + 1 + (pageNumber === 0 ? 0 : pageNumber * 10)}</td>
               <td>
                  <div className="media">
                     <div className="media-body text-nowrap">
                        <h6 className="text-black font-w600 fs-16 mb-0">
                           {data.name}
                        </h6>
                     </div>
                  </div>
               </td>
               <td>
                  <div className="media">
                     <div className="media-body text-nowrap">
                        <h6 className="text-black font-w600 fs-16 mb-0">
                           {data.industry.title}
                        </h6>
                     </div>
                  </div>
               </td>

               <td>
                  <div className="media">
                     <div className="media-body text-nowrap">
                        <h6 className="text-black font-w600 fs-16 mb-0">
                           {data.template_jobroles.length > 0 ? data.template_jobroles.length : 0}
                        </h6>
                     </div>
                  </div>
               </td>

               <td>
                  <div className="media">
                     <div className="media-body">
                        <h6 className="text-black font-w600 fs-16 mb-0">
                           {data.address.address.line1}
                        </h6>
                     </div>
                  </div>
               </td>

               <td>
                  <div className="media">
                     <div className="media-body text-nowrap">
                        <div className="text-black font-w600 fs-16 mb-0">
                           {(() => {
                              if (data.status === "0") {
                                 return (
                                    <button onClick={() => {
                                       dispatch(toggleStatus({ template_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                                    }} className='btn btn-rounded btn-info'>Pending</button>
                                 )
                              } else if (data.status === "1") {
                                 return (
                                    <button onClick={() => {
                                       dispatch(toggleStatus({ template_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                                    }} className='btn btn-rounded btn-success'>Approved</button>
                                 )
                              } else {
                                 return (
                                    <button onClick={() => {
                                       dispatch(toggleStatus({ template_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                                    }} className='btn btn-rounded btn-danger'>Declined</button>
                                 )
                              }
                           })()}
                        </div>
                     </div>
                  </div>
               </td>

               <td>{getDate(data.createdAt)}</td>
               <td>
                  <div className="d-flex align-items-center">
                     <a className="btn btn-rounded btn-info" href={"mailto:" + data.email}>
                        <i className="fa fa-eye" />
                     </a>
                  </div>
               </td>
            </tr>
         );
      });
   };

   const changePage = async (data) => {
      dispatch(alltemplates(data.selected + 1))
      setPageNumber(data.selected);
   };

   return (
      <>
         {isLoading ? (
            <Spinner />
         ) : (
            <span>
               <Nav />
               <div className="content-body">
                  <div className="container-fluid">
                     <div className="h-80">
                        <div className="d-flex flex-wrap mb-4 row">
                           <div className="col-xl-3 col-lg-4 mb-2">
                              <h6 className="text-black fs-16 font-w600 mb-1">
                                 {userPerPage} Rows per page
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
                                    On-Hold
                                 </Link>
                                 <Link
                                    to="#"
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
                                    <Dropdown.Item
                                       className="dropdown-item"
                                       to="/application"
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
                                                Title
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
                                                Industry
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
                                                Jobroles Count
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
                                                Address
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
                                                Approved
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
                                                Date Created
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
                                                Action
                                             </th>
                                          </tr>
                                       </thead>
                                       <tbody>{getTemlpates()}</tbody>
                                    </table>
                                    <div className="d-flex align-items-center justify-content-between pb-2">
                                       <div
                                          className="dataTables_info"
                                          id="example5_info"
                                          role="status"
                                          aria-live="polite"
                                       >
                                          Showing {pageVisted + 1}
                                          of {total_pages} pages
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
                                             previousLinkClassName={
                                                "paginate_button previous previousBttn"
                                             }
                                             nextLinkClassName={
                                                "paginate_button next nextBttn"
                                             }
                                             pageLinkClassName={"paginate_button mr-1 ml-1"}
                                             disabledClassName={"paginationDisabled"}
                                             activeClassName={"paginationActive"}
                                             forcePage={pageNumber}
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
            </span>
         )}
      </>
   );
}

export default Shifts;
