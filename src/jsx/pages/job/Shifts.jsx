import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allJobs, reset, getJobDetails } from "../../../features/jobs/jobslice";
import { toast } from "react-toastify";
import Nav from "../../layouts/nav";
import ReactPaginate from "react-paginate";
import Spinner from "../../components/Spinner";
import { Button, Stack } from "react-bootstrap";
import CustomeModal from "../../components/customeModal/CustomeModal";
import PopUp from "../../CommonComponents/popup/PopUp";

function Jobs() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showPaymentDetails, setShowPaymentDetails] = useState(false)


    const { user } = useSelector((state) => state.auth);
    const { jobs, isLoading, isError, message, jobDetail } = useSelector((state) => state.jobs);
    const selectedJob = jobDetail?.data?.body

    const handleShowModal = (jobId) => {
        setIsModalOpen(true)
        dispatch(getJobDetails({ job_id: jobId }))
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
        dispatch(allJobs(1));
        return () => reset();
    }, [user, navigate, isError, message, dispatch]);

    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 10;
    const pageVisted = pageNumber;
    let pageCount;
    const total_pages = jobs?.total_pages
    const jobsData = jobs?.body

    const getJobs = () => {
        pageCount = total_pages;
        return jobsData?.map((data, index) => {
            return (
                <tr role="row" className="odd" key={index}>
                    <td className="text-success"><b>{index + 1 + (pageNumber === 0 ? 0 : pageNumber * 10)}</b></td>
                    <td>
                        <div className="media">
                            <div className="media-body text-nowrap">
                                <h6 className="text-black fs-16 mb-0">
                                    {data.company.company_name}
                                </h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="media">
                            <div className="media-body text-nowrap">
                                <h6 className="text-black fs-16 mb-0">
                                    {data.industry.title}
                                </h6>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="media">
                            <div className="media-body text-nowrap">
                                <h6 className="text-black fs-16 mb-0">
                                    {data?.jobrole?.title}
                                </h6>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="media">
                            <div className="media-body">
                                <h6 className="text-black fs-16 mb-0">
                                    {data.address.address.country}
                                </h6>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="media">
                            <div className="media-body">
                                <h6 className="text-black fs-16 mb-0">
                                    {data.job_datetime.datetime[0].start_date}
                                </h6>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="media">
                            <div className="media-body">
                                <h6 className="text-black fs-16 mb-0">
                                    {data.job_datetime.datetime[0].end_date}
                                </h6>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="media">
                            <div className="media-body">
                                <h6 className="text-black fs-16 mb-0">
                                    {data.rate}
                                </h6>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="media">
                            <div className="media-body">
                                <h6 className="text-black fs-16 mb-0">
                                    {data.staff_qty}
                                </h6>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="media">
                            <div className="media-body">
                                <h6 className="text-black fs-16 mb-0">
                                    {data.job_datetime.datetime[0].qty}
                                </h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="d-flex align-items-center">
                            <button
                                onClick={() => handleShowModal(data._id)}
                            >
                                <i className="fa fa-eye fa-2x mx-3" style={{ color: '#00B094' }} />
                            </button>
                        </div>
                    </td>
                </tr>
            );
        });
    };

    const changePage = async (data) => {
        setPageNumber(data.selected);
        dispatch(allJobs(data.selected + 1))
    };

    const jobSummary = (
        <Stack gap={3}>
            <div className='border-bottom'>
                <p className="font-weight-bold mb-2 text-black">Venue</p>
                <p className="text-capitalize mb-3">{selectedJob?.venue.title}</p>
            </div>

            <div className='border-bottom'>
                <p className="font-weight-bold mb-2 text-black">Industry</p>
                <Button
                    type="button"
                    className="btn-sm mb-3 rounded-4"
                    variant="success"
                >
                    {selectedJob?.industry?.title}
                </Button>
            </div>

            <div className='border-bottom'>
                <p className="font-weight-bold mb-2 text-black">Job Roles</p>
                <Button
                    type="button"
                    className="btn-sm mb-3 rounded-4"
                    variant="success"
                >
                    {selectedJob?.jobrole.title}
                </Button>
            </div>

            <div className='border-bottom'>
                <p className="font-weight-bold mb-2 text-black">Skills</p>
                <div className='d-flex flex-wrap gap-1'>
                    {selectedJob?.j_skill.filter(skill => skill.is_active).length > 0 ? selectedJob?.j_skill.filter(skill => skill.is_active).map((skill) => (
                        <Button
                            key={skill?._id}
                            type="button"
                            className="btn-sm mb-3 rounded-4"
                            variant="success"
                        >
                            {skill?.title}
                        </Button>
                    )) : (<p className='text-red'>No Jobs</p>)}
                </div>
            </div>

            <div className="border-bottom">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="font-weight-bold mb-0 text-black">Date & Time</p>
                    <p className="font-weight-bold mb-0 text-right text-success">Show all</p>
                </div>
                <p className="font-weight-bold text-right text-black mb-0">Qty/Hired</p>
                <div className='mb-3'>
                    {selectedJob?.datetime.datetime.map((dt, idx) => (
                        <div key={idx} style={{ backgroundColor: "#edf2f4" }} className='mb-1 py-1 rounded-xl'>
                            <div className='d-flex justify-content-around align-items-center px-2'>
                                <p className="text-capitalize mb-0 fs-13">{dt?.start_date}</p>
                                <p className="text-capitalize mb-0 fs-13">-</p>
                                <p className="text-capitalize mb-0 fs-13">{dt?.end_date}</p>
                                <p className='mb-0 fs-13'>{dt.qty}/0</p>
                            </div>
                            <div className="px-2 d-flex justify-content-center">
                                <p className='mb-0 fs-13'>Break Time({dt.break_time})mins, Break Paid({dt.is_break_paid ? "Yes" : "No"})</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-bottom">
                <p className="font-weight-bold mb-2 text-black">Additional Details</p>
                <div className='d-flex' style={{ gap: "11rem" }}>
                    <div>
                        <div>
                            <h6 className="font-weight-bold mb-1">Rate p/h</h6>
                            <p>£{selectedJob?.rate}</p>
                        </div>

                        <div>
                            <h6 className="font-weight-bold mb-1">Break Times</h6>
                            <p>{selectedJob?.break_time}</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h6 className="font-weight-bold mb-1">PO Number</h6>
                            <p>{selectedJob?.po_number}</p>
                        </div>

                        <div>
                            <h6 className="font-weight-bold mb-1">Break Paid</h6>
                            <p>{selectedJob?.break_paid ? "Yes" : "No"}</p>
                        </div>
                    </div>
                </div>

                <div className='d-flex align-items-center mb-3' style={{ gap: "5.9rem" }}>
                    <h6 className="font-weight-bold d-flex flex-column mb-0">Health & Safety issues?</h6>
                    <p className='mb-0'>{selectedJob?.health_safety ? "Yes" : "No"}</p>
                </div>
                <div className=''>
                    <h6 className="font-weight-bold mb-2">Health & Safety Instructions</h6>
                    <p className='px-2 rounded-xl py-2' style={{ backgroundColor: "#edf2f4" }}>{selectedJob?.hs_description === "" ? "N/A" : selectedJob?.hs_description}</p>
                </div>
                <div className=''>
                    <h6 className="font-weight-bold mb-2">Job Description</h6>
                    <p className='px-2 rounded-xl py-2' style={{ backgroundColor: "#edf2f4" }}>{selectedJob?.description === "" ? "N/A" : selectedJob?.description}</p>
                </div>
            </div>

            <div className='border-bottom'>
                <h6 className="font-weight-bold mb-2">Job Uniform</h6>
                <div className='d-flex gap-3 align-items-center mb-4'>
                    <img src={selectedJob?.uniform?.image} alt="img" height={70} width={70} />
                    <p>{selectedJob?.uniform?.description}</p>
                </div>
            </div>

            <div className='border-bottom'>
                <h6 className="font-weight-bold mb-3">Uploads</h6>
                {selectedJob?.is_upload ? selectedJob?.uploads?.map((upload) => (
                    <p key={upload?._id} className='mb-3'>{upload.name}</p>
                )) : <p className='mb-3 text-red'>No Files</p>}
            </div>

            <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h6 className="font-weight-bold mb-0">Payment Details</h6>
                    <p
                        className="font-weight-bold text-right mb-0 c-pointer text-success"
                        onClick={handleShowMoreClick}
                    >
                        {showPaymentDetails ? "Show less" : "Show more"}
                    </p>
                </div>
                <div className='border-bottom mb-3'>
                    {showPaymentDetails && (
                        <div className='d-flex mb-2' style={{ gap: "11rem" }}>
                            <div>
                                <div>
                                    <h6 className="font-weight-bold mb-2">Total Hrs</h6>
                                    <p className="btn-md mb-3 px-5 py-2" style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4" }}>{selectedJob?.total_hours}</p>
                                </div>

                                <div>
                                    <h6 className="font-weight-bold mb-2">VAT %</h6>
                                    <p className="btn-md mb-3 px-5 py-2" style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4" }}>{selectedJob?.VAT}</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h6 className="font-weight-bold mb-2">NI %</h6>
                                    <p className="btn-md mb-3 px-5 py-2" style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4" }}>{selectedJob?.NI}</p>
                                </div>

                                <div>
                                    <h6 className="font-weight-bold mb-2">Fee %</h6>
                                    <p className="btn-md mb-3 px-5 py-2" style={{ borderRadius: "1.3rem", backgroundColor: "#edf2f4" }}>{selectedJob?.FEE}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='border-bottom mb-3'>
                    <div className='d-flex gap-5 align-items-center'>
                        <h6 className="font-weight-bold">Total Payment</h6>
                        <i className="fa-solid fa-circle-info fs-5 c-pointer text-success"></i>
                    </div>
                    <p>£{selectedJob?.total_payment}</p>
                    <PopUp
                        title="Info"
                        content={'popUpContent'}
                    />
                </div>

                <div className='border-bottom mb-3'>
                    <div className='d-flex gap-5 align-items-center'>
                        <h6 className="font-weight-bold">Hired Worker</h6>
                    </div>
                    <p>Worker One</p>
                </div>


                {selectedJob?.workerlist?.length > 0 && <div>
                    <h6 className="font-weight-bold mb-2">Hired Worker</h6>
                    <div className="text-capitalize mb-3">
                        {selectedJob?.workerlist?.length > 0 ? selectedJob?.workerlist.map((wList, i) => (
                            <p key={i}>{wList?.name}</p>

                        )) : (
                            <p className='text-red'>No Workers</p>
                        )}
                    </div>
                </div>}
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
                                <div className="d-flex flex-wrap mb-4 row">
                                    <div className="col-xl-3 col-lg-4 mb-2">
                                        <h1 className="text-black fs-35 font-w600 mb-3">
                                            Shifts
                                        </h1>
                                        <h6 className="text-black fs-16 font-w600 mb-1">
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
                                                                style={{ width: 150, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Company
                                                            </th>

                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Company: activate to sort column ascending"
                                                                style={{ width: 150, backgroundColor: '#00B094', color: 'white' }}
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
                                                                style={{ width: 100, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Job Roles
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
                                                                Job Location
                                                            </th>

                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Date Applied: activate to sort column ascending"
                                                                style={{ width: 200, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Start Time
                                                            </th>

                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Contact: activate to sort column ascending"
                                                                style={{ width: 200, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                End Time
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
                                                                Rate/PH
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
                                                                Staff Qty
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
                                                                Hired Qty
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
                                                    <tbody>{getJobs()}</tbody>
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
            {/* Job Details Modal */}
            <CustomeModal
                title="Shift"
                show={isModalOpen}
                onHide={handleCloseModal}
                content={selectedJob ? jobSummary : "Loading..."}
            />
        </>
    );
}

export default Jobs;