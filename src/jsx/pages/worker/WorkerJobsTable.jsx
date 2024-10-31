import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Form, Stack } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { reset, workerJobs } from '../../../features/workers/workerSlice'
import Spinner from '../../components/Spinner'
import CustomeModal from '../../components/customeModal/CustomeModal'
import Nav from "../../layouts/nav"
import nofound from "../../../images/loader/noJobsFound.png"
import PopUp from '../../CommonComponents/popup/PopUp'
import ReactDatePicker from 'react-datepicker'

const WorkerJobsTable = () => {

    const dispatch = useDispatch();
    const { id } = useParams()


    const { workerJob, isLoading, isError, message } = useSelector((state) => state?.workers)

    const [showPopup, setShowPopup] = useState(false)
    const [showPaymentDetails, setShowPaymentDetails] = useState(false)
    const [selectedJob, setSelectedJob] = useState(null)
    const [showJobDetailsModal, setshowJobDetailsModal] = useState(false)
    const [activeButton, setActiveButton] = useState("");
    const [status, setStatus] = useState("completed")
    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 10;
    const pageVisted = pageNumber;

    const [startDatePicker, setStartDatePicker] = useState(null);
    const [dueDate, setDueDate] = useState(null);



    const [selectedFrom, setSelectedFrom] = useState('From');
    const [selectedTo, setSelectedTo] = useState('To');
    const [selectedOffers, setSelectedOffers] = useState('Offers');

    const handleSelectFrom = (eventKey) => {
        setSelectedFrom(eventKey);
    };

    const handleSelectTo = (eventKey) => {
        setSelectedTo(eventKey);
    };

    const handleSelectOffers = (eventKey) => {
        setSelectedOffers(eventKey);
    };
    let pageCount;
    const total_pages = workerJob?.total_pages0
    const jobsList = workerJob?.body?.jobs
    const topOptions = workerJob?.body?.top_options

    const handleShowJobDetailsModal = (job) => {
        setSelectedJob(job)
        setshowJobDetailsModal(true)
    }

    const handleCloseJobDetailsModal = () => {
        setshowJobDetailsModal(false)
        setshowJobDetailsModal(null)
    }

    const handleShowMoreClick = () => setShowPaymentDetails(!showPaymentDetails)

    const handleShowPopup = () => setShowPopup(true)
    const handleClosePopup = () => setShowPopup(false)

    const popUpContent = (
        <Stack>
            <p className='text-black'>Please update the "Hospitality" date/time. Posting a job is not allowed for previous dates/within the next 30 minutes.</p>
        </Stack>
    )

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const jobSummary = (job) => (
        <Stack gap={3}>
            <div className='border-bottom'>
                <p className="font-weight-bold mb-2 text-black">Venue</p>
                <p className="text-capitalize mb-3">{job?.summary.venue.title}</p>
            </div>

            <div className='border-bottom'>
                <p className="font-weight-bold mb-2 text-black">Industry</p>
                <Button
                    type="button"
                    className="btn-sm mb-3"
                    style={{ color: "white", borderRadius: "1.3rem" }}
                    variant="success"
                >
                    {job?.summary?.industry?.title}
                </Button>
            </div>

            <div className='border-bottom'>
                <p className="font-weight-bold mb-2 text-black">Job Roles</p>
                <Button
                    type="button"
                    className="btn-sm mb-3"
                    style={{ color: "white", borderRadius: "1.3rem" }}
                    variant="success"
                >
                    {job?.summary?.jobrole.title}
                </Button>
            </div>

            <div className='border-bottom'>
                <p className="font-weight-bold mb-2 text-black">Skills</p>
                <div className='d-flex flex-wrap gap-1'>
                    {job?.summary?.j_skill.filter(skill => skill.is_active).map((skill) => (
                        <Button
                            key={skill?._id}
                            type="button"
                            className="btn-sm mb-3"
                            style={{ color: "white", borderRadius: "1.3rem" }}
                            variant="success"
                        >
                            {skill?.title}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="border-bottom">
                <p className="font-weight-bold mb-2 text-black">Date & Time</p>
                <div>
                    {job?.summary?.datetime.datetime.map((dt, i) => (
                        <div key={i} className='d-flex justify-content-around align-items-center px-2 rounded-xl mb-1' style={{ backgroundColor: "#edf2f4" }}>
                            <p className="text-capitalize mb-0 fs-13">{dt.start_date}</p>
                            <p className="text-capitalize mb-0 fs-13">-</p>
                            <p className="text-capitalize mb-0 fs-13">{dt.end_date}</p>
                        </div>
                    ))}
                    <p className="font-weight-bold text-right text-success">Show all</p>

                </div>
            </div>

            <div className="border-bottom">
                <p className="font-weight-bold mb-2 text-black">Additional Details</p>
                <div className='d-flex' style={{ gap: "11rem" }}>
                    <div>
                        <div>
                            <h6 className="font-weight-bold d-flex flex-column mb-1">Rate p/h</h6>
                            <p>£{job?.summary?.rate}</p>
                        </div>

                        <div>
                            <h6 className="font-weight-bold d-flex flex-column mb-1">Break Times</h6>
                            <p>{job?.summary?.break_time}</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h6 className="font-weight-bold d-flex flex-column mb-1">PO Number</h6>
                            <p>{job?.summary?.po_number}</p>
                        </div>

                        <div>
                            <h6 className="font-weight-bold d-flex flex-column mb-1">Break Paid</h6>
                            <p>{job?.summary?.break_paid ? "Yes" : "No"}</p>
                        </div>
                    </div>
                </div>

                <div className='d-flex align-items-center mb-3' style={{ gap: "5.9rem" }}>
                    <h6 className="font-weight-bold d-flex flex-column mb-0">Health & Safety issues?</h6>
                    <p className='mb-0'>{job?.summary.health_safety ? "Yes" : "No"}</p>
                </div>

                <div className='mb-4'>
                    <h6 className="font-weight-bold d-flex flex-column mb-2">Health & Safety Instructions</h6>
                    <p className='px-2 rounded-xl py-2' style={{ backgroundColor: "#edf2f4" }}>{job?.summary.hs_description}</p>
                </div>

                <div className=''>
                    <h6 className="font-weight-bold d-flex flex-column mb-2">Job Description</h6>
                    <p className='px-2 rounded-xl py-2' style={{ backgroundColor: "#edf2f4" }}>{job?.summary?.description}</p>
                </div>
            </div>

            <div className='border-bottom'>
                <h6 className="font-weight-bold d-flex flex-column mb-2">Job Uniform</h6>
                <div className='d-flex gap-3 align-items-center mb-4'>
                    <img src={job?.summary?.uniform?.image} alt="img" height={70} width={70} />
                    <p>{job?.summary?.uniform?.description}</p>
                </div>
            </div>

            <div className='border-bottom'>
                <h6 className="font-weight-bold d-flex flex-column mb-1">Uploads</h6>
                {job?.summary?.job_uploads.map((upload) => (
                    <p key={upload?._id}>{upload.file}</p>
                ))}
            </div>

            <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h6 className="font-weight-bold d-flex flex-column mb-0">Payment Details</h6>
                    <p
                        className="font-weight-bold text-right mb-0 c-pointer text-success"
                        style={{ color: "#2FE6DE" }}
                        onClick={handleShowMoreClick}>
                        {showPaymentDetails ? "Show less" : "Show more"}
                    </p>
                </div>
                {showPaymentDetails && (
                    <div className='d-flex' style={{ gap: "11rem" }}>
                        <div>
                            <div>
                                <h6 className="font-weight-bold d-flex flex-column mb-2">Total Hrs</h6>
                                <p className="btn-md mb-3 px-5 py-2" style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4" }}>{job?.summary?.total_hours}</p>
                            </div>

                            <div>
                                <h6 className="font-weight-bold d-flex flex-column mb-2">VAT %</h6>
                                <p className="btn-md mb-3 px-5 py-2" style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4" }}>{job?.summary?.VAT}</p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h6 className="font-weight-bold d-flex flex-column mb-2">NI %</h6>
                                <p className="btn-md mb-3 px-5 py-2" style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4" }}>{job?.summary?.NI}</p>
                            </div>

                            <div>
                                <h6 className="font-weight-bold d-flex flex-column mb-2">Fee %</h6>
                                <p className="btn-md mb-3 px-5 py-2" style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4" }}>{job?.summary?.FEE}</p>
                            </div>
                        </div>
                    </div>
                )}
                <div className='d-flex gap-5 align-items-center'>
                    <h6 className="font-weight-bold d-flex flex-column mb-0">Total Payment</h6>
                    <i className="fa-solid fa-circle-info fs-5 c-pointer text-success" onClick={handleShowPopup}></i>
                </div>
                <p className='mb-0'>£{job?.summary?.total_payment}</p>
                <PopUp
                    title="Info"
                    show={showPopup}
                    onHide={handleClosePopup}
                    content={popUpContent}
                />
            </div>
        </Stack>
    )

    useEffect(() => { setActiveButton(status) }, [status])

    useEffect(() => {
        if (!jobsList) {
            toast.error(workerJob?.message);
        }
        dispatch(workerJobs({ id: id, status: status, pageno: 1 }));
        return () => reset();
    }, [isError, message, dispatch, id, status]);

    const handleStatusClick = (status) => {
        setStatus(status);
        setActiveButton(status)
        dispatch(workerJobs({ id: id, status: status, pageno: 1 }));
    };


    const getWorkr = () => {
        pageCount = total_pages;
        return jobsList?.map((job, idx) => {
            return (
                <tr key={idx} role="row" className="odd">
                    <td>{0 + 1 + (pageNumber === 0 ? 0 : pageNumber * 10)}</td>
                    <td>
                        <div className="media">
                            <div className="text-nowrap">
                                <div className='d-flex gap-2 align-items-center'>
                                    {/* <img src={job?.employer_image} height={35} width={35} alt={job?.employer_name} className='rounded-circle' onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = `${process.env.REACT_APP_IMAGEBASEURL}noImg.png`;
                                    }} /> */}
                                    <h6 className='mb-0'>{job.employer_name}</h6>
                                </div>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="media">
                            <div className="text-nowrap">
                                <h6 className='mb-0'>{job.industry.title}</h6>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="media">
                            <div className="text-nowrap">
                                <h6 className='mb-0 text-capitalize'>
                                    {job.company.company_name}
                                </h6>
                            </div>
                        </div>
                    </td>
                    {/* <td>
                        <div className="media">
                            <div className="text-nowrap">
                                <div className="text-black font-w600 fs-16 mb-0">
                                    <h6 className='mb-0'>{job.jobrole.title}</h6>
                                </div>
                            </div>
                        </div>
                    </td> */}
                    <td>
                        <div className="media">
                            <div className="media-body">
                                <div>
                                    <h6 className='mb-0'>{job.venue.address.line1}</h6>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="media">
                            <div className="media-body text-nowrap">
                                <h6 className='mb-0'>{job.start_date}</h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="media">
                            <div className="media-body text-nowrap">
                                <h6 className='mb-0'>{job.end_date}</h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="d-flex align-items-center">
                            <h6 className='mb-0 text-capitalize '>{job.status}</h6>
                        </div>
                    </td>
                    <td>

                        <i className="fa fa-eye fa-2x mx-3 text-success pe-auto " onClick={() => handleShowJobDetailsModal(job)} />

                    </td>
                </tr>
            );
        })
    };

    const changePage = async (data) => {
        dispatch(workerJobs(data.selected + 1))
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
                                    <div className="col-xl-6 col-lg-4 mb-2">
                                        <h1 className="text-black fs-35 font-w600 ">
                                            Jobs
                                        </h1>
                                        <h6 className="fs-16 mb-1">
                                            {(pageVisted + userPerPage > total_pages
                                                ? total_pages
                                                : pageVisted + userPerPage) - pageVisted}
                                            {" "} Rows per page
                                        </h6>
                                        {/* <span className="fs-14">Based your preferences</span> */}
                                    </div>
                                    <div className="col-lg-6 col-sm-12 mb-2 ">
                                        <Form className="d-flex gap-2 justify-content-end">
                                            <div className="date-picker-container d-flex">

                                                <ReactDatePicker
                                                    selected={startDatePicker}
                                                    onChange={(date) => setStartDatePicker(date)}
                                                    className="form-control rounded-3 border-dark w-75 custom-dropdown-toggle bg-transparent float-end"
                                                    dateFormat="dd/MM/yyyy"
                                                    placeholderText="From"
                                                />
                                            </div>

                                            <div className="date-picker-container">
                                                <ReactDatePicker
                                                    selected={dueDate}
                                                    onChange={(date) => setDueDate(date)}
                                                    className="form-control rounded-3 border-dark w-75 custom-dropdown-toggle bg-transparent  float-start mx-3"
                                                    dateFormat="dd/MM/yyyy"
                                                    placeholderText="To"
                                                />
                                            </div>


                                            <Dropdown onSelect={handleSelectOffers} className="flex-grow-1" style={{ maxWidth: '200px' }}>
                                                <Dropdown.Toggle id="dropdown-offers" className=" rounded-4 border-dark w-100 custom-dropdown-toggle bg-transparent text-success float-start">
                                                    <span className="text-black">{selectedOffers}</span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey="Offers">Offers</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Hired">Hired</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Ongoing">Ongoing</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Complete">Complete</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Not Hired">Not Hired</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Declined">Declined</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form>
                                    </div>
                                    {/* <div className="col-xl-9 col-lg-8 d-flex flex-wrap">
                                        <div className='d-flex gap-3 align-items-center'>
                                            {topOptions?.map((options, idx) => (
                                                <Button
                                                    key={idx}
                                                    className={`btn-rounded mb-2 ${activeButton === options.status ? 'active' : ''}`}
                                                    variant="outline-primary"
                                                    type='button'
                                                    onClick={() => handleStatusClick(options.status)}
                                                >
                                                    {options?.name}
                                                </Button>
                                            ))}
                                        </div>
                                    </div> */}
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
                                                                style={{ width: 150, backgroundColor: '#00B094', color: 'white' }}
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
                                                                style={{ width: 116, backgroundColor: '#00B094', color: 'white' }}
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
                                                                style={{ width: 116, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Industry
                                                            </th>
                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Type: activate to sort column ascending"
                                                                style={{ width: 87, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Job Roles
                                                            </th>
                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Contact: activate to sort column ascending"
                                                                style={{ width: 400, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Address
                                                            </th>
                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Status: activate to sort column ascending"
                                                                style={{ width: 164, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Start Date & Time
                                                            </th>


                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Date Applied: activate to sort column ascending"
                                                                style={{ width: 124, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                End Date & Time
                                                            </th>

                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Status: activate to sort column ascending"
                                                                style={{ width: 164, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Rate/PH
                                                            </th>
                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Status: activate to sort column ascending"
                                                                style={{ width: 164, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Action
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            jobsList ? getWorkr() : (
                                                                <tr>
                                                                    <td colSpan="10" className="text-center text-red">
                                                                        <img src={nofound} alt={nofound} width="30%" height="30%" />
                                                                    </td>
                                                                </tr>
                                                            )
                                                        }
                                                    </tbody>
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
                                                            forcePage={"pageNumber"}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div >
                </span >
            )}

            {/* Job modal */}
            <CustomeModal
                title="Job Summary"
                show={showJobDetailsModal}
                onHide={handleCloseJobDetailsModal}
                content={(jobSummary(selectedJob))}
            />
        </>
    )
}

export default WorkerJobsTable
