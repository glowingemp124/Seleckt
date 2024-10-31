import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { alltemplates, toggleStatus, reset } from "../../../features/templates/templateSlice";
import { toast } from "react-toastify";
import Nav from "../../layouts/nav";
import dateFormat from "dateformat";
import ReactPaginate from "react-paginate";
import Spinner from "../../components/Spinner";

import strikePic from "../../../images/avatar/1.jpg"
import { Button, FormControl, InputGroup, Modal } from "react-bootstrap";

function Strikes() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [modalConfirmation, setModalConfirmation] = useState(false);
    const [modalAddStrikes, setModalAddStrikes] = useState(false);
    // const [modalOfNextKin, setModalOfNextKin] = useState(false);

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
                    <td className="text-success fw-bold">{index + 1 + (pageNumber === 0 ? 0 : pageNumber * 10)}.</td>
                    <td>
                        <div className="media">
                            <div className="media-body text-nowrap">
                                <h6 className="text-black font-w600 fs-16 mb-0">
                                    {/* <img src={data.icons} height={50} width={50} alt="" onError={({ currentTarget }) => {
                                        currentTarget.onerror = null; 
                                        currentTarget.src = `${process.env.REACT_APP_IMAGEBASEURL}noImg.png`;
                                    }} /> */}
                                    <img src={strikePic} alt="" className="rounded-circle" width="50" />
                                </h6>
                            </div>
                        </div>
                    </td>
                    {/* <td>
                        <div className="media">
                            <div className="media-body text-nowrap">
                                <h6 className="text-black font-w600 fs-16 mb-0">
                                    {data.name}
                                </h6>
                            </div>
                        </div>
                    </td> */}
                    <td>
                        <div className="media">
                            <div className="media-body text-nowrap">
                                <h6 className="text-black  mb-0">
                                    {data.industry.title}
                                </h6>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="media">
                            <div className="media-body text-nowrap">
                                <h6 className="text-black  mb-0">
                                    {/* {data.template_jobroles.length > 0 ? data.template_jobroles.length : 0} */}
                                    someone@gmail.com
                                </h6>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="media">
                            <div className="media-body">
                                <h6 className="text-black  mb-0 text-nowrap">
                                    {/* {data.address.address.line1} */}
                                    +44 434 343433333
                                </h6>
                            </div>
                        </div>
                    </td>

                    {/* <td>
                        <div className="media">
                            <div className="media-body text-nowrap">
                                <div className="text-black  fs-16 mb-0">
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
                    </td> */}


                    <td><h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tempore obcaecati</h6></td>
                    <td><h6>{getDate(data.createdAt)}</h6></td>
                    <td className="text-center text-nowrap d-flex justify-content-center"><h6>10</h6><i class="fa-solid fa-circle-info text-danger mx-2 fa-1x" onClick={() => setModalConfirmation(true)}></i></td>
                    {/* <td>
                        <div className="d-flex align-items-center">
                            <a className="btn btn-rounded btn-info" href={"mailto:" + data.email}>
                                <i className="fa fa-eye" />
                            </a>
                        </div>
                    </td> */}
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
                                <div className=" mb-4 row">
                                    <div className="col-xl-3 col-lg-4 mb-2">
                                        <h1 className="text-black fs-35  mb-3">
                                            Strikes
                                        </h1>
                                        <h6 className="fs-16 mb-1">
                                            {userPerPage} Rows per page
                                        </h6>
                                    </div>
                                    <div className="col-xl-9 col-lg-8 text-end">
                                        <Button
                                            variant="primary"
                                            className="btn btn-rounded "
                                            onClick={() => setModalAddStrikes(true)}
                                        >
                                            +   Add New Strikes
                                        </Button>
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
                                                                style={{ width: 100, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Image
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
                                                                Email Address
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
                                                                Contact No
                                                            </th>
                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Contact: activate to sort column ascending"
                                                                style={{ width: 300, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Strike Reason
                                                            </th>
                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Contact: activate to sort column ascending"
                                                                style={{ width: 300, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Date
                                                            </th>

                                                            <th
                                                                className="sorting"
                                                                tabIndex={0}
                                                                aria-controls="example5"
                                                                rowSpan={1}
                                                                colSpan={1}
                                                                aria-label="Date Applied: activate to sort column ascending"
                                                                style={{ width: 54, backgroundColor: '#00B094', color: 'white' }}
                                                            >
                                                                Number of Strikes
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
            <Modal className="fade mt-5" show={modalConfirmation} size="lg">
                <Modal.Header>
                    <Modal.Title>Confirmation</Modal.Title>
                    <Button
                        variant=""
                        className="close"
                        onClick={() => setModalConfirmation(false)}
                    >
                        <span>&times;</span>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <p className="my-4 text-center">This worker now has <span className="text-danger">5 Strikes</span>. Do you want to deactivate the worker’s account?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className="btn btn-sm rounded-4 border-0 bg-transparent text-primary"
                        onClick={() => setModalConfirmation(false)}
                    >
                        No
                    </Button>
                    <Button className="btn btn-sm rounded-4 border-0 bg-transparent text-success">Yes</Button>
                </Modal.Footer>
            </Modal>

            <Modal className="fade mt-5" show={modalAddStrikes}>
                <Modal.Header>
                    <Modal.Title>Add Strike</Modal.Title>
                    <Button
                        variant=""
                        className="close"
                        onClick={() => setModalAddStrikes(false)}
                    >
                        <span>&times;</span>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <div className="rounded-3 my-4" style={{ border: '1px solid #e5e5e5' }}>
                        <InputGroup className="">
                            <InputGroup.Text className="bg-transparent text-success">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" fill="#00B094" stroke="#00B094" strokeWidth="2" />
                                </svg>
                            </InputGroup.Text>
                            <FormControl
                                className="rounded-3 border-0"
                                type="name"
                                placeholder="Enter name"
                            />
                        </InputGroup>
                    </div>
                    <div className="rounded-3 my-4" style={{ border: '1px solid #e5e5e5' }}>
                        <InputGroup className="">
                            <InputGroup.Text className="bg-transparent text-success">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.53249 9.35106L7.65426 11.6409C9.97036 12.9277 11.1284 13.571 12.3548 13.8232C13.4402 14.0465 14.5598 14.0465 15.6452 13.8232C16.8716 13.571 18.0296 12.9276 20.3457 11.6409L24.4675 9.35106M3.53249 9.35106C3.5 9.89782 3.5 10.5705 3.5 11.433V16.5663C3.5 18.5265 3.5 19.5066 3.88148 20.2553C4.21703 20.9139 4.75247 21.4493 5.41103 21.7849C6.15972 22.1663 7.13982 22.1663 9.1 22.1663H18.9C20.8602 22.1663 21.8403 22.1663 22.589 21.7849C23.2475 21.4493 23.783 20.9139 24.1185 20.2553C24.5 19.5066 24.5 18.5265 24.5 16.5663V11.433C24.5 10.5705 24.5 9.89782 24.4675 9.35106M3.53249 9.35106C3.57385 8.65516 3.66785 8.16331 3.88148 7.74404C4.21703 7.08547 4.75247 6.55004 5.41103 6.21448C6.15972 5.83301 7.13982 5.83301 9.1 5.83301H18.9C20.8602 5.83301 21.8403 5.83301 22.589 6.21448C23.2475 6.55004 23.783 7.08547 24.1185 7.74404C24.3322 8.16331 24.4261 8.65516 24.4675 9.35106" stroke="#00B094" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </InputGroup.Text>
                            <FormControl
                                className="rounded-3 border-0"
                                type="email"
                                placeholder="Enter email address"
                            />
                        </InputGroup>
                    </div>
                    <div>
                        {/* Input Group with SVG Icon */}
                        <div className="rounded-3 my-4" style={{ border: '1px solid #e5e5e5' }}>
                            <InputGroup>
                                <InputGroup.Text className="bg-transparent text-success">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 6.41667C3.5 16.4038 11.5962 24.5 21.5833 24.5C22.0339 24.5 22.4807 24.4835 22.923 24.4511C23.4306 24.414 23.6844 24.3954 23.9155 24.2623C24.1068 24.1522 24.2883 23.9569 24.3842 23.758C24.5 23.5179 24.5 23.2378 24.5 22.6777V19.3908C24.5 18.9197 24.5 18.6842 24.4225 18.4823C24.354 18.304 24.2428 18.1452 24.0986 18.0198C23.9353 17.878 23.7139 17.7975 23.2713 17.6365L19.5299 16.276C19.0149 16.0887 18.7574 15.9951 18.513 16.011C18.2976 16.025 18.0902 16.0985 17.9141 16.2234C17.7143 16.365 17.5733 16.6 17.2914 17.0699L17.2914 17.0699L16.3333 18.6667C13.2418 17.2666 10.7355 14.757 9.33333 11.6667L10.9301 10.7086C11.4 10.4267 11.635 10.2857 11.7766 10.0859C11.9015 9.90976 11.975 9.70243 11.989 9.48698C12.0049 9.24265 11.9113 8.98512 11.724 8.47006L11.724 8.47005L10.3635 4.72875C10.2025 4.28606 10.122 4.06471 9.98015 3.90145C9.85485 3.75724 9.69604 3.64601 9.51769 3.57753C9.31578 3.5 9.08026 3.5 8.6092 3.5H5.32235C4.76219 3.5 4.48211 3.5 4.24198 3.61579C4.04309 3.7117 3.84783 3.89318 3.73765 4.08454C3.60463 4.31558 3.58604 4.56939 3.54887 5.07701C3.51648 5.51934 3.5 5.96608 3.5 6.41667Z" stroke="#00B094" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </InputGroup.Text>
                                <FormControl
                                    className="rounded-3 border-0"
                                    type="number"
                                    placeholder="Enter contact number"
                                />
                            </InputGroup>
                        </div>

                        {/* Select Dropdown with SVG Icon */}
                        <div className="rounded-3 my-4" style={{ border: '1px solid #e5e5e5' }}>
                            <InputGroup>
                                <InputGroup.Text className="bg-transparent text-success">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.8307 24.5H6.53073C5.87733 24.5 5.55064 24.5 5.30107 24.3728C5.08155 24.261 4.90307 24.0825 4.79122 23.863C4.66406 23.6134 4.66406 23.2867 4.66406 22.6333V20.6314C4.66406 19.8898 4.66406 19.519 4.72004 19.2098C4.98008 17.7735 6.10422 16.6493 7.54057 16.3893C7.63031 16.373 7.72504 16.3615 7.83244 16.3533C8.09499 16.3333 8.22626 16.3233 8.4016 16.3364C8.58386 16.35 8.6858 16.3679 8.8617 16.4176C9.03092 16.4653 9.33573 16.6034 9.94535 16.8795C10.8251 17.2781 11.802 17.5 12.8307 17.5C13.8594 17.5 14.8363 17.2781 15.7161 16.8795C16.3257 16.6034 16.6304 16.4653 16.7996 16.4176C16.9755 16.368 17.0773 16.35 17.2595 16.3364H17.4974M23.3307 21L16.3307 21M17.4974 8.16667C17.4974 10.744 15.4081 12.8333 12.8307 12.8333C10.2534 12.8333 8.16406 10.744 8.16406 8.16667C8.16406 5.58934 10.2534 3.5 12.8307 3.5C15.4081 3.5 17.4974 5.58934 17.4974 8.16667Z" stroke="#00B094" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </InputGroup.Text>
                                <FormControl
                                    as="select"
                                    className="form-control rounded-3 border-0"
                                    defaultValue="" // No default selection
                                >
                                    <option value="" disabled>Enter Strike Number</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </FormControl>
                            </InputGroup>
                        </div>

                        <div className="textarea-container rounded-3 my-4" style={{ position: 'relative', border: '1px solid #e5e5e5' }}>
                            <textarea
                                className="form-control rounded-3 border-0"
                                placeholder="Enter strike reason"
                                rows={5}
                                autoFocus
                                required
                                style={{ paddingRight: '40px' }} // Adjust padding to accommodate icon
                            />
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <Button variant="success" className="rounded-4 my-3">Add Strike</Button>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                        <Button
                           variant="danger light"
                           onClick={() => setModalWithTooltip(false)}
                        >
                           Close
                        </Button>
                        <Button variant="primary">Save changes</Button>
                     </Modal.Footer> */}
            </Modal>

        </>
    );
}

export default Strikes;
