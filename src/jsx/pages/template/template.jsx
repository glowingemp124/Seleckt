import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { alltemplates, toggleStatus, reset } from "../../../features/templates/templateSlice";
import { toast } from "react-toastify";
import { Button, Stack } from "react-bootstrap";
import Nav from "../../layouts/nav";
import dateFormat from "dateformat";
import ReactPaginate from "react-paginate";
import Spinner from "../../components/Spinner";
import CustomeModal from "../../components/customeModal/CustomeModal";
import { getTemplate } from "../../../features/jobs/jobslice";
import DefaultImg from "../../../images/logo.png"


function Template() {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const [templateModalOpen, setTemplateModalOpen] = useState(false)

   const { user } = useSelector((state) => state.auth);
   const { templates, isLoading, isError, message } = useSelector((state) => state.templates);
   const { template } = useSelector((state) => state.jobs);

   const selectedTemplate = template?.data?.body

   const dateAndTimes = selectedTemplate?.datetime?.datetime

   const sortedDates = dateAndTimes?.map(date => {
      const [day, month, yearTime] = date?.start_date?.split('/');
      const [year] = yearTime.split(' ');
      return new Date(year, month - 1, day);
   }).sort((a, b) => a - b);

   const startDate = dateAndTimes && sortedDates[0]?.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
   const endDate = dateAndTimes && sortedDates[sortedDates?.length - 1]?.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });

   const sequence = `${startDate} - ${endDate}`;

   const getDate = (date) => {
      return dateFormat(date, "mmmm dS, yyyy, h:MM:ss TT");
   };

   const handleShowTemplateModal = (templateId) => {
      setTemplateModalOpen(true)
      dispatch(getTemplate(templateId))
   }
   const handleCloseTemplateModal = () => {
      setTemplateModalOpen(false)
   }

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

   const templateModalContent = (
      <Stack gap={3}>
         <div className='border-bottom text-black'>
            <div>
               <h6 className="mb-3 text-black">Venue: </h6>
            </div>
            <div className='mb-4 text-black'>
               <h6 className="text-black mb-2">{selectedTemplate?.venue?.title}</h6>
               <p className='text-capitalize mb-3 text-black'>{selectedTemplate?.venue.address.line1}</p>
            </div>
         </div>

         <div className='border-bottom'>
            <h6 className="text-black mb-3">Industry:</h6>
            <div className='d-flex flex-wrap gap-2'>
               <Button
                  type="button"
                  className="btn-sm mb-4 d-flex align-items-center gap-2 rounded-3"
                  variant="success"
               >
                  {selectedTemplate?.industry?.title}
               </Button>
            </div>
         </div>

         <div className='border-bottom'>
            <h6 className="text-black mb-3">Job Roles:</h6>
            <div className="d-flex flex-wrap gap-2 align-items-center">
               {
                  selectedTemplate?.jobroles?.filter(jr => jr.is_active).map((role, i) => (
                     <Button
                        key={i}
                        type="button"
                        size='sm'
                        className={`mb-4 d-flex align-items-center gap-2 rounded-3`}
                        variant="success"

                     >
                        {role?.title}
                     </Button>
                  ))
               }
            </div>
         </div>

         <div className='border-bottom'>
            <h6 className="text-black mb-3">Skills:</h6>
            <div className='d-flex flex-wrap gap-2 align-items-center mb-3'>
               {selectedTemplate?.skills?.filter(skill => skill.is_active).map((skill, idx) => (
                  <Button
                     key={idx}
                     type="button"
                     size='sm'
                     className="d-flex align-items-center gap-2 rounded-3 mb-4"
                     variant="success"

                  >
                     {skill?.title}
                  </Button>
               ))}

            </div>
         </div>

         <div className='border-bottom'>
            <h6 className="text-black mb-3">Date & Time:</h6>
            <div className="d-flex flex-column text-black">
               {
                  <p>{sequence}</p>
               }
            </div>
         </div>

         <div className="border-bottom">
            <h6 className="text-black mb-2">Additional Details:</h6>
            <div>
               {
                  <Stack>
                     {/* Rate & PO Number */}
                     <div className="d-flex justify-content-between gap-2">
                        <div className='col-6 mb-4'>
                           <h6 className='text-black'>Rate p/h</h6>
                           <p className='mb-0'>{selectedTemplate?.additional?.rate}</p>
                        </div>
                        <div className='col-6'>
                           <h6 className='text-black'>PO Number</h6>
                           <p className='mb-0'>{selectedTemplate?.additional?.po_number}</p>
                        </div>
                     </div>

                     {/* Break */}
                     <div className="d-flex justify-content-between gap-2">
                        <div className='col-6'>
                           <h6 className='text-black'>Break Times</h6>
                           <p>{selectedTemplate?.additional?.break_time}</p>
                        </div>
                        <div className='col-6'>
                           <h6 className='text-black'>Break Paid</h6>
                           <p>{selectedTemplate?.additional?.break_paid ? "Yes" : "No"}</p>
                        </div>
                     </div>

                     {/* Health & Safety */}
                     <div className=" px-3" style={{ gap: "3.5rem" }}>
                        <h6 className='mb-0 text-black'>Health & Safety issues?</h6>
                        <p>{selectedTemplate?.additional?.health_safety ? "Yes" : "No"}</p>
                     </div>

                     {selectedTemplate?.additional?.health_safety &&
                        <div className='px-3'>
                           <h6 className='text-black'>Health & Safety Instructions</h6>
                           <p className='w-100 p-3' style={{ borderRadius: "1.4rem", backgroundColor: "#edf2f4" }}>
                              {selectedTemplate?.additional?.hs_description}
                           </p>
                        </div>
                     }

                     {/* Job Description */}
                     <div className='px-3 mb-2'>
                        <h6 className='text-black'>Job Description:</h6>
                        <p className='mb-0' >
                           {selectedTemplate?.additional?.description}
                        </p>
                     </div>
                  </Stack>
               }
            </div>
         </div >

         <div className="border-bottom my-2">
            <h6 className="text-black mb-2">Uniforms</h6>
            {selectedTemplate?.is_uniform ? (
               <div className='d-flex gap-2'>
                  <img src={selectedTemplate?.uniform?.image} alt="" className='mb-3' width={90} height={90} />
                  <p className="text-black">{selectedTemplate?.uniform?.description}</p>
               </div>
            ) : (

               <img src={DefaultImg} alt="" className='mb-3' />
            )}
         </div>

         <div className='border-bottom'>
            <h6 className="text-black mb-3">Uploads:</h6>
            <div className='mb-4'>
               {selectedTemplate?.uploads?.map((upload, idx) => (
                  <div key={idx} className='d-flex justify-content-between align-items-center mb-2'>
                     <p className='mb-0'>{upload?.name}</p>
                  </div>
               ))}
            </div>
         </div>
      </Stack >
   )

   const getTemlpates = () => {
      pageCount = total_pages;
      return templatesData?.map((data, index) => {
         return (
            <tr role="row" className="odd" key={index}>
               <td className="text-success">{index + 1 + (pageNumber === 0 ? 0 : pageNumber * 10)}.</td>
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
                     <div className="media-body">
                        <h6 className="text-black font-w600 fs-16 mb-0 text-nowrap">
                           Glowingsoft Technologies
                        </h6>
                     </div>
                  </div>
               </td>


               <td>
                  <div className="media">
                     <div className="media-body text-nowrap">
                        <h6 className="text-black font-w600 fs-16 mb-0 text-center">
                           {data.template_jobroles.length > 0 ? data.template_jobroles.length : 0}
                        </h6>
                     </div>
                  </div>
               </td>
               <td>
                  <div className="media">
                     <div className="media-body">
                        <h6 className="text-black font-w600 fs-16 mb-0 text-center">
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
                                    }} className='btn btn-rounded' style={{ backgroundColor: '#67088A', color: 'white' }}>Pending</button>
                                 )
                              } else if (data.status === "1") {
                                 return (
                                    <button onClick={() => {
                                       dispatch(toggleStatus({ template_id: data._id, pageno: pageNumber === 0 ? 1 : pageNumber }));
                                    }} className='btn btn-rounded btn-success' style={{ backgroundColor: '#00C337', color: 'white' }}>Approved</button>
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

               <td><b>{getDate(data.createdAt)}</b></td>
               <td>
                  <div className="text-center">
                     <button onClick={() => handleShowTemplateModal(data._id)} className="text-center">
                        <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M16.5728 17.3332C18.2823 17.3332 19.668 15.8408 19.668 13.9998C19.668 12.1589 18.2823 10.6665 16.5728 10.6665C14.8633 10.6665 13.4776 12.1589 13.4776 13.9998C13.4776 15.8408 14.8633 17.3332 16.5728 17.3332Z" fill="#00B094" />
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M0.328928 13.5004C2.49779 6.06387 8.94813 0.666504 16.5731 0.666504C24.1981 0.666504 30.6485 6.06394 32.8173 13.5005C32.9121 13.8256 32.9121 14.1742 32.8173 14.4993C30.6484 21.9358 24.1981 27.3332 16.5731 27.3332C8.94812 27.3332 2.49775 21.9357 0.328925 14.4992C0.234107 14.1741 0.234108 13.8255 0.328928 13.5004ZM10.3823 13.9998C10.3823 10.3179 13.1539 7.33317 16.5728 7.33317C19.9917 7.33317 22.7633 10.3179 22.7633 13.9998C22.7633 17.6817 19.9917 20.6665 16.5728 20.6665C13.1539 20.6665 10.3823 17.6817 10.3823 13.9998Z" fill="#00B094" />
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
                              <h1 className="text-black fs-35 font-w600 mb-3">
                                 Templates
                              </h1>
                              <h6 className="fs-16 mb-1">
                                 {userPerPage} Rows per page
                              </h6>
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
                                                style={{ width: 100, backgroundColor: '#00B094', color: 'white' }}
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
                                                style={{ width: 50, backgroundColor: '#00B094', color: 'white' }}
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
                                                style={{ width: 30, backgroundColor: '#00B094', color: 'white' }}
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
                                                style={{ width: 30, backgroundColor: '#00B094', color: 'white' }}
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
                                                style={{ width: 30, backgroundColor: '#00B094', color: 'white' }}
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
                                                style={{ width: 450, backgroundColor: '#00B094', color: 'white', textAlign:'center' }}
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
                                                style={{ width: 100, backgroundColor: '#00B094', color: 'white' }}
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
                                                style={{ width: 164, backgroundColor: '#00B094', color: 'white' }}
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
                                                style={{ width: 116, backgroundColor: '#00B094', color: 'white', textAlign:'center' }}
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
         {/* Template Modal */}
         <CustomeModal
            title="Template"
            show={templateModalOpen}
            onHide={handleCloseTemplateModal}
            content={selectedTemplate ? templateModalContent : "Loading..."}
         />
      </>
   );
}

export default Template;
