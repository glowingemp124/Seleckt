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
import workerImage from "../../../images/avatar/1.jpg"
import PopUp from '../../CommonComponents/popup/PopUp'
import ReactDatePicker from 'react-datepicker'

const WorkerSeeAllJobs = () => {

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
            <div className="border-bottom text-black">
                <div className='text-center'>
                    <img src={workerImage} alt={workerImage} className='rounded-circle' width="100" />
                </div>
                <h6 className=" mb-2 text-black">Venue:</h6>
                <p className="text-capitalize mb-3 text-black">New Test Address Office</p>
            </div>

            <div className="border-bottom">
                <h6 className=" mb-2 text-black">Industry:</h6>
                <Button
                    type="button"
                    className="btn-sm mb-3 rounded-4"
                    variant="success"
                >
                    Hospitality
                </Button>
            </div>

            <div className="border-bottom">
                <h6 className="mb-2 text-black">Job Roles:</h6>
                <Button
                    type="button"
                    className="btn-sm mb-3 rounded-4"
                    variant="success"
                >
                    Waiting Staff
                </Button>
            </div>

            <div className="border-bottom">
                <h6 className=" mb-2 text-black">Skills:</h6>
                <div className="d-flex flex-wrap gap-1">
                    <Button
                        type="button"
                        className="btn-sm mb-3 rounded-4"
                        variant="success"
                    >
                        Event Waiter
                    </Button>
                </div>
            </div>

            <div className="border-bottom">
                <div className='d-flex justify-content-between my-3'>
                    <h6 className="mb-2 text-black">Date & Time:</h6>
                    <p className=" text-right text-success">Show all</p>
                </div>
                <div>
                    <div className="d-flex mt-3">
                        <p className="text-capitalize mb-0 fs-13"><i class="fa-regular fa-calendar text-black mx-1"></i> 06/03/2024 09:00</p>
                        <p className="text-capitalize mb-0 fs-13 mx-2">-</p>
                        <p className="text-capitalize mb-0 fs-13">13/03/2024 17:00</p>
                    </div>
                    <div className="d-flex mb-3 mt-2">
                        <p className="text-capitalize mb-0 fs-13"><b>Break:</b>  0.00mins</p>
                        <p className="text-capitalize mb-0 fs-13 mx-2"></p>
                        <p className="text-capitalize mb-0 fs-13">Paid / <span className='text-danger'>Unpaid</span></p>
                    </div>
                </div>
                <div>
                    <div className="d-flex mt-3">
                        <p className="text-capitalize mb-0 fs-13"><i class="fa-regular fa-calendar text-black mx-1"></i> 06/03/2024 09:00</p>
                        <p className="text-capitalize mb-0 fs-13 mx-2">-</p>
                        <p className="text-capitalize mb-0 fs-13">13/03/2024 17:00</p>
                    </div>
                    <div className="d-flex mb-3 mt-2">
                        <p className="text-capitalize mb-0 fs-13"><b>Break:</b>  0.00mins</p>
                        <p className="text-capitalize mb-0 fs-13 mx-2"></p>
                        <p className="text-capitalize mb-0 fs-13">Paid / <span className='text-danger'>Unpaid</span></p>
                    </div>
                </div>
                <div>
                    <div className="d-flex mt-3">
                        <p className="text-capitalize mb-0 fs-13"><i class="fa-regular fa-calendar text-black mx-1"></i> 06/03/2024 09:00</p>
                        <p className="text-capitalize mb-0 fs-13 mx-2">-</p>
                        <p className="text-capitalize mb-0 fs-13">13/03/2024 17:00</p>
                    </div>
                    <div className="d-flex mb-3 mt-2">
                        <p className="text-capitalize mb-0 fs-13"><b>Break:</b>  0.00mins</p>
                        <p className="text-capitalize mb-0 fs-13 mx-2"></p>
                        <p className="text-capitalize mb-0 fs-13 text-success">Paid / <span className='text-danger'>Unpaid</span></p>
                    </div>
                </div>
            </div>

            <div className="border-bottom">
                <h6 className="mb-2 text-black">Additional Details:</h6>
                <div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h6 className="text-black mb-1">Rate p/h</h6>
                            <p>£10</p>
                        </div>
                        <div className='col-lg-6'>
                            <h6 className="text-black mb-1 text-nowrap">Health & Safety Instructions</h6>
                            <p>N/A</p>
                        </div>
                    </div>

                    <div className='row'>
                        
                        <div className='col-lg-6'>
                            <h6 className="text-black mb-1 text-nowrap">Break Times</h6>
                            <p>0</p>
                        </div>

                        <div className='col-lg-6'>
                            <h6 className="text-black text-nowrap">Break Paid</h6>
                            <p>0</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h6 className="text-black mb-1">Health & Safety Issues?</h6>
                        <p>No</p>
                    </div>

                    <div className='col-lg-6'>
                        <h6 className="text-black mb-1 text-nowrap">Job Description:</h6>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>

                {/* <div className='row'>
                    <div className='col-lg-6'>
                        <h6 className="text-black mb-1 text-nowrap">Job Description</h6>
                        <p>Lorem ipsum</p>
                    </div>

                    <div className='col-lg-6'>
                        <h6 className="text-black mb-1 text-nowrap">Job Description</h6>
                        <p>Lorem ipsum</p>
                    </div>
                </div> */}

                {/* <div className="d-flex align-items-center mb-3" style={{ gap: "5.9rem" }}>
                    <h6 className="font-weight-bold d-flex flex-column mb-0">Health & Safety issues?</h6>
                    <p className="mb-0">Yes</p>
                </div>

                <div className="mb-4">
                    <h6 className="font-weight-bold d-flex flex-column mb-2">Health & Safety Instructions</h6>
                    <p className="px-2 rounded-xl py-2" style={{ backgroundColor: "#edf2f4" }}>
                        Sample Health & Safety Instructions
                    </p>
                </div> */}

                {/* <div>
                        <h6 className="font-weight-bold d-flex flex-column mb-2">Job Description</h6>
                        <p className="px-2 rounded-xl py-2" style={{ backgroundColor: "#edf2f4" }}>
                            Sample Job Description
                        </p>
                    </div> */}
            </div>

            <div className="border-bottom">
                <h6 className="text-black d-flex flex-column mb-2">Job Uniform:</h6>
                <div className="d-flex gap-3 align-items-center my-4">
                    <img src={workerImage} alt="img" height={70} width={70} className='rounded-circle'/>
                    <div className='d-column'>
                    <p className='mb-0 text-black'>Green </p>
                    <p>Test 123 lorme  </p>
                    </div>
                </div>
            </div>

            <div className="border-bottom">
                <h6 className="text-black d-flex flex-column mb-1">Uploads</h6>
                <p>Sample Upload File 1</p>
            </div>

            <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h6 className="text-black d-flex flex-column mb-0">Payment Details:</h6>
                    <p
                        className="text-right mb-0 c-pointer text-success"
                        style={{ color: "#2FE6DE" }}
                        onClick={handleShowMoreClick}
                    >
                        {showPaymentDetails ? "Show less" : "Show more"}
                    </p>
                </div>
                {showPaymentDetails && (
                    <div className="d-flex" style={{ gap: "11rem" }}>
                        <div>
                            <div>
                                <h6 className="text-black d-flex flex-column mb-2">Total Hrs</h6>
                                <p
                                    className="btn-md mb-3 px-5 py-2"
                                    style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4" }}
                                >
                                    56.00
                                </p>
                            </div>

                            <div>
                                <h6 className="text-black d-flex flex-column mb-2">VAT %</h6>
                                <p
                                    className="btn-md mb-3 px-5 py-2"
                                    style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4" }}
                                >
                                    616.00
                                </p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h6 className="text-black d-flex flex-column mb-2">NI %</h6>
                                <p
                                    className="btn-md mb-3 px-5 py-2"
                                    style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4" }}
                                >
                                    677.00
                                </p>
                            </div>

                            <div>
                                <h6 className="text-black d-flex flex-column mb-2">Fee %</h6>
                                <p
                                    className="btn-md mb-3 px-5 py-2"
                                    style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4" }}
                                >
                                    154.00
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                <div className="d-flex gap-5 align-items-center mt-4">
                    <h6 className="text-black d-flex flex-column mb-0">Total Payment</h6>
                    {/* <i className="fa-solid fa-circle-info fs-5 c-pointer text-success" onClick={handleShowPopup}></i> */}
                </div>
                <p className=" text-black mb-5">£470.00</p>
                {/* <PopUp title="Info" show={showPopup} onHide={handleClosePopup} content={popUpContent} /> */}
            </div>
        </Stack>
    );


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

    const WorkerAllJobs = [
        {
            id: 1,
            name: "Alex Hales",
            industry: "Hospitality",
            job_roles: "Waiting Staff",
            address: "Lahore-Islamabad Motorway, Block E Sabzazar",
            start_date_time: "April 19th, 2024. 02:21:39 PM",
            end_date_time: "April 22nd, 2024. 04:21:39 PM",
            rate_ph: 20
        },
        {
            id: 2,
            name: "Jane Doe",
            industry: "Technology",
            job_roles: "Software Engineer",
            address: "123 Innovation Drive, Silicon Valley",
            start_date_time: "March 5th, 2024. 09:00:00 AM",
            end_date_time: "March 5th, 2024. 05:00:00 PM",
            rate_ph: 25
        },
        {
            id: 3,
            name: "John Smith",
            industry: "Healthcare",
            job_roles: "Nurse",
            address: "456 Health Avenue, Medical City",
            start_date_time: "May 10th, 2024. 08:00:00 AM",
            end_date_time: "May 10th, 2024. 04:00:00 PM",
            rate_ph: 30
        },
        {
            id: 4,
            name: "Emily Davis",
            industry: "Finance",
            job_roles: "Financial Analyst",
            address: "789 Financial Blvd, Finance District",
            start_date_time: "June 15th, 2024. 10:00:00 AM",
            end_date_time: "June 15th, 2024. 06:00:00 PM",
            rate_ph: 35
        },
        {
            id: 5,
            name: "Michael Brown",
            industry: "Retail",
            job_roles: "Store Manager",
            address: "101 Retail Road, Shopping Center",
            start_date_time: "July 20th, 2024. 11:00:00 AM",
            end_date_time: "July 20th, 2024. 07:00:00 PM",
            rate_ph: 40
        },
        {
            id: 6,
            name: "Sarah Johnson",
            industry: "Education",
            job_roles: "Teacher",
            address: "202 Education St., Academic Park",
            start_date_time: "August 25th, 2024. 09:30:00 AM",
            end_date_time: "August 25th, 2024. 03:30:00 PM",
            rate_ph: 45
        },
        {
            id: 7,
            name: "David Lee",
            industry: "Construction",
            job_roles: "Site Supervisor",
            address: "303 Construction Lane, Building Zone",
            start_date_time: "September 1st, 2024. 07:00:00 AM",
            end_date_time: "September 1st, 2024. 03:00:00 PM",
            rate_ph: 50
        }
    ];

    const getWorkr = () => {
        return WorkerAllJobs.map((job, idx) => {
            return (
                <tr key={job.id} role="row" className="odd">
                    <td className='text-success'>{job.id}</td>
                    <td>
                        <div className="media">
                            <div className="text-nowrap">
                                <div className="d-flex gap-2 align-items-center">
                                    <h6 className="mb-0">{job.name}</h6>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="media">
                            <div className="text-nowrap">
                                <h6 className="mb-0">{job.industry}</h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="media">
                            <div className="text-nowrap">
                                <h6 className="mb-0 text-capitalize">{job.job_roles}</h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="media">
                            <div className="media-body">
                                <div>
                                    <h6 className="mb-0">{job.address}</h6>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="media">
                            <div className="media-body text-nowrap">
                                <h6 className="mb-0">{job.start_date_time}</h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="media">
                            <div className="media-body text-nowrap">
                                <h6 className="mb-0">{job.end_date_time}</h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="d-flex align-items-center">
                            <h6 className="mb-0 text-capitalize">{job.rate_ph}</h6>
                        </div>
                    </td>
                    <td onClick={() => handleShowJobDetailsModal(job)} >
                        <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5728 17.3332C18.2823 17.3332 19.668 15.8408 19.668 13.9998C19.668 12.1589 18.2823 10.6665 16.5728 10.6665C14.8633 10.6665 13.4776 12.1589 13.4776 13.9998C13.4776 15.8408 14.8633 17.3332 16.5728 17.3332Z" fill="#00B094" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.328928 13.5004C2.49779 6.06387 8.94813 0.666504 16.5731 0.666504C24.1981 0.666504 30.6485 6.06394 32.8173 13.5005C32.9121 13.8256 32.9121 14.1742 32.8173 14.4993C30.6484 21.9358 24.1981 27.3332 16.5731 27.3332C8.94812 27.3332 2.49775 21.9357 0.328925 14.4992C0.234107 14.1741 0.234108 13.8255 0.328928 13.5004ZM10.3823 13.9998C10.3823 10.3179 13.1539 7.33317 16.5728 7.33317C19.9917 7.33317 22.7633 10.3179 22.7633 13.9998C22.7633 17.6817 19.9917 20.6665 16.5728 20.6665C13.1539 20.6665 10.3823 17.6817 10.3823 13.9998Z" fill="#00B094" />
                        </svg>
                    </td>
                </tr>
            );
        });
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
                                    </div>
                                    <div className="col-lg-6 col-sm-12 mb-2 ">
                                        <Form className="d-flex gap-2 justify-content-end">
                                            <div className="date-picker-container position-relative">
                                                <ReactDatePicker
                                                    selected={startDatePicker}
                                                    onChange={(date) => setStartDatePicker(date)}
                                                    style={{ maxWidth: '200px' }}
                                                    className="form-control rounded-3 border-dark w-100 custom-dropdown-toggle bg-transparent py-3 float-end"
                                                    dateFormat="dd/MM/yyyy"
                                                    placeholderText="From"
                                                />
                                                <i className="fa-solid fa-chevron-down fa-sm position-absolute calendar-icon-worker mt-2" style={{ color: '#00B094' }} />
                                            </div>
                                            <div className="date-picker-container position-relative mr-3">
                                                <ReactDatePicker
                                                    selected={dueDate}
                                                    onChange={(date) => setDueDate(date)}
                                                    style={{ maxWidth: '200px' }}
                                                    className="form-control rounded-3 border-dark w-100 custom-dropdown-toggle bg-transparent py-3"
                                                    dateFormat="dd/MM/yyyy"
                                                    placeholderText="To"
                                                />
                                                <i className="fa-solid fa-chevron-down fa-sm position-absolute calendar-icon-worker mt-2" style={{ color: '#00B094' }} />
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
                                                            WorkerAllJobs ? getWorkr() : (
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
                title="Details"
                show={showJobDetailsModal}
                onHide={handleCloseJobDetailsModal}
                content={(jobSummary(selectedJob))}
            />
        </>
    )
}

export default WorkerSeeAllJobs
