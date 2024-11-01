import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Button, Form, Stack } from "react-bootstrap";
import Nav from "../../layouts/nav";
import ReactPaginate from "react-paginate";
import Spinner from "../../components/Spinner";
import { getAllTimeSheet } from "../../../features/jobs/jobslice";
import { truncateString } from "../../../utils/helperFunctions";
import CustomeModal from "../../components/customeModal/CustomeModal";
import PopUp from "../../CommonComponents/popup/PopUp";

import companyLogo from "../../../images/avatar/1.jpg"
import ReactDatePicker from "react-datepicker";


function TimeSheet() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [startDatePicker, setStartDatePicker] = useState(null);
    const [dueDate, setDueDate] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showPaymentDetails, setShowPaymentDetails] = useState(false)

    const [keyword, setKeyword] = useState("")
    const [selectedValue, setSelectedValue] = useState('');


    const handleShowModal = (jobId) => {
        setIsModalOpen(true)
        // dispatch(getJobDetails({ job_id: jobId }))
    }
    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const { user } = useSelector((state) => state.auth);
    const { templates, isError, message } = useSelector(
        (state) => state?.templates
    );

    const { timeSheet, isLoading } = useSelector((state) => state.jobs);
    const { accesstoken } = useSelector((state) => state?.employers)

    const timeSheetData = timeSheet?.body?.data
    const timeSheetTopOptions = timeSheet?.body?.top_options

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedValue(selectedValue);

        const { start_date, end_date } = timeSheetTopOptions?.find(option => option.id === selectedValue);

        dispatch(getAllTimeSheet({
            start_date,
            end_date,
            pageno: pageNumber + 1,
            search: keyword,
            token: accesstoken
        }));
    };

    useEffect(() => {
        if (timeSheetTopOptions?.length === undefined) {
            dispatch(getAllTimeSheet({
                pageno: 1,
                search: keyword,
                token: accesstoken
            }));
        }
    }, []);

    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
        dispatch(getAllTimeSheet({
            pageno: pageNumber + 1,
            search: keyword,
            token: accesstoken
        }));
    };

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
    }, [user, navigate, isError, message]);

    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 10;
    const pageVisted = pageNumber;
    let pageCount;
    const total_pages = templates?.total_pages

    const getTemlpates = () => {
        pageCount = total_pages;
        return timeSheetData?.map((sheet, index) => {
            return (
                <tr role="row" className="odd" key={index}>
                    <td className="text-success fw-bold">{index + 1 + (pageNumber === 0 ? 0 : pageNumber * 10)}.</td>
                    <td>
                        <div className="media">
                            <div className="media-body text-nowrap">
                                <h6 className="text-black  fs-16 mb-0" title={sheet.venue.address.line1.length > 20 && sheet.venue.address.line1}>
                                    {truncateString(sheet.venue.address.line1)}
                                </h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="media">
                            <div className="media-body text-nowrap">
                                {sheet?.industry.map((indus) => (
                                    <h6 className="text-black  fs-16 mb-0">
                                        {indus.title}
                                    </h6>
                                ))}
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="media">
                            <div className="media-body text-nowrap">
                                <h6 className="text-black  fs-16 mb-0">
                                    {sheet.jobrole.title}
                                </h6>
                            </div>
                        </div>
                    </td>


                    <td>
                        <div className="media">
                            <div className="media-body">
                                <h6 className="text-black  fs-16 mb-0">
                                    {sheet.rate}
                                </h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="media">
                            <div className="media-body">
                                <h6 className="text-black  fs-16 mb-0">
                                    {sheet.start_date}
                                </h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="media">
                            <div className="media-body">
                                <h6 className="text-black  fs-16 mb-0">
                                    {sheet.end_date}
                                </h6>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="media">
                            <div className="media-body">
                                <h6 className="text-black  fs-16 mb-0">
                                    {sheet.rate}
                                </h6>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="media">
                            <div className="media-body">
                                <h6 className="text-black  fs-16 mb-0 text-capitalize">
                                    {sheet.worker.name}
                                </h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="">
                            <button onClick={() => handleShowModal()}>
                                {/* <i className="fa fa-eye fa-2x mx-3" style={{ color: '#00B094' }} /> */}
                                <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5728 17.3332C18.2823 17.3332 19.668 15.8408 19.668 13.9998C19.668 12.1589 18.2823 10.6665 16.5728 10.6665C14.8633 10.6665 13.4776 12.1589 13.4776 13.9998C13.4776 15.8408 14.8633 17.3332 16.5728 17.3332Z" fill="#00B094" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.328928 13.5004C2.49779 6.06387 8.94813 0.666504 16.5731 0.666504C24.1981 0.666504 30.6485 6.06394 32.8173 13.5005C32.9121 13.8256 32.9121 14.1742 32.8173 14.4993C30.6484 21.9358 24.1981 27.3332 16.5731 27.3332C8.94812 27.3332 2.49775 21.9357 0.328925 14.4992C0.234107 14.1741 0.234108 13.8255 0.328928 13.5004ZM10.3823 13.9998C10.3823 10.3179 13.1539 7.33317 16.5728 7.33317C19.9917 7.33317 22.7633 10.3179 22.7633 13.9998C22.7633 17.6817 19.9917 20.6665 16.5728 20.6665C13.1539 20.6665 10.3823 17.6817 10.3823 13.9998Z" fill="#00B094" />
                                </svg>

                            </button>
                        </div>
                    </td>
                    {/* <td>
                        <div className="d-flex align-items-center">
                            <button className={`btn btn-rounded ${sheet.is_timesheet_approved ? "btn-success" : "btn-info"}`}>
                                {sheet.is_timesheet_approved ? "True" : "False"}
                            </button>
                        </div>
                    </td> */}
                </tr>
            );
        });
    };

    const changePage = async (data) => {
        setPageNumber(data.selected);
    };

    const templateSummary = (
        <Stack gap={3}>
            <div className='border-bottom'>
                <h6 className="mb-2 text-black">ID:</h6>
                {/* <p className="text-capitalize mb-3">{templates?.venue?.title}</p> */}
                <p className="mb-3 text-black">74326</p>
            </div>

            <div className='border-bottom'>
                <h6 className="mb-2 text-black">Company Name:</h6>
                <p className="mb-3 text-black">Glowingsoft Technologies</p>
                {/* <Button
                    type="button"
                    className="btn-sm mb-3"
                    style={{ borderRadius: "1.3rem" }}
                    variant="success"
                >
                    {templates?.industry?.title}
                </Button> */}
            </div>
            <div className='border-bottom'>
                <h6 className="mb-2 text-black">Company Address:</h6>
                <p className="mb-3 text-black">Office no 161, DHA Phase 1, lahore, pakistan</p>
            </div>

            <div className='border-bottom'>
                <h6 className=" mb-1 text-black">Company Logo:</h6>
                <img src={companyLogo} alt="" width="50" className="rounded-circle mb-3" />
            </div>

            <div className='border-bottom'>
                <h6 className=" mb-2 text-black">Industry:</h6>
                <div className='d-flex flex-wrap gap-1'>
                    <Button
                        type="button"
                        className="btn-sm mb-3 rounded-3"
                        variant="success"
                    >
                        Social Care
                    </Button>
                </div>
            </div>

            <div className='border-bottom'>
                <h6 className=" mb-2 text-black">Job Role:</h6>
                <p className="mb-3 text-black">Bartender</p>
            </div>
            <div className='border-bottom'>
                <h6 className=" mb-2 text-black">Rate P/H</h6>
                <p className="mb-3 text-black">24</p>
            </div>
            <div className='border-bottom'>
                <h6 className=" mb-2 text-black">Start Date and Time:</h6>
                <p className="mb-3 text-black">April 19th 2024 <br /> 02:21:39 PM</p>
            </div>
            <div className='border-bottom'>
                <h6 className=" mb-2 text-black">End Date and Time:</h6>
                <p className="mb-3 text-black">April 19th 2024 <br /> 02:21:39 PM</p>
            </div>
            <div className='border-bottom'>
                <h6 className=" mb-2 text-black">Total Hours:</h6>
                <p className="mb-3 text-black">24</p>
            </div>

            <div className='border-bottom'>
                <h6 className=" mb-1 text-black">Worker Picture:</h6>
                <img src={companyLogo} alt="" width="50" className="rounded-circle mb-3" />
            </div>
            <div className='border-bottom'>
                <h6 className=" mb-2 text-black">Worker Name:</h6>
                <p className="mb-3 text-black">Alex Hales</p>
            </div>
            <div className='border-bottom'>
                <h6 className=" mb-2 text-black">Daily Pay:</h6>
                <p className="mb-3">£24.00</p>
            </div>

            <div className='border-bottom'>
                <h6 className=" mb-2 text-black">Status:</h6>
                <div className='d-flex flex-wrap gap-1'>
                    <Button
                        type="button"
                        className="btn-sm mb-3"
                        style={{ borderRadius: "1.3rem" }}
                        variant="info"
                    >
                        Pending
                    </Button>
                </div>
            </div>

            <div className='border-bottom'>
                <h6 className=" mb-2 text-black">Total Amount:</h6>
                <p>£200.00</p>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h6 className=" mb-2 text-black">Total Shifts Hrs:</h6>
                    <p>90 Hrs</p>
                </div>
                <div className="col-lg-6">
                    <h6 className="mb-2 text-black">Total Check-in/out Hrs</h6>
                    <p>102 Hrs</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h6 className=" mb-2 text-black">Approval Date:</h6>
                    <p>April 19th 2024</p>
                </div>
                <div className="col-lg-6">
                    <h6 className=" mb-2 text-black">Actual Approved Hrs</h6>
                    <p>72 Hrs</p>
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
                                <div className="d-flex flex-wrap mb-4 row">
                                    <div className="col-xl-8 col-lg-4 mb-2">
                                        <h1 className="text-black fs-35 font-w600 mb-3">
                                            Timesheet
                                        </h1>
                                        <h6>
                                            {userPerPage} Rows per page
                                        </h6>
                                    </div>
                                    <div className="col-lg-4 col-sm-12 mb-2 ">
                                        <Form className="d-flex gap-2 justify-content-end">
                                            <div className="date-picker-container position-relative">
                                                {/* <div className="placeholder-text">From</div> */}
                                                <ReactDatePicker
                                                    selected={startDatePicker}
                                                    onChange={(date) => setStartDatePicker(date)}
                                                    className="form-control rounded-4 border-dark w-100 custom-dropdown-toggle bg-transparent pl-4"
                                                    dateFormat="dd/MM/yyyy"
                                                    placeholderText="From"
                                                />
                                                <i className="fa-solid fa-calendar-minus fa-lg position-absolute calendar-icon p-3 " style={{ color: '#00B094' }} />
                                            </div>
                                            <div className="date-picker-container position-relative">
                                                {/* <div className="placeholder-text">Due Date</div> */}
                                                <ReactDatePicker
                                                    selected={dueDate}
                                                    onChange={(date) => setDueDate(date)}
                                                    className="form-control rounded-4 border-dark w-100 custom-dropdown-toggle bg-transparent pl-4"
                                                    dateFormat="dd/MM/yyyy"
                                                    placeholderText="To"
                                                />
                                                <i className="fa-solid fa-calendar-minus fa-lg position-absolute calendar-icon p-3" style={{ color: '#00B094' }} />
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                                {/* <div className="d-lg-flex justify-content-between gap-lg-5 mb-4"> */}
                                {/* 1 */}
                                {/* <div className=" col-xl-12 col-lg-12">
                                        <div className="mb-2 w-75">
                                            <h1 className="text-black fs-35 font-w600 mb-3">
                                                Timesheet
                                            </h1>
                                            <h6 className="text-black fs-16 font-w600 mb-1">
                                                {userPerPage}
                                                Rows per page
                                            </h6>
                                        </div> */}

                                {/* <div className="d-flex flex-wrap w-75 ">
                                            <Form.Control
                                                type="search"
                                                value={keyword}
                                                onChange={handleKeywordChange}
                                                className="rounded-full px-4"
                                                placeholder="Search..."
                                            />
                                        </div> */}

                                {/* <div className=" float-end w-25 mt-5">
                                            <Form.Select size="lg"
                                                value={selectedValue}
                                                onChange={handleSelectChange}
                                            >
                                                {timeSheetTopOptions?.map((option) => (
                                                    <option
                                                        key={option.id}
                                                        value={option.id}
                                                    >
                                                        {option.title || "Today"}
                                                    </option>
                                                ))}

                                            </Form.Select>
                                        </div>*/}
                                {/* </div>  */}
                                {/* </div> */}

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
                                                                ID
                                                            </th>
                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Company: activate to sort column ascending"
                                                                style={{ width: 216, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Address
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
                                                                aria-label="Company: activate to sort column ascending"
                                                                style={{ width: 116, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Job Role
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
                                                                Rate P/H
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
                                                                Start Date
                                                            </th>

                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Contact: activate to sort column ascending"
                                                                style={{ width: 160, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                End Date
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
                                                                Total Hours
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
                                                                Workers Name
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
                title="Timesheet"
                show={isModalOpen}
                onHide={handleCloseModal}
                content={templates ? templateSummary : "Loading..."}
            />
        </>
    );
}

export default TimeSheet;
