import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { profileId, reset, workerAvailibility } from "../../../features/workers/workerSlice";
import { Button, Modal, Stack, Form } from "react-bootstrap";
import Nav from "../../layouts/nav";
import Spinner from "../../components/Spinner";
import CustomeModal from "../../components/customeModal/CustomeModal";


const WorkerProfile = () => {
   const [showProfileCompletion, setShowProfileCompletion] = useState(false);
   const [showWorkExperience, setShowWorkExperience] = useState(false);
   const [showWorkExpDetails, setShowWorkExpDetails] = useState(false);
   const [showUploadModal, setSetshowUploadModal] = useState(false)
   const [showWorkerAvailModal, setShowWorkerAvailModal] = useState(false)

   const [selectedCompany, setSelectedCompany] = useState(null);
   const [selectedDay, setSelectedDay] = useState(null);

   const [activeButton, setActiveButton] = useState(0);
   const [activeJobRoleButton, setActiveJobRoleButton] = useState(0);

   // Profile Completion Modal Functions
   const handleCloseProfileCompletion = () => setShowProfileCompletion(false);
   const handleShowProfileCompletion = () => setShowProfileCompletion(true);

   // work exp modal functions
   const handleCloseWorkExperience = () => setShowWorkExperience(false);
   const handleShowWorkExperience = () => setShowWorkExperience(true);

   // Upload Modal Functions
   const handleShowUploadModal = () => setSetshowUploadModal(true);
   const handleCloseUploadModal = () => setSetshowUploadModal(false);

   // Work Experience Details Modals Functions
   const handleShowWorkExpDetails = (company) => {
      setSelectedCompany(company)
      setShowWorkExpDetails(true);
   }
   const handleCloseWorkExpDetails = () => {
      setShowWorkExpDetails(false)
      setSelectedCompany(null)
   }

   const handleShowWorkerAvailModal = (day) => {
      setSelectedDay(day)
      setShowWorkerAvailModal(true)
   }
   const handleCloseWorkerAvailModal = () => {
      setShowWorkerAvailModal(false)
      setSelectedDay(null)
   }

   const { id } = useParams();
   const [selectedIndustry, setSelectedIndustry] = useState(null);
   const [selectedJobRole, setSelectedJobRole] = useState(null);

   const handleIndustryClick = (indus) => {
      setActiveButton(indus)
      setSelectedIndustry(indus);
      setSelectedJobRole(indus.jobroledata[0])
      setActiveJobRoleButton(indus?.jobroledata[0]);
   };

   const handleJobRoleClick = (jrole) => {
      setActiveJobRoleButton(jrole)
      setSelectedJobRole(jrole);
   };

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { user } = useSelector((state) => state.auth);
   const { workers, isLoading, isError, message, workerAvail } = useSelector((state) => state.workers);

   useEffect(() => {
      if (isError) {
         toast.error(message);
      }
      if (!user) {
         navigate("/login");
      }
      dispatch(profileId(id));
      dispatch(workerAvailibility(id))
      return () => reset();
   }, [user, navigate, isError, message, dispatch, id]);

   const profile_completion = workers?.body?.profile_completion;
   const workerExperience = workers?.body?.experience;
   const industries = workers?.body?.industries;
   const languages = workers?.body?.languages;
   const worker_availablility = workers?.body?.worker_availablility;
   const uploads = workers?.body?.uploads;
   const workAvailibilityTime = workerAvail?.body

   // Filter the uplaoded files according to their types
   const cvFiles = uploads?.filter((upload) => upload.type === 'cv');
   const videos = uploads?.filter((upload) => upload.type === 'video');
   const docs = uploads?.filter((upload) => upload.type === 'document');

   useEffect(() => {
      if (industries?.length > 0) {
         setSelectedIndustry(industries[0]);
         setActiveButton(industries[0])
      }
      if (industries?.length > 0 && industries[0]?.jobroledata?.length > 0) {
         setSelectedJobRole(industries[0]?.jobroledata[0]);
         setActiveJobRoleButton(industries[0]?.jobroledata[0])
      }
   }, [industries]);

   const workExpDetail = (workExper) => (
      <Stack gap={3}>
         <div>
            <p className="font-weight-bold mb-0 text-black">Name</p>
            <p className="text-capitalize mb-1">{workExper?.company_name}</p>
         </div>

         <div>
            <p className="font-weight-bold mb-0 text-black">Job Role</p>
            <p className="text-capitalize mb-1">{workExper?.jobrole?.title}</p>
         </div>

         <div>
            <p className="font-weight-bold mb-0 text-black">Job Description</p>
            <p className="mb-1 text-capitalize">{workExper?.job_description}</p>
         </div>

         <div>
            <p className="font-weight-bold mb-0 text-black">Start Date</p>
            <p className="text-capitalize mb-1">{workExper?.start_date}</p>
         </div>

         <div>
            <p className="font-weight-bold mb-0 text-black">End Date</p>
            <p className="text-capitalize mb-1">{workExper?.end_date}</p>
         </div>

         <p className="my-3 font-weight-bold" style={{ color: "#2FE6DE" }}>References</p>

         <div className="">
            <p className="font-weight-bold mb-0 text-black">Name</p>
            <p className="text-capitalize mb-1">{workers?.body?.name}</p>
         </div>

         <div className="">
            <p className="font-weight-bold mb-0 text-black">Contact Number</p>
            <p className="text-capitalize mb-1">{workers?.body?.workerdata?.mobile}</p>
         </div>

         <div className="">
            <p className="font-weight-bold mb-0 text-black">Email Address</p>
            <p className="text-capitalize mb-1">{workers?.body?.email}</p>
         </div>
      </Stack>
   )

   const uploadContent = (
      <Stack>
         <div className="mb-5">
            <p className="border-bottom mb-2">Upload CV</p>
            {cvFiles?.map((cv) => (
               <div className="d-flex justify-content-between" key={cv?._id}>
                  <a className="text-black" href={cv.file} download>{cv.name}</a>
                  <i class="fa-solid fa-trash" style={{ color: "#2fe6de" }}></i>
               </div>
            ))}
         </div>

         <div className="mb-5">
            <p className="border-bottom mb-2">Upload Video</p>
            {videos?.map((vid) => (
               <div className="d-flex justify-content-between" key={vid?._id}>
                  <a className="text-black" href={vid.file} download><i className="fa-brands fa-youtube mr-2" style={{ color: "#2fe6de" }}></i>{vid.name}</a>
                  <i class="fa-solid fa-trash" style={{ color: "#2fe6de" }}></i>
               </div>
            ))}
         </div>

         <div className="mb-5">
            <p className="border-bottom mb-2">Upload Documents</p>
            {docs?.map((doc) => (
               <div className="d-flex justify-content-between" key={doc?._id}>
                  <a className="text-black" href={doc.file} download><i className="fa-brands fa-youtube mr-2" style={{ color: "#2fe6de" }}></i>{doc.name}</a>
                  <i class="fa-solid fa-trash" style={{ color: "#2fe6de" }}></i>
               </div>
            ))}
         </div>
      </Stack>
   )

   const mappedAvailability = worker_availablility?.map((workerDay) => {
      const filter = workAvailibilityTime?.filter((fil) => fil?.availability)

      const availabilityDay = filter && filter[0]?.availability?.find((availDay) => availDay?.title === workerDay?.title);

      if (availabilityDay) {
         const selectedTimes = availabilityDay?.time?.filter((timeSlot) => timeSlot?.is_selected === true);

         return {
            ...workerDay,
            time: selectedTimes,
         };
      }
      // If no matching availability, return the worker_day with an empty time array
      return {
         ...workerDay,
         time: [],
      };
   });

   const getTimeAccordingDays = (day) => (
      <Stack>
         <h4 className="font-weight-bold text-center mb-3">Available Days</h4>
         <div className="mb-4">
            <div>Morning 06:00 - 14:00</div>
            <div>Evening 14:00 - 22:00</div>
            <div>Night 22:00 - 06:00</div>
         </div>

         {
            mappedAvailability?.map((availability, idx) => (
               <div className="mb-4" key={idx}>
                  <h6 className="font-weight-bold mb-1">{availability?.title}</h6>
                  <Button
                     type="button"
                     className="btn-md rounded-3 text-light"
                     variant="primary"
                  >
                     {availability?.time[0]?.title}
                  </Button>
               </div>
            ))
         }
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
                        <h2 className="text-black font-w600 mr-auto mb-0 pr-3 text-capitalize">Worker Profile</h2>
                        <Link to={`/worker/${id}/jobs`}>
                           <Button variant="success" size="md" className="rounded-pill">
                              See Jobs
                           </Button>
                        </Link>
                     </div>
                     <div className="col-xl-12 col-xxl-12 col-lg-12">
                        <div className="row">
                           <div className="col-xl-12 col-lg-6">
                              <div className="card flex-lg-column flex-md-row ">
                                 <div className="d-flex justify-content-between align-items-center  card-body border-bottom">
                                    {/* <h1 className="text-black font-w600 mr-auto my-0 py-0 pr-3">Profile</h1> */}
                                    <h2 className="text-black font-w700 mr-auto mb-0 text-capitalize">Profile</h2>
                                    <h3 className=" c-pointer" onClick={handleShowProfileCompletion} style={{ color: '#00B094' }}><b>{profile_completion?.percentage}%</b></h3>
                                 </div>
                                 <div className=" card-body profile-bx">
                                    {/* <i class="fa-solid fa-arrow-left-long "></i> */}
                                    <Link to="/Workers"><i class="fa-solid fa-chevron-left text-success text-left"></i></Link>
                                    <div className="profile-image text-center p-0">
                                       <img src={workers?.body?.image} className="rounded-circle" alt="" />
                                    </div>
                                    <div className="text-center">
                                       {/* <i className="fa fa-camera ml-10 fs-24 text-center" style={{ color: '#20117a' }} data-toggle="modal"
                                          data-target="#staticBackdrop"></i> */}
                                       <h2 className="text-center text-success mt-3"><b>{workers?.body?.name}</b></h2>
                                    </div>
                                 </div>
                                 <div className="card-body border-left">
                                    <h4 className="text-nowrap my-4 text-black text-capitalize"><b>About</b></h4>
                                    <Form>
                                       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                          <Form.Control
                                             as="textarea"
                                             rows={5}
                                             defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                          />
                                       </Form.Group>
                                    </Form>

                                 </div>
                                 {/* <h4 className="text-nowrap text-black text-capitalize my-0 mx-4"><b>Personal Details</b></h4> */}
                                 <div className="d-flex justify-content-between mx-4 ">
                                    <h4 className="text-nowrap text-black text-capitalize "><b>Personal Details</b></h4>
                                    <p className="text-capitalize text-success"><b>See More</b> </p>
                                 </div>
                                 <div className="card-body border-bottom border-left text-black mt-0 pt-0">
                                    <div className="row">
                                       <div className="col-8">
                                          <p className="font-weight-bold mb-0 text-black">Full Name</p>
                                          <p className="text-capitalize">Micheal Moore </p>
                                       </div>
                                    </div>

                                 </div>

                                 {/* <h3 className="m-3 mx-4"><b>Personal Details:</b></h3> */}
                                 <div className="card-body border-bottom border-left">
                                    <div className="row">
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <p className="font-weight-bold mb-0 text-black">DOB</p>
                                             <p className="text-capitalize">12th May 2000 </p>
                                          </div>
                                       </div>
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <p className="font-weight-bold mb-0 text-black">Email Address</p>
                                             <p className="text-capitalize">michaelmoore1@gmail.com </p>
                                          </div>
                                       </div>
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <p className="font-weight-bold mb-0 text-black">Overall Ratings</p>
                                             <p className="text-capitalize">4 </p>
                                          </div>
                                       </div>
                                    </div>

                                 </div>

                                 <div className="card-body border-bottom border-left">
                                    <div className="row">
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <p className="font-weight-bold mb-0 text-black">Address</p>
                                             <p className="text-capitalize">913-Phils Street, United Kingdom </p>
                                          </div>
                                       </div>
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <p className="font-weight-bold mb-0 text-black">Mobile Number</p>
                                             <p className="text-capitalize">+44 1121211111 </p>
                                          </div>
                                       </div>
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <p className="font-weight-bold mb-0 text-black">Telephone Number</p>
                                             <p className="text-capitalize">+44 1121211111</p>
                                          </div>
                                       </div>
                                    </div>

                                 </div>

                                 {/* <div className="card-body border-bottom border-left">
                                    <div className="row">
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                          <p className="font-weight-bold mb-0 text-black">Full Name</p>
                                          <p className="text-capitalize">Michael Moore</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div> */}

                                 {/* <h3 className="m-3 mx-4"><b>Company Contact:</b></h3> */}

                                 <div className="card-body border-bottom border-left">
                                    <h4 className="text-nowrap text-black text-capitalize my-2"><b>Next of Kin</b></h4>
                                    <div className="row">
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <p className="font-weight-bold mb-0 text-black">Full Name</p>
                                             <p className="text-capitalize">Michael Moore </p>
                                          </div>
                                       </div>
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <p className="font-weight-bold mb-0 text-black">DOB</p>
                                             <p className="text-capitalize">12th May 2000</p>
                                          </div>
                                       </div>
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <p className="font-weight-bold mb-0 text-black">Relationship</p>
                                             <p className="text-capitalize">Brother </p>
                                          </div>
                                       </div>
                                    </div>

                                 </div>

                                 <div className="card-body border-bottom border-left">
                                    <div className="row">
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <p className="font-weight-bold mb-0 text-black">Address</p>
                                             <p className="text-capitalize">913-Phils Street, United Kingdom </p>
                                          </div>
                                       </div>
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <p className="font-weight-bold mb-0 text-black">Mobile Number</p>
                                             <p className="text-capitalize">+44 1121211111</p>
                                          </div>
                                       </div>
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <p className="font-weight-bold mb-0 text-black">Email Address</p>
                                             <p className="text-capitalize">Jhondoe@gmail.com</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="card-body border-bottom border-left">
                                    <div className="row">
                                       <div className="col-lg-4">
                                          <div className="align-items-center">
                                             <p className="font-weight-bold mb-0 text-black">Telephone Number</p>
                                             <p className="text-capitalize">+44 1121211111 </p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="card-body border-bottom border-left">

                                    <div className="row">
                                       <div className="col-8">
                                          <h4 className="text-nowrap text-black text-capitalize"><b>Work Experience</b></h4>
                                       </div>
                                    </div>
                                    {workerExperience?.length > 0 ? (<p className="c-pointer d-flex gap-3 align-items-center mb-0" onClick={handleShowWorkExperience}>
                                       {workerExperience && workerExperience[0]?.company_name}
                                       {workerExperience?.length > 0 && <span className="rounded px-2 py-0" style={{ background: "#2E294E", color: "white" }}>{workerExperience?.length}</span>}
                                    </p>
                                    ) : (
                                       <p className="text-red">No Experience</p>
                                    )}
                                 </div>
                                 <div className="card-body border-bottom border-left">
                                    <div className="row">
                                       <div className="col-8">
                                          <h4 className="text-nowrap text-black text-capitalize"><b>Languages</b></h4>

                                       </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 mt-2">
                                       {languages?.length > 0 ? languages?.map((lang, idx) => (
                                          <p key={idx} className="rounded-4 px-3 py-1 border border-3 mb-0">{lang?.name}</p>
                                       )
                                       ) : (
                                          <p className="mb-0 text-red">No Language Added</p>
                                       )}
                                    </div>
                                 </div>
                                 <div className="card-body border-bottom border-left">
                                    <div className="mb-3 align-items-center">
                                       {/* <h3>Industry</h3> */}
                                       <h4 className="text-nowrap text-black text-capitalize"><b>Industry</b></h4>
                                       <div className="d-flex gap-2 flex-wrap mt-2">
                                          {industries?.map((data, index) => (
                                             <div className="mt-3" key={index}>
                                                <Button
                                                   onClick={() => handleIndustryClick(data)}
                                                   type="button"
                                                   className={`btn-md rounded-3 ${activeButton === data ? 'active' : ''}`}
                                                   variant="outline-primary"
                                                >
                                                   {data?.title}
                                                </Button>
                                             </div>
                                          ))}
                                       </div>
                                    </div>
                                 </div>
                                 <div className="card-body border-bottom border-left">
                                    <div className="align-items-center">
                                       {/* <h3>Job Roles</h3> */}
                                       <h4 className="text-nowrap text-black text-capitalize"><b>Job Roles</b></h4>
                                       <div className="d-flex gap-2 flex-wrap mt-2">
                                          {selectedIndustry && selectedIndustry?.jobroledata?.length > 0 ? (
                                             selectedIndustry?.jobroledata?.map((data, index) => (
                                                <div className="mt-3" key={index}>
                                                   <Button
                                                      type="button"
                                                      onClick={() => handleJobRoleClick(data)}
                                                      className={`btn-md rounded-3`}
                                                      variant="primary"
                                                   >
                                                      {data?.jobrole?.title}
                                                   </Button>
                                                </div>
                                             ))
                                          ) : (
                                             <div className="text-red">No Job Role Found in this Industry*</div>
                                          )}
                                       </div>
                                    </div>
                                 </div>
                                 <div className="card-body border-bottom border-left">
                                    <div className="mb-3 align-items-center">
                                       <h4 className="text-nowrap text-black text-capitalize"><b>Skills</b></h4>
                                       <div className="d-flex gap-2 flex-wrap mt-2">
                                          {(selectedJobRole && selectedIndustry?.jobroledata?.length > 0) &&
                                             selectedJobRole?.skills?.length > 0 ? (
                                             selectedJobRole?.skills?.map((data, index) => (
                                                <div className="mt-3" key={index}>
                                                   <button
                                                      type="button"
                                                      className="btn btn-primary btn-md rounded-3 text-light"
                                                   >
                                                      {data?.title}
                                                   </button>
                                                </div>
                                             ))
                                          ) : (
                                             <div className="text-red">No Skill Found in this Industry*</div>
                                          )}
                                       </div>
                                    </div>
                                 </div>

                                 <div className="card-body border-bottom border-left">
                                    <div className="row">
                                       <div className="col-8">
                                          <h4 className="text-nowrap text-black text-capitalize"><b>Upload</b></h4>
                                       </div>
                                    </div>
                                    <p className="mb-0 c-pointer" onClick={handleShowUploadModal}>
                                       {uploads?.length > 0 && uploads[0]?.name}
                                       {uploads?.length > 0 && <span className="ml-3 rounded px-2 py-1" style={{ background: "#2E294E", color: "white" }}>{uploads?.length}</span>}
                                    </p>
                                 </div>
                                 <div className="card-body border-bottom border-left">
                                    <div className="mb-3 align-items-center">
                                       <h4 className="text-nowrap text-black text-capitalize"><b>Availability</b></h4>
                                       <div className="d-flex flex-wrap align-items-center gap-3">
                                          {worker_availablility && worker_availablility?.map((workavail, idx) => (
                                             <p key={idx} onClick={() => handleShowWorkerAvailModal(workavail)} className="rounded-3 px-3 py-1 border border-3 mb-0 c-pointer">{workavail?.title}</p>
                                          ))}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* ========PROFILE PERCENT MODAL START========== */}
               <Modal show={showProfileCompletion} onHide={handleCloseProfileCompletion} centered>
                  <Modal.Header closeButton >
                     <Modal.Title><b>Profile Completion</b></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     {profile_completion?.completion_data.map((item, index) => (
                        <div className="row my-3" key={index}>
                           <div className="col-6">
                              <h4>{item.title}</h4>
                           </div>
                           <div className="col-4">
                              <h4>{item.value}</h4>
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
                  </Modal.Body>
               </Modal>

               {/* ========PROFILE PERCENT MODAL END========== */}

               {/* ========WORK EXPERIENCE MODAL START========== */}
               <Modal show={showWorkExperience} onHide={handleCloseWorkExperience} centered>
                  <Modal.Header closeButton>
                     <Modal.Title><b>Work Experience</b></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     {workerExperience?.length > 0 &&
                        workerExperience?.map((workExp, idx) => (
                           <div className="border-bottom" key={idx}>
                              <div className="col-6 font-weight-bolder text-capitalize px-0">
                                 <h4
                                    className="my-4 c-pointer text-black font-weight-bold"
                                    onClick={() => handleShowWorkExpDetails(workExp)}
                                 >
                                    {workExp?.company_name}
                                 </h4>
                              </div>
                              <CustomeModal
                                 title="Experience Details"
                                 show={showWorkExpDetails}
                                 onHide={handleCloseWorkExpDetails}
                                 content={workExpDetail(selectedCompany)}
                              />
                           </div>
                        ))
                     }

                  </Modal.Body>
               </Modal>
               {/* ========WORK EXPERIENCE MODAL END========== */}

               {/* ========UPLOAD MODAL START========== */}
               <CustomeModal
                  title="Uploads"
                  show={showUploadModal}
                  onHide={handleCloseUploadModal}
                  content={uploadContent}
               />
               {/* ========UPLOAD MODAL END========== */}

               {/* ======== Worker Availiliblity MODAL START========== */}
               <CustomeModal
                  title="Availibility"
                  show={showWorkerAvailModal}
                  onHide={handleCloseWorkerAvailModal}
                  content={getTimeAccordingDays(selectedDay)}
               />
               {/* ======== Worker Availiliblity MODAL END========== */}



            </span>
         )}
      </>
   );
};

export default WorkerProfile;
