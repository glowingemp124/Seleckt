import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allemployers, toggleStatus, toggleApproved, toggleAdminInput, reset } from "../../../features/employers/employerSlice";
import { toast } from "react-toastify";
import Nav from "../../layouts/nav";
import dateFormat from "dateformat";
import ReactPaginate from "react-paginate";
import Spinner from "../../components/Spinner";
import CustomeModal from "../../components/customeModal/CustomeModal";
import { Button, Dropdown, Form, Stack } from "react-bootstrap";
import companyLogo from "../../../images/avatar/1.jpg"
import ReactDatePicker from "react-datepicker";


function EmployerSpend() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [selectedFrom, setSelectedFrom] = useState('From');
    const [selectedTo, setSelectedTo] = useState('To');
    const [totalCommission, setTotalCommission] = useState('Total Commission: ');
    const [paymentToWorker, setPaymentToWorker] = useState('Payment to Worker:');
    const [totalAmount, setTotalAmount] = useState('Total Amount: ');
    const [startDatePicker, setStartDatePicker] = useState(null);
    const [dueDate, setDueDate] = useState(null);


    const handleSelectFrom = (eventKey) => {
        setSelectedFrom(eventKey);
    };

    const handleSelectTo = (eventKey) => {
        setSelectedTo(eventKey);
    };

    const handleSelectTotalCommission = (eventKey) => {
        setTotalCommission(eventKey);
    };

    const handleSelectPaymentToWorker = (eventKey) => {
        setPaymentToWorker(eventKey);
    };

    const handleSelectTotalAmount = (eventKey) => {
        setTotalAmount(eventKey);
    };

    const [isModalOpen, setIsModalOpen] = useState(false)

    const { user } = useSelector((state) => state.auth);
    const { employers, isLoading, isError, message } = useSelector(
        (state) => state.employers
    );

    const handleShowModal = (jobId) => {
        setIsModalOpen(true)
        // dispatch(getJobDetails({ job_id: jobId }))
    }
    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

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
        dispatch(allemployers(1));
        return () => reset();
    }, [user, navigate, isError, message, dispatch]);

    // State for pagination
    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 10;
    const pageVisted = pageNumber;
    let pageCount;
    const total_pages = employers?.total_pages
    const employersData = employers?.body


    const getEmployer = () => {
        pageCount = total_pages;
        return Array.isArray(employersData) && employersData?.map((data, index) => {
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
                                    <img src={data.image} height={50} width={50} alt="" onError={({ currentTarget }) => {
                                        currentTarget.onerror = null; // prevents looping
                                        currentTarget.src = `${process.env.REACT_APP_IMAGEBASEURL}noImg.png`;
                                    }} />
                                </h6>
                            </div>
                        </div>
                    </td>

                    <td><b>Alex Hales</b></td>
                    <td><b>£210.00</b></td>
                    <td><b>£200.00</b></td>
                    <td><b>£400.00</b></td>

                    <td>
                        <div className="">
                            <button onClick={() => handleShowModal()}>
                                {/* <i className="fa fa-eye fa-2x mx-3" style={{ color: '#00B094' }} /> */}
                                <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5728 23.3332C20.2823 23.3332 21.668 21.8408 21.668 19.9998C21.668 18.1589 20.2823 16.6665 18.5728 16.6665C16.8633 16.6665 15.4776 18.1589 15.4776 19.9998C15.4776 21.8408 16.8633 23.3332 18.5728 23.3332Z" fill="#00B094" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.32893 19.5004C4.49779 12.0639 10.9481 6.6665 18.5731 6.6665C26.1981 6.6665 32.6485 12.0639 34.8173 19.5005C34.9121 19.8256 34.9121 20.1742 34.8173 20.4993C32.6484 27.9358 26.1981 33.3332 18.5731 33.3332C10.9481 33.3332 4.49775 27.9357 2.32892 20.4992C2.23411 20.1741 2.23411 19.8255 2.32893 19.5004ZM12.3823 19.9998C12.3823 16.3179 15.1539 13.3332 18.5728 13.3332C21.9917 13.3332 24.7633 16.3179 24.7633 19.9998C24.7633 23.6817 21.9917 26.6665 18.5728 26.6665C15.1539 26.6665 12.3823 23.6817 12.3823 19.9998Z" fill="#00B094" />
                                </svg>

                            </button>
                        </div>
                    </td>
                </tr>
            );
        });
    };

    const changePage = async (data) => {
        console.log('change page :: ', data);
        dispatch(allemployers(data.selected + 1))
        setPageNumber(data.selected);
    };

    const employeSpendSummary = (
        <Stack gap={3}>
            <div className='border-bottom'>
                <h6 className=" mb-2 text-black">Name:</h6>
                <p className="text-capitalize mb-3 text-black">GlowingSoft Technologies</p>
            </div>

            <div className='border-bottom'>
                <h6 className="mb-2 text-black">Company Logo:</h6>
                <img src={companyLogo} alt="" width="50" className="rounded-circle" />
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
                <h6 className="mb-2 text-black">Address:</h6>
                <p className="text-capitalize mb-3 text-black">GlowingSoft Technologies</p>
            </div>
            <div className='border-bottom'>
                <h6 className="mb-2 text-black">Contact Name:</h6>
                <p className="text-black"> lahore, Punjab, pakistan</p>
            </div>

            <div className='border-bottom'>
                <h6 className="mb-2 text-black">Number:</h6>
                <p className="text-black"> +44 11 2222 33</p>
            </div>
            <div className='border-bottom'>
                <h6 className="mb-2 text-black">Email Address:</h6>
                <p>alexhales14@gmail.com</p>
            </div>
            <div className='border-bottom'>
                <h6 className="mb-2 text-black">Payment to Workers:</h6>
                <p>£400.00</p>
            </div>
            <div className='border-bottom'>
                <h6 className="mb-2 text-black">Seleckt Fee:</h6>
                <p>£200.00</p>
            </div>
            <div className='border-bottom'>
                <h6 className="mb-2 text-black">VAT Amount:</h6>
                <p>2300.00</p>
            </div>
            <div className='border-bottom'>
                <h6 className="mb-2 text-black">NI Tax:</h6>
                <p>£300.00</p>
            </div>
            <div className='border-bottom'>
                <h6 className="mb-2 text-black">APPR LEVY:</h6>
                <p>£300.00</p>
            </div>
            <div className='border-bottom'>
                <p className="font-weight-bold mb-2 text-black">Amount:</p>
                <p>£300.00</p>
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
                                <div className="d-flex flex-wrap row my-5">
                                    <div className="col-lg-3 ">
                                        <h1 className="text-black fs-35 font-w600 mb-3">
                                            Employers Spend
                                        </h1>
                                        <h6 className="fs-16 mb-1">
                                            {(pageVisted + userPerPage > total_pages
                                                ? total_pages
                                                : pageVisted + userPerPage) - pageVisted}
                                            {" "} Rows per page
                                        </h6>
                                        {/* <span className="fs-14">Based your preferences</span> */}
                                    </div>
                                    <div className="col-lg-9 mb-2">
                                        <Form className="d-flex flex-wrap gap-2 justify-content-end">
                                            <div className="date-picker-container mt-4 position-relative">
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
                                            <div className="date-picker-container mt-4 position-relative mr-3">
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

                                            {/* <Form className="d-flex flex-wrap gap-2 justify-content-end"> */}
                                            <div className="mt-md-4 rounded-4 bg-transparent p-3 d-flex align-items-center justify-content-center" style={{ border: '1px solid #c4c4c4' }}>
                                                {totalCommission} <span className="text-success mx-1"> £0</span>
                                            </div>

                                            <div className="mt-md-4 p-3 rounded-4 bg-transparent  d-flex align-items-center justify-content-center" style={{ border: '1px solid #c4c4c4' }}>
                                                {paymentToWorker} <span className="text-success mx-1"> £0</span>
                                            </div>
                                            <div className="mt-md-4  p-3 rounded-4 bg-transparent d-flex align-items-center justify-content-center" style={{ border: '1px solid #c4c4c4' }}>
                                                {totalAmount} <span className="text-success mx-1"> £0</span>
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
                                                                style={{ width: 10, backgroundColor: '#00B094', color: 'white' }}
                                                            >
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
                                                                Logo
                                                            </th>
                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Status: activate to sort column ascending"
                                                                style={{ width: 100, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Contact Name
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
                                                                Commission
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
                                                                Payment to Worker
                                                            </th>


                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Contact: activate to sort column ascending"
                                                                style={{ width: 66, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Amount
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
                                                    <tbody>{getEmployer()}</tbody>
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
                title="Employer Spend"
                show={isModalOpen}
                onHide={handleCloseModal}
                content={employers ? employeSpendSummary : "Loading..."}
            />
        </>
    );
}

export default EmployerSpend;
