import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";
import Nav from "../../layouts/nav";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { employerProfileId, reset } from "../../../features/employers/employerSlice";
import CustomeModal from "../../components/customeModal/CustomeModal";
import Spinner from "../../components/Spinner";

const WorkerProfile = () => {

   const [showCompanyDetailsModal, setShowCompanyDetailsModal] = useState(false)
   const [showVenuesModal, setShowVenuesModal] = useState(false)
   const [showAllWorkerModal, setShowAllWorkerModal] = useState(false)
   const [showWorkerDetailsModal, setShowWorkerDetailsModal] = useState(false)
   const [selectedWorker, setSelectedWorker] = useState(null)
   const [showProfileCompletion, setShowProfileCompletion] = useState(false);

   const { id } = useParams()
   const dispatch = useDispatch()
   const navigate = useNavigate();

   const user = useSelector((state) => state.auth)
   const { employerDetails, isLoading, isError, message } = useSelector((state) => state.employers)

   // Profile Completion Modal Functions
   const handleCloseProfileCompletion = () => setShowProfileCompletion(false);
   const handleShowProfileCompletion = () => setShowProfileCompletion(true);

   const handleShowCompanyDetailsModal = () => setShowCompanyDetailsModal(true)
   const handleCloseCompanyDetailsModal = () => setShowCompanyDetailsModal(false)

   const handleShowVenuesModal = () => setShowVenuesModal(true)
   const handleCloseVenuesModal = () => setShowVenuesModal(false)

   const handleShowAllWorkersModal = () => setShowAllWorkerModal(true)
   const handleCloseAllWorkersModal = () => setShowAllWorkerModal(false)

   const handleShowWorkerDetailsModal = (workr) => {
      setSelectedWorker(workr)
      setShowWorkerDetailsModal(true)
   }
   const handleCloseWorkerDetailsModal = () => {
      setShowWorkerDetailsModal(false)
      setSelectedWorker(null)
   }


   useEffect(() => {
      if (isError) {
         toast.error(message);
      }
      if (!user) {
         navigate("/login");
      }
      dispatch(employerProfileId(id));
      return () => reset();
   }, [user, navigate, isError, message, dispatch, id]);


   const profile_completion = employerDetails?.body?.profile_completion;
   const industries = employerDetails?.body?.industries
   const company_data = employerDetails?.body?.company_data
   const venues = employerDetails?.body?.venue_count
   const myWorkerPool = employerDetails?.body?.workers
   const filteredIndustries = industries?.filter(industry => industry?.is_active && industry?.is_user_industry);


   const companyDetails = (
      <Stack gap={3}>
         <div className="border-bottom">
            <p className="font-weight-bold mb-0 text-black">Address</p>
            <p className="text-capitalize">{company_data?.address?.line1}</p>
         </div>

         <div className="border-bottom">
            <p className="font-weight-bold mb-0 text-black">Company Name</p>
            <p className="text-capitalize">{company_data?.company_name}</p>
         </div>

         <div className="border-bottom">
            <p className="font-weight-bold mb-0 text-black">Company Number</p>
            <p className="text-capitalize">{company_data?.company_number}</p>
         </div>

         <div className="border-bottom">
            <p className="font-weight-bold mb-0 text-black">Brand Name</p>
            <p className="text-capitalize">{company_data?.brand_name}</p>
         </div>

         <div className="border-bottom">
            <p className="font-weight-bold mb-0 text-black">VAT Number</p>
            <p className="text-capitalize">{company_data?.vat_number}</p>
         </div>

         <div className="">
            <p className="font-weight-bold mb-0 text-black">Hiring Capacity</p>
            <p className="text-capitalize">{company_data?.hiring_capacity}</p>
         </div>

         <div className="">
            <p className="font-weight-bold mb-0 text-black">Company Description</p>
            <p className="text-capitalize">{company_data?.company_description}</p>
         </div>
      </Stack>
   )

   const venueDetails = (
      <Stack>
         venues
      </Stack>
   )

   const allWorkersList = (
      <Stack>
         {myWorkerPool?.map((mp, idx) => (
            <div className="d-flex justify-content-between mb-4 align-items-center" key={idx}>
               <div className="d-flex gap-4">
                  <img src={mp?.image} alt={mp?.name} style={{ width: "70px", height: "70px" }} className="rounded-circle" />
                  <div>
                     <p className="mb-0 p-0">{mp?.name}</p>
                     <p className="mb-0 p-0 d-flex">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                     </p>
                     <p className="mb-0 p-0">New to Seleckt</p>
                  </div>
               </div>


               <div className="d-flex gap-2">
                  <i className="fa-solid fa-house"></i>
                  <i className="fa-solid fa-user-xmark"></i>
                  <i className="fa-solid fa-circle-xmark"></i>
               </div>
            </div>
         ))}
      </Stack>
   )

   const workerDetails = (workr) => (
      <Stack>
         <div className="border-bottom mb-3">
            <div className="d-flex justify-content-between align-items-center">
               <div className="d-flex flex-column align-items-center text-black">
                  <p className="mb-0 p-0">0</p>
                  <p className="mb-0 p-0">Rating</p>
               </div>
               <div className="text-center profile-bx">
                  <div className="">
                     <img src={workr?.image} className="rounded-circle" alt="" style={{ width: "90px", height: "90px", border: "5px solid #2FE6DE" }} />
                  </div>
               </div>
               <div className="d-flex flex-column align-items-center text-black">
                  <p className="mb-0 p-0">0</p>
                  <p className="mb-0 p-0">Past Jobs</p>
               </div>
            </div>
            <div className="text-center font-weight-bold mt-3 mb-5 text-black fs-20">
               {workr?.name}
            </div>
         </div>

         <div className="border-bottom mb-3">
            <p className="font-weight-bold mb-0 text-black">Industry</p>
            <p className="text-capitalize">{company_data?.address?.line1}</p>
         </div>

         <div className="border-bottom mb-3">
            <p className="font-weight-bold mb-0 text-black">Job Roles, Skills</p>
            <p className="text-capitalize">{company_data?.company_name}</p>
         </div>

         <div className="border-bottom mb-3">
            <p className="font-weight-bold mb-0 text-black">Work Experience</p>
            <p className="text-capitalize">{company_data?.company_number}</p>
         </div>

         <div className="mb-3">
            <p className="font-weight-bold mb-0 text-black">Availibility</p>
            <p className="text-capitalize">{company_data?.company_number}</p>
         </div>
      </Stack>
   )

   const profileCompletionContent = (
      <Stack>
         {employerDetails?.body?.profile_completion?.completion_data.map((item, index) => (
            <div className="row my-3" key={index}>
               <div className="col-6">
                  <h4><b>{item.title}</b></h4>
               </div>
               <div className="col-4">
                  <h4><b>{item.value}</b></h4>
               </div>
               <div className="col-2">
                  {item.is_checked ? (
                     <i className="fa fa-check text-success"></i>
                  ) : (
                     <i className="fa fa-check"></i>
                  )}
               </div>
            </div>
         ))}
      </Stack>
   )

   return (
      <>
         {isLoading ? (
            <h1 className="d-flex justify-content-center align-items-center"><Spinner /></h1>
         ) : (
            <span>
               <Nav />
               <div className="content-body">
                  <div className="container-fluid">
                     <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="text-black font-w600 mr-auto mb-0 pr-3 text-capitalize">Employer Profile</h2>
                        <Link to={`/employer/${employerDetails?.body?._id}/jobs`}>
                           <Button variant="success" size="lg" className="rounded-pill">
                              See Jobs
                           </Button>
                        </Link>
                     </div>
                     <div className="col-xl-12 col-xxl-12 col-lg-12">
                        <div className="row">
                           <div className="col-xl-12 col-lg-12">
                              <div className="card flex-lg-column flex-md-row ">
                                 <div className="d-flex justify-content-between align-items-center  card-body border-bottom">
                                    <h2 className="text-black font-w700 mr-auto mb-0 text-capitalize">Profile</h2>
                                    <h3 className="text-success c-pointer"
                                       onClick={handleShowProfileCompletion}
                                    >
                                       {profile_completion?.percentage}%
                                    </h3>

                                 </div>


                                 {/* <h3 className="mx-3 text-success">{employerDetails?.body?._id}</h3> */}
                                 <div className=" card-body profile-bx">
                                    <div className=" card-body profile-bx">
                                       <Link to="/Employers"><i class="fa-solid fa-chevron-left text-success text-start fa-lg"></i></Link>
                                       <div className="profile-image text-center p-0 text-center">
                                          <img src={employerDetails?.body?.image} width={100} height={100} className="rounded-circle" alt="" />
                                       </div>
                                       <div className="text-center">
                                          {/* <i className="fa fa-camera ml-10 fs-24 text-center" style={{ color: '#20117a' }} data-toggle="modal"
                                          data-target="#staticBackdrop"></i> */}
                                          <h2 className="text-center text-success mt-3"><b>{employerDetails?.body?.name}</b></h2>
                                       </div>
                                    </div>
                                    {/* <div className="rounded-circle">
                                       <img src={employerDetails?.body?.image} width={100} height={100} className="rounded-circle" alt="" />
                                    </div>
                                    <i className="fa fa-camera ml-10 fs-24 text-info" data-toggle="modal"
                                       data-target="#staticBackdrop"></i>
                                    <h2 className="text-center text-success"><b>{employerDetails?.body?.name}</b></h2> */}
                                 </div>
                                 <div className="card-body border-bottom border-left">
                                    <div className="mb-3 align-items-center">
                                       <h4 className="text-nowrap text-black text-capitalize "><b>Industry</b></h4>
                                       <div className="d-flex gap-2 flex-wrap mt-2">
                                          {filteredIndustries?.map((data, index) => (
                                             <div className="mt-3" key={index}>
                                                <Button
                                                   type="button"
                                                   className="btn-sm rounded-3"
                                                   style={{ color: "white" }}
                                                   variant="success"
                                                >
                                                   {data?.title}
                                                </Button>
                                             </div>
                                          ))}
                                       </div>
                                    </div>
                                 </div>
                                 {/* <h3 className="m-3 mx-4"><b>Company Details:</b></h3> */}
                                 <div className="card-body">
                                    <h4 className="text-nowrap text-black text-capitalize mb-3"><b>Company Details:</b></h4>
                                    <div className="row">
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <div className="border-bottom">
                                                <p className="font-weight-bold mb-0 text-black">Company Name</p>
                                                <p className="text-capitalize">{company_data?.company_name}</p>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <div className="border-bottom">

                                                <p className="font-weight-bold mb-0 text-black">Address</p>
                                                <p className="text-capitalize">{company_data?.address?.line1}</p>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <div className="border-bottom">

                                                <p className="font-weight-bold mb-0 text-black">Company Number</p>
                                                <p className="text-capitalize">{company_data?.company_number}</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>

                                 </div>

                                 <div className="card-body">
                                    <div className="row">
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <div className="border-bottom">
                                                <p className="font-weight-bold mb-0 text-black">VAT Number</p>
                                                <p className="text-capitalize">{company_data?.vat_number}</p>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <div className="border-bottom">
                                                <p className="font-weight-bold mb-0 text-black">Hiring Capacity</p>
                                                <p className="text-capitalize">{company_data?.hiring_capacity}</p>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <div className="border-bottom">
                                                <p className="font-weight-bold mb-0 text-black">Notes</p>
                                                <p className="text-capitalize">We need urgent hiring</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>

                                 </div>

                                 <div className="card-body border-bottom border-left">
                                    <div className="row">
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <p className="font-weight-bold mb-0 text-black">Brand Name</p>
                                             <p className="text-capitalize">GlowingSoft</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="card-body  ">
                                    <h4 className="text-nowrap text-black text-capitalize mb-3"><b>Company Contact</b></h4>
                                    <div className="row">
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <div className="border-bottom">
                                                <p className="font-weight-bold mb-0 text-black">Company Name</p>
                                                <p className="text-capitalize">{company_data?.company_name}</p>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <div className="border-bottom">
                                                <p className="font-weight-bold mb-0 text-black">Job Title</p>
                                                <p className="text-capitalize">Bartender</p>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <div className="border-bottom">
                                                <p className="font-weight-bold mb-0 text-black">Mobile Number</p>
                                                <p className="text-capitalize">{company_data?.company_number}</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="card-body">
                                    <div className="row">
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <div className="border-bottom">
                                                <p className="font-weight-bold mb-0 text-black">Telephone Number</p>
                                                <p className="text-capitalize">{company_data?.company_number}</p>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <div className="border-bottom">
                                                <p className="font-weight-bold mb-0 text-black">Email Address</p>
                                                <p className="text-capitalize">Jhondoe@gmail.com</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="card-body border-bottom border-left">
                                    <p className="font-weight-bold mb-0 text-black">Company Description</p>
                                    <p className="text-capitalize">{company_data?.company_description}</p>

                                 </div>

                                 {/* <div className="card-body border-bottom border-left">
                                    <div className="col-lg-4">
                                       <div className="align-items-center">
                                          <h3>Branch Name</h3>
                                          <div className="d-flex gap-2 flex-wrap mt-2">
                                             {company_data?.company_name ? (
                                                <div className="mt-2">
                                                   <p className="btn-md rounded-lg mb-0 p-0 c-pointer"
                                                      onClick={() => handleShowCompanyDetailsModal()}
                                                   >
                                                      {company_data?.company_name}
                                                   </p>
                                                </div>

                                             ) : (
                                                <div className="text-red">No Job Role Found in this Industry*</div>
                                             )}
                                          </div>
                                       </div>
                                    </div>
                                 </div> */}
                                 {/* <h3 className="m-3 mx-4"><b>Venues:</b></h3> */}

                                 <div className="card-body border-bottom border-left">
                                    <h4 className="text-nowrap text-black text-capitalize mb-3"><b>Venues:</b></h4>
                                    <div className="mb-2 align-items-center" style={{ color: '#4d4d4d' }}>
                                       <p className="font-weight-bold mb-0">Venue 1</p>
                                       <p className="mb-0 p-0 c-pointer" onClick={handleShowVenuesModal}>Lahore-Islamabad Motorway, Block E Sabzazar Housing Scheme Phase 1 & 2 Sabzazar, Lahore, Punjab, Pakistan.</p>
                                    </div>
                                 </div>
                                 <div className="card-body border-bottom border-left">
                                    <div className="mb-2 align-items-center" style={{ color: '#4d4d4d' }}>
                                       <p className="font-weight-bold mb-0">Venue 2</p>
                                       <p className="mb-0 p-0 c-pointer" onClick={handleShowVenuesModal}>Lahore-Islamabad Motorway, Block E Sabzazar Housing Scheme Phase 1 & 2 Sabzazar, Lahore, Punjab, Pakistan.</p>
                                    </div>
                                 </div>

                                 <div className="card-body border-bottom border-left">
                                    <div className="row">
                                       <div className="col-12 d-flex justify-content-between">
                                          {/* <h3 className="text-nowrap">My Worker Pool</h3> */}
                                          <h4 className="text-nowrap text-black text-capitalize mb-3"><b>My Worker Pool:</b></h4>
                                          <p className="c-pointer text-success"
                                             onClick={handleShowAllWorkersModal}
                                          >
                                             See all
                                          </p>
                                       </div>
                                    </div>
                                    <div className="d-flex gap-2 overflow-x-auto worker-pool">
                                       {myWorkerPool?.map((mp, idx) => (
                                          <img
                                             key={idx}
                                             src={mp?.image}
                                             alt={mp?.name}
                                             className="rounded-circle c-pointer"
                                             style={{ width: "50px", height: "50px" }}
                                             onClick={() => handleShowWorkerDetailsModal(mp)}
                                          />
                                       ))}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Profile Modal Start */}
               <CustomeModal
                  title="Profile Completion"
                  show={showProfileCompletion}
                  onHide={handleCloseProfileCompletion}
                  content={profileCompletionContent}
               />
               {/* Profile Modal End */}

               {/* Company Details Modal Start */}
               <CustomeModal
                  title="Company Details"
                  show={showCompanyDetailsModal}
                  onHide={handleCloseCompanyDetailsModal}
                  content={companyDetails}
               />
               {/* Company Details Modal End */}

               {/* Venues Modal Start */}
               <CustomeModal
                  title="Venue"
                  show={showVenuesModal}
                  onHide={handleCloseVenuesModal}
                  content={venueDetails}
               />
               {/* Venues Modal End */}

               {/* worker list Modal Start */}
               <CustomeModal
                  title="My Worker Pool"
                  show={showAllWorkerModal}
                  onHide={handleCloseAllWorkersModal}
                  content={allWorkersList}
               />
               {/* worker list Modal End */}

               {/* worker Details Modal Start */}
               <CustomeModal
                  title="Worker Details"
                  show={showWorkerDetailsModal}
                  onHide={handleCloseWorkerDetailsModal}
                  content={workerDetails(selectedWorker)}
               />
               {/* worker Details Modal End */}
            </span>
         )}
      </>
   );
};

export default WorkerProfile;
