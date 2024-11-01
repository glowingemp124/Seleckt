import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { alltemplates, toggleStatus, reset } from "../../../features/templates/templateSlice";
import { toast } from "react-toastify";
import Nav from "../../layouts/nav";
import dateFormat from "dateformat";
import ReactPaginate from "react-paginate";
import Spinner from "../../components/Spinner";
import CustomeModal from "../../components/customeModal/CustomeModal";
import companyLogo from "../../../images/avatar/1.jpg"


import strikePic from "../../../images/avatar/1.jpg"
import { Button, Dropdown, Form, Stack } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import DatePicker from "react-multi-date-picker";

function Invoices() {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const [startDatePicker, setStartDatePicker] = useState(null); // Set initial value to null
   const [dueDate, setDueDate] = useState(null); // Set initial value to null

   const { user } = useSelector((state) => state.auth);
   const { templates, isLoading, isError, message } = useSelector(
      (state) => state.templates
   );
   const getDate = (date) => {
      return dateFormat(date, "mmmm dS, yyyy, h:MM:ss TT");
   };


   const [isModalOpen, setIsModalOpen] = useState(false)
   const [showPaymentDetails, setShowPaymentDetails] = useState(false)

   const handleShowModal = (jobId) => {
      setIsModalOpen(true)
      // dispatch(getJobDetails({ job_id:    jobId }))
   }
   const handleCloseModal = () => {
      setIsModalOpen(false)
   }

   const handleShowMoreClick = () => {
      setShowPaymentDetails(!showPaymentDetails);
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
               <td>
                  <div className="form-group">
                     <div className="custom-control custom-checkbox ml-1 text-white">
                        <input
                           type="checkbox"
                           className="custom-control-input"
                           id="basic_checkbox_1"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="basic_checkbox_1"
                        >
                        </label>
                     </div>
                  </div>
               </td>
               <td className="text-success fw-bold">{index + 1 + (pageNumber === 0 ? 0 : pageNumber * 10)}</td>
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
                           <img src={strikePic} alt="" className="rounded-circle" width="50" />
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
                        <h6 className="text-black font-w600 fs-16 mb-0">
                           {data.template_jobroles.length > 0 ? data.template_jobroles.length : 0}
                        </h6>
                     </div>
                  </div>
               </td>
               {/* <td>
                  <div className="media">
                     <div className="media-body text-nowrap">
                        <div className="text-black font-w600 fs-16 mb-0">
                           {(() => {
                              if (data.status === "0") {
                                 return (
                                    <button onClick={() => {
                                       dispatch(toggleStatus({ template_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                                    }} className='btn btn-rounded btn-success'>Pending</button>
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
               </td> */}

               <td>
                  <h6>
                  {getDate(data.createdAt)}
                  </h6>
               </td>
               <td>
                  <h6>
                  {getDate(data.createdAt)}
                  </h6>
               </td>
               <td>
                  <div className="">
                     <button onClick={() => handleShowModal()}>
                        {/* <i className="fa fa-eye fa-2x mx-3" style={{ color: '#00B094' }} /> */}
                        <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M18.5728 23.3332C20.2823 23.3332 21.668 21.8408 21.668 19.9998C21.668 18.1589 20.2823 16.6665 18.5728 16.6665C16.8633 16.6665 15.4776 18.1589 15.4776 19.9998C15.4776 21.8408 16.8633 23.3332 18.5728 23.3332Z" fill="#00B094" />
                           <path fillRule="evenodd" clipRule="evenodd" d="M2.32893 19.5004C4.49779 12.0639 10.9481 6.6665 18.5731 6.6665C26.1981 6.6665 32.6485 12.0639 34.8173 19.5005C34.9121 19.8256 34.9121 20.1742 34.8173 20.4993C32.6484 27.9358 26.1981 33.3332 18.5731 33.3332C10.9481 33.3332 4.49775 27.9357 2.32892 20.4992C2.23411 20.1741 2.23411 19.8255 2.32893 19.5004ZM12.3823 19.9998C12.3823 16.3179 15.1539 13.3332 18.5728 13.3332C21.9917 13.3332 24.7633 16.3179 24.7633 19.9998C24.7633 23.6817 21.9917 26.6665 18.5728 26.6665C15.1539 26.6665 12.3823 23.6817 12.3823 19.9998Z" fill="#00B094" />
                        </svg>

                     </button>
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


   const invoiceSummary = (
      <Stack gap={3}>
         <div className='border-bottom'>
            <h6 className="mb-2 text-black">Name:</h6>
            <p className="text-capitalize mb-3 text-black">Alex Hales</p>
         </div>
         <div className='border-bottom'>
            <h6 className="font-weight-bold mb-2 text-black">ID:</h6>
            <p className="text-capitalize mb-3 text-black">74326</p>
         </div>

         <div className='border-bottom'>
            <h6 className="font-weight-bold mb-2 text-black">Company Name:</h6>
            <p className="text-capitalize mb-3 text-black">Glowingsoft Technologies</p>
         </div>

         <div className='border-bottom'>
            <h6 className="font-weight-bold mb-1 text-black">Logo:</h6>
            <img src={companyLogo} alt="" width="50" className="rounded-circle mb-3" />
         </div>

         <div className='border-bottom'>
            <h6 className="font-weight-bold mb-2 text-black">Address:</h6>
            <p className="text-capitalize mb-3 text-black">Office no 161, DHA Phase 1, lahore, pakistan</p>
         </div>

         <div className='border-bottom'>
            <h6 className="font-weight-bold mb-2 text-black">Email Address:</h6>
            <p className="text-capitalize mb-3 text-black">alexhales14@gmail.com</p>
         </div>

         <div className='border-bottom'>
            <h6 className="font-weight-bold mb-2 text-black">Invoice Number:</h6>
            <p className="text-capitalize mb-3 text-black">AR1234567</p>
         </div>

         <div className='border-bottom'>
            <h6 className="font-weight-bold mb-2 text-black">Due Date:</h6>
            <p className="text-capitalize mb-3 text-black">May 21st 2024</p>
         </div>

         <div className='border-bottom'>
            <h6 className="font-weight-bold mb-2 text-black">Contact No:</h6>
            <p className="text-capitalize mb-3 text-black">+44 12 2222 222</p>
         </div>

         <div className='border-bottom'>
            <h6 className="font-weight-bold mb-2 text-black">Invoice Date:</h6>
            <p className="text-capitalize mb-3 text-black">May 21st 2024</p>
         </div>

         <div className='border-bottom'>
            <h6 className="font-weight-bold mb-2 text-black">Amount Due:</h6>
            <p className="text-capitalize mb-3 text-black">£70.00</p>
         </div>


         <div className='border-bottom'>
            <h6 className="font-weight-bold mb-2 text-black">Total Amount:</h6>
            <p className="text-capitalize mb-3 text-black">£470.00</p>
         </div>
         <div className='d-flex flex-wrap mb-2' style={{ gap: "2rem" }}>
            <div style={{ flexBasis: "calc(50% - 1rem)" }}>
               <h6 className="text-black mb-2">Payment Term:</h6>
               <select className="btn-md mb-3 px-5 py-2" style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4", width: "100%" }}>
                  <option value="net30">30 Days</option>
               </select>
            </div>

            <div style={{ flexBasis: "calc(50% - 1rem)" }}>
               <h6 className="text-black  mb-2">Payment Method:</h6>
               <select className="btn-md mb-3 px-5 py-2" style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4", width: "100%" }}>
                  <option value="credit_card">Credit Card</option>
               </select>
            </div>

            <div style={{ flexBasis: "calc(50% - 1rem)" }}>
               <h6 className="text-black  mb-2">Payment Status:</h6>
               <select className="btn-md mb-3 px-5 py-2" style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4", width: "100%" }}>
                  <option value="paid">UnPaid</option>
               </select>
            </div>

            <div style={{ flexBasis: "calc(50% - 1rem)" }}>
               <h6 className="text-black  mb-2">Group Invoice:</h6>
               <select className="btn-md mb-3 px-5 py-2" style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4", width: "100%" }}>
                  <option value="yes">Invoice</option>
               </select>
            </div>
         </div>

      </Stack>
   )

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
                        <div className="mb-4 row">
                           <div className="col-xl-7 col-lg-7 mb-2">
                              <h1 className="text-black fs-35 font-w600 mb-3">Invoices</h1>
                              <h6 className="text-black fs-16 font-w600 mb-1">{userPerPage} Rows per page</h6>
                           </div>
                           <div className="col-xl-5 col-lg-5 mb-2">
                              <Form className="d-flex flex-wrap gap-2 justify-content-end">
                                 <div className="date-picker-container position-relative">
                                    {/* <div className="placeholder-text">From</div> */}
                                    <ReactDatePicker
                                       selected={startDatePicker}
                                       onChange={(date) => setStartDatePicker(date)}
                                       className="form-control rounded-4 border-dark w-100 custom-dropdown-toggle bg-transparent pl-4 mt-4"
                                       dateFormat="dd/MM/yyyy"
                                       placeholderText="Pending Invoice Date"
                                    />
                                    <i className="fa-solid fa-calendar-minus fa-lg position-absolute calendar-icon p-3 mt-2" style={{ color: '#00B094' }} />
                                 </div>
                                 <div className="date-picker-container position-relative">
                                    {/* <div className="placeholder-text">Due Date</div> */}
                                    <ReactDatePicker
                                       selected={dueDate}
                                       onChange={(date) => setDueDate(date)}
                                       className="form-control rounded-4 border-dark w-100 custom-dropdown-toggle bg-transparent pl-4 mt-4"
                                       dateFormat="dd/MM/yyyy"
                                       placeholderText="Due Date"
                                    />
                                    <i className="fa-solid fa-calendar-minus fa-lg position-absolute calendar-icon p-3 mt-2" style={{ color: '#00B094' }} />
                                 </div>

                                 {/* <Form className="d-flex flex-wrap gap-2 justify-content-end"> */}
                                 <div className="mt-md-4 rounded-4 bg-transparent p-3 d-flex align-items-center justify-content-center" style={{ border: '1px solid #c4c4c4' }}>
                                    Total Invoice: <span className="text-success mx-1"> £470</span>
                                 </div>
                                 {/* </Form> */}
                              </Form>
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
                                                style={{ width: 50, backgroundColor: '#00B094', color: 'white' }}
                                             >
                                                <div className="form-group pt-2">
                                                   <div className="custom-control custom-checkbox ml-1 text-white">
                                                      <input
                                                         type="checkbox"
                                                         className="custom-control-input"
                                                         id="basic_checkbox_2"
                                                      />
                                                      <label
                                                         className="custom-control-label"
                                                         htmlFor="basic_checkbox_2"
                                                      >
                                                      </label>
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
                                                style={{ width: 50, backgroundColor: '#00B094', color: 'white' }}
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
                                                style={{ width: 70, backgroundColor: '#00B094', color: 'white' }}
                                             >
                                                Name
                                             </th>

                                             <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="example5"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Company: activate to sort column ascending"
                                                style={{ width: 70, backgroundColor: '#00B094', color: 'white' }}
                                             >
                                                Company Name
                                             </th>
                                             <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="example5"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Company: activate to sort column ascending"
                                                style={{ width: 100, backgroundColor: '#00B094', color: 'white' }}
                                             >
                                                Logo
                                             </th>
                                             <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="example5"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Company: activate to sort column ascending"
                                                style={{ width: 416, backgroundColor: '#00B094', color: 'white' }}
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
                                                style={{ width: 50, backgroundColor: '#00B094', color: 'white' }}
                                             >
                                                Invoice No
                                             </th>

                                             <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="example5"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Date Applied: activate to sort column ascending"
                                                style={{ width: 160, backgroundColor: '#00B094', color: 'white' }}
                                             >
                                                Invoice Date
                                             </th>
                                             <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="example5"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Date Applied: activate to sort column ascending"
                                                style={{ width: 160, backgroundColor: '#00B094', color: 'white' }}
                                             >
                                                Due Date
                                             </th>

                                             <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="example5"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Contact: activate to sort column ascending"
                                                style={{ width: 116, backgroundColor: '#00B094', color: 'white' }}
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

         <CustomeModal
            title="Invoice"
            show={isModalOpen}
            onHide={handleCloseModal}
            content={templates ? invoiceSummary : "Loading..."}
         />
      </>
   );
}

export default Invoices;
